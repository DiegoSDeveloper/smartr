// SmartR/Loading/Loading.tsx
import React from "react";
import { useSmartConfig } from "../hook/useSmartConfig";
import styles from "./Loading.module.scss";

interface LoadingProps {
  text?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  text,
  size = "md",
  className = "",
}) => {
  const config = useSmartConfig();
  const loadingText = text || config.messages.table.loadingText;

  return (
    <div
      className={`
        ${styles.smartLoading} 
        ${
          styles[`smartLoading${size.charAt(0).toUpperCase() + size.slice(1)}`]
        } 
        ${className}
      `}
    >
      <div className={styles.smartLoadingSpinner}></div>
      {loadingText && (
        <div className={styles.smartLoadingText}>{loadingText}</div>
      )}
    </div>
  );
};
