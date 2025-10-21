import { defaultConfig, SmartRConfig } from "./defaultConfig";

export class ConfigManager {
  private config: SmartRConfig = { ...defaultConfig };
  private isInitialized = false;

  // Método principal - funciona das duas formas
  setConfig(userConfig: Partial<SmartRConfig>): void {
    this.config = this.deepMerge(this.config, userConfig);
    this.isInitialized = true;
  }

  // Para auto-load no projeto atual (opcional)
  initialize(): void {
    if (this.isInitialized) return;

    // Só tenta auto-load no projeto atual (não como pacote)
    if (this.isCurrentProject()) {
      this.tryAutoLoad();
    }
  }

  getConfig(): SmartRConfig {
    if (!this.isInitialized) {
      this.initialize();
    }
    return this.config;
  }

  private isCurrentProject(): boolean {
    // Verifica se estamos no projeto original (não como pacote npm)
    // Isso é uma heurística simples - você pode ajustar
    return (
      typeof window !== "undefined" &&
      !window.location.pathname.includes("node_modules")
    );
  }

  private tryAutoLoad(): void {
    try {
      // Tenta carregar do window (configuração global)
      if (typeof window !== "undefined" && (window as any).SmartRConfig) {
        this.setConfig((window as any).SmartRConfig);
        return;
      }

      // Tenta carregar via require (apenas em desenvolvimento)
      if (typeof require !== "undefined") {
        try {
          // @ts-ignore
          const userConfig = require("../../smartR.config.json");
          this.setConfig(userConfig.default || userConfig);
          return;
        } catch (e) {
          // Arquivo não existe - ignora
        }
      }
    } catch (error) {
      console.warn("[SmartR] Auto-load falhou, usando padrão");
    }
  }

  private deepMerge<T>(base: T, patch: Partial<T>): T {
    if (!patch || typeof patch !== "object") return base;
    const out: any = Array.isArray(base)
      ? [...((patch as any) ?? base)]
      : { ...base };

    for (const [k, v] of Object.entries(patch)) {
      const b: any = (base as any)[k];
      if (
        v &&
        typeof v === "object" &&
        !Array.isArray(v) &&
        b &&
        typeof b === "object" &&
        !Array.isArray(b)
      ) {
        out[k] = this.deepMerge(b, v as any);
      } else {
        out[k] = v;
      }
    }
    return out;
  }
}

// Instância global
export const configManager = new ConfigManager();

// Export para compatibilidade (funciona agora)
export const configSmartR = configManager.getConfig();
export type { SmartRConfig };
