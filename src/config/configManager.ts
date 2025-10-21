// configManager.ts - Optimized for NPM package
import {
  defaultConfig,
  SmartRConfig,
  PartialSmartRConfig,
} from "./defaultConfig";

export class ConfigManager {
  private config: SmartRConfig = { ...defaultConfig };
  private hasUserConfig = false;

  /**
   * Set user configuration - merges with defaults
   */
  setConfig(userConfig: PartialSmartRConfig): void {
    this.config = this.deepMerge(this.config, userConfig as any);
    this.hasUserConfig = true;
  }

  /**
   * Get current configuration
   */
  getConfig(): SmartRConfig {
    // Try to load global config if no user config was set
    if (!this.hasUserConfig) {
      this.tryLoadGlobalConfig();
    }
    return this.config;
  }

  /**
   * Reset to default configuration
   */
  resetConfig(): void {
    this.config = { ...defaultConfig };
    this.hasUserConfig = false;
  }

  /**
   * Try to load configuration from global window object
   */
  private tryLoadGlobalConfig(): void {
    try {
      if (typeof window !== "undefined" && (window as any).SmartRConfig) {
        this.setConfig((window as any).SmartRConfig);
      }
    } catch (error) {
      console.warn("[SmartR] Failed to load global config, using defaults");
    }
  }

  /**
   * Deep merge objects and arrays - updated to handle DeepPartial
   */
  private deepMerge<T>(base: T, patch: any): T {
    if (!patch || typeof patch !== "object") return base;

    const result: any = Array.isArray(base)
      ? [...((patch as any) ?? base)]
      : { ...base };

    for (const [key, value] of Object.entries(patch)) {
      const baseValue = (base as any)[key];

      if (
        value &&
        typeof value === "object" &&
        !Array.isArray(value) &&
        baseValue &&
        typeof baseValue === "object" &&
        !Array.isArray(baseValue)
      ) {
        result[key] = this.deepMerge(baseValue, value);
      } else if (value !== undefined) {
        result[key] = value;
      }
    }

    return result;
  }
}

// Global instance
export const configManager = new ConfigManager();

// Export for compatibility
export const configSmartR = configManager.getConfig();
export type { SmartRConfig, PartialSmartRConfig };
