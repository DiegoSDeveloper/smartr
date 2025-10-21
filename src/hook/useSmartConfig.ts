// useSmartConfig.ts
import { configManager } from "../config/configManager";

export const useSmartConfig = () => {
  // Remove useEffect since configManager no longer has initialize()
  // Config is loaded automatically on first access
  return configManager.getConfig();
};
