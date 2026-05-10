#!/usr/bin/env node

const { execSync } = require("child_process");
const { readFileSync, existsSync, writeFileSync, unlinkSync } = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Cores para console
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
};

const NPMRC_PATH = path.resolve(process.cwd(), ".npmrc");
const NPM_REGISTRY = "https://registry.npmjs.org/";

console.log(`${colors.cyan}📦 Script de Publicação NPM${colors.reset}\n`);

// --- Token resolution ---------------------------------------------------------
// Aceita:
//   --token=xxx       (CLI)
//   --token xxx       (CLI)
//   NPM_TOKEN=xxx     (env var)
// Se nenhum for fornecido, cai no fluxo interativo (`npm whoami`).
function parseTokenFromArgs(argv) {
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith("--token=")) {
      return arg.slice("--token=".length);
    }
    if (arg === "--token" && i + 1 < argv.length) {
      return argv[i + 1];
    }
  }
  return null;
}

function maskToken(token) {
  if (!token) return "";
  if (token.length <= 8) return "***";
  return `${token.slice(0, 4)}…${token.slice(-4)}`;
}

if (process.argv.includes("--help") || process.argv.includes("-h")) {
  console.log(
    `${colors.cyan}Uso:${colors.reset} node publish.js [opções]\n\n` +
      `${colors.cyan}Opções:${colors.reset}\n` +
      `  --token=<TOKEN>   Token do npm para autenticação (alternativa a 'npm login')\n` +
      `  --token <TOKEN>   Mesma coisa, com espaço\n` +
      `  -h, --help        Mostra esta mensagem\n\n` +
      `${colors.cyan}Variáveis de ambiente:${colors.reset}\n` +
      `  NPM_TOKEN         Mesma função do --token, útil em CI\n\n` +
      `Quando um token é fornecido, o script grava um .npmrc temporário no\n` +
      `diretório do projeto durante o publish e remove ao final (incluindo\n` +
      `em caso de erro ou Ctrl+C). Sem token, o script exige 'npm login'.\n`
  );
  process.exit(0);
}

const npmToken = parseTokenFromArgs(process.argv) || process.env.NPM_TOKEN || null;
let npmrcCreated = false;

function writeTempNpmrc(token) {
  if (existsSync(NPMRC_PATH)) {
    console.error(
      `${colors.red}✗ Já existe um .npmrc no diretório do projeto. ` +
        `Remova-o antes de rodar com --token para evitar sobrescrever credenciais.${colors.reset}`
    );
    process.exit(1);
  }
  // Token é gravado num .npmrc do projeto, lido automaticamente pelo npm publish.
  writeFileSync(
    NPMRC_PATH,
    `//registry.npmjs.org/:_authToken=${token}\nregistry=${NPM_REGISTRY}\n`,
    { mode: 0o600 }
  );
  npmrcCreated = true;
}

function cleanupTempNpmrc() {
  if (npmrcCreated && existsSync(NPMRC_PATH)) {
    try {
      unlinkSync(NPMRC_PATH);
      npmrcCreated = false;
    } catch (err) {
      console.error(
        `${colors.red}⚠ Falha ao remover .npmrc temporário: ${err.message}${colors.reset}\n` +
          `${colors.yellow}Remova manualmente: ${NPMRC_PATH}${colors.reset}`
      );
    }
  }
}

// Garantia: se o processo morrer (Ctrl+C, exception, exit), limpamos o .npmrc.
process.on("exit", cleanupTempNpmrc);
process.on("SIGINT", () => {
  cleanupTempNpmrc();
  process.exit(130);
});
process.on("uncaughtException", (err) => {
  cleanupTempNpmrc();
  console.error(err);
  process.exit(1);
});

// Verifica se está logado no npm
function isLoggedIn() {
  try {
    execSync("npm whoami", { stdio: "pipe" });
    return true;
  } catch (error) {
    return false;
  }
}

// Lê a versão atual do package.json
function getCurrentVersion() {
  const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
  return packageJson.version;
}

// Pergunta ao usuário sobre o tipo de bump
async function askForVersionBump() {
  const currentVersion = getCurrentVersion();

  return new Promise((resolve) => {
    rl.question(
      `${colors.yellow}Versão atual: ${currentVersion}\n` +
        `${colors.blue}Escolha o tipo de atualização:\n` +
        `1. ${colors.green}Patch${colors.reset} (1.0.0 → 1.0.1) - bug fixes\n` +
        `2. ${colors.blue}Minor${colors.reset} (1.0.0 → 1.1.0) - novas features\n` +
        `3. ${colors.magenta}Major${colors.reset} (1.0.0 → 2.0.0) - breaking changes\n` +
        `4. ${colors.yellow}Versão personalizada${colors.reset} (digite manualmente)\n` +
        `5. ${colors.red}Cancelar${colors.reset}\n\n` +
        `${colors.cyan}Sua escolha (1-5): ${colors.reset}`,
      (answer) => {
        resolve(answer.trim());
      }
    );
  });
}

