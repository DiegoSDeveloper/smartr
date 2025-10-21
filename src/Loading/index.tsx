// SmartR/Loading/Loading.tsx
import React from "react";
import { useSmartConfig } from "../hook/useSmartConfig";
import "./index.scss";

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
    <div className={`smart-loading smart-loading-${size} ${className}`}>
      <div className="smart-loading-spinner"></div>
      {loadingText && <div className="smart-loading-text">{loadingText}</div>}
    </div>
  );
};
