import { useEffect } from "react";
import { configManager } from "../config/configManager";

export const useSmartConfig = () => {
  // Inicializa uma vez quando o hook é usado
  useEffect(() => {
    configManager.initialize();
  }, []);

  return configManager.getConfig();
};