// Executa um comando com tratamento de erro
function runCommand(command, description) {
  console.log(`${colors.blue}▶ ${description}...${colors.reset}`);
  try {
    execSync(command, { stdio: "inherit" });
    console.log(`${colors.green}✓ ${description} concluído${colors.reset}\n`);
    return true;
  } catch (error) {
    console.error(
      `${colors.red}✗ Erro ao executar: ${description}${colors.reset}`
    );
    console.error(error.message);
    return false;
  }
}

// Publica o pacote
async function publishPackage() {
  console.log(
    `${colors.cyan}🚀 Iniciando processo de publicação${colors.reset}\n`
  );

  // 1. Autenticação: token via parâmetro/env, ou login interativo
  if (npmToken) {
    writeTempNpmrc(npmToken);
    console.log(
      `${colors.green}✓ Usando token NPM fornecido (${maskToken(npmToken)})${colors.reset}\n`
    );
  } else {
    if (!isLoggedIn()) {
      console.log(`${colors.red}✗ Não está logado no npm!${colors.reset}`);
      console.log(
        `${colors.yellow}Opções:${colors.reset}\n` +
          `  • Login interativo: ${colors.cyan}npm login${colors.reset}\n` +
          `  • Via parâmetro: ${colors.cyan}node publish.js --token=SEU_TOKEN${colors.reset}\n` +
          `  • Via variável de ambiente: ${colors.cyan}NPM_TOKEN=SEU_TOKEN node publish.js${colors.reset}`
      );
      process.exit(1);
    }
    console.log(`${colors.green}✓ Logado no npm${colors.reset}\n`);
  }

  // 2. Pergunta sobre a versão
  const choice = await askForVersionBump();
  let versionCommand;

  switch (choice) {
    case "1":
      versionCommand = "npm version patch";
      break;
    case "2":
      versionCommand = "npm version minor";
      break;
    case "3":
      versionCommand = "npm version major";
      break;
    case "4":
      const customVersion = await new Promise((resolve) => {
        rl.question(
          `${colors.cyan}Digite a nova versão (ex: 1.2.3): ${colors.reset}`,
          resolve
        );
      });
      versionCommand = `npm version ${customVersion}`;
      break;
    case "5":
      console.log(`${colors.yellow}Publicação cancelada${colors.reset}`);
      rl.close();
      process.exit(0);
    default:
      console.log(`${colors.red}Opção inválida${colors.reset}`);
      rl.close();
      process.exit(1);
  }

  // 3. Instala dependências
  if (!runCommand("npm ci", "Instalando dependências (npm ci)")) {
    process.exit(1);
  }

  // 4. Executa testes
  if (existsSync("package.json")) {
    const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
    if (packageJson.scripts && packageJson.scripts.test) {
      const runTests = await new Promise((resolve) => {
        rl.question(
          `${colors.yellow}Executar testes? (s/n): ${colors.reset}`,
          (answer) => {
            resolve(answer.toLowerCase() === "s");
          }
        );
      });

      if (runTests) {
        if (!runCommand("npm test", "Executando testes")) {
          console.log(
            `${colors.yellow}⚠ Testes falharam, continuando?${colors.reset}`
          );
          const continuePublish = await new Promise((resolve) => {
            rl.question(
              `${colors.yellow}Continuar publicação? (s/n): ${colors.reset}`,
              (answer) => {
                resolve(answer.toLowerCase() === "s");
              }
            );
          });
          if (!continuePublish) {
            rl.close();
            process.exit(1);
          }
        }
      }
    }
  }

  // 5. Build
  if (!runCommand("npm run build", "Executando build")) {
    process.exit(1);
  }

  // 6. Atualiza versão
  if (!runCommand(versionCommand, "Atualizando versão")) {
    process.exit(1);
  }

  // 7. Cria pacote local (opcional)
  const createPack = await new Promise((resolve) => {
    rl.question(
      `${colors.yellow}Criar npm pack para teste local? (s/n): ${colors.reset}`,
      (answer) => {
        resolve(answer.toLowerCase() === "s");
      }
    );
  });

  if (createPack) {
    runCommand("npm pack", "Criando pacote local");
    console.log(
      `${colors.green}✓ Pacote .tgz criado localmente${colors.reset}\n`
    );
  }

  // 8. Publica
  const newVersion = getCurrentVersion();
  const confirmPublish = await new Promise((resolve) => {
    rl.question(
      `${colors.yellow}Publicar versão ${newVersion} no npm? (s/n): ${colors.reset}`,
      (answer) => {
        resolve(answer.toLowerCase() === "s");
      }
    );
  });

  if (confirmPublish) {
    if (!runCommand("npm publish --access public", "Publicando no npm")) {
      process.exit(1);
    }
    console.log(
      `${colors.green}🎉 Pacote publicado com sucesso!${colors.reset}`
    );
    console.log(`${colors.cyan}Versão: ${newVersion}${colors.reset}`);
  } else {
    console.log(
      `${colors.yellow}Publicação cancelada pelo usuário${colors.reset}`
    );

    // Reverte a versão
    runCommand("git reset --hard HEAD", "Revertendo mudanças de versão");
  }

  rl.close();
}

// Executa o script
publishPackage().catch(console.error);
