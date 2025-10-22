import { useSmartConfig } from "../hook/useSmartConfig";
import { mapToCssModules } from "../Utils/utils";
import { classNames } from "../Utils/utils";

export enum AlertType {
  Success = 1,
  Warning = 2,
  Danger = 3,
  Info = 4,
}

// Interface para as configurações do Alert baseada na sua estrutura
export interface AlertConfig {
  textAlign?: "center" | "left" | "right";
  classes: {
    container: string;
    success: string;
    warning: string;
    danger: string;
    info: string;
  };
}

interface AlertProps {
  type: AlertType;
  className?: string;
  children?: React.ReactNode;
  config?: Partial<AlertConfig>; // Configurações opcionais por instância
}

export function Alert(props: AlertProps) {
  const { type, children, className, config = {} } = props;

  // Busca configurações do usuário via hook
  const userConfig = useSmartConfig();

  // Configuração padrão fallback baseada na sua estrutura
  const defaultConfig: AlertConfig = {
    textAlign: "center",
    classes: {
      container: "alert",
      success: "alert-success",
      warning: "alert-warning",
      danger: "alert-danger",
      info: "alert-info",
    },
  };

  // Merge das configurações
  const mergedConfig: AlertConfig = {
    ...defaultConfig,
    ...userConfig.components?.alert, // Configurações do usuário do smart config
    ...config, // Configurações por instância
    classes: {
      ...defaultConfig.classes,
      ...userConfig.components.alert.classes,
      ...config.classes,
    },
  };

  let typeClass = "";
  switch (type) {
    case AlertType.Danger:
      typeClass = mergedConfig.classes.danger;
      break;
    case AlertType.Warning:
      typeClass = mergedConfig.classes.warning;
      break;
    case AlertType.Success:
      typeClass = mergedConfig.classes.success;
      break;
    case AlertType.Info:
      typeClass = mergedConfig.classes.info;
      break;
  }

  const classes = mapToCssModules(
    classNames(
      mergedConfig.classes.container,
      typeClass,
      {
        "text-center": mergedConfig.textAlign === "center",
        "text-left": mergedConfig.textAlign === "left",
        "text-right": mergedConfig.textAlign === "right",
      },
      className
    )
  );

  return (
    <div className={classes} role="alert">
      {children}
    </div>
  );
}
