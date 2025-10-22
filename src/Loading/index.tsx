// SmartR/Loading/Loading.tsx
import React from "react";
import { useSmartConfig } from "../hook/useSmartConfig";
// ❌ REMOVE import de CSS

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
  const loadingText = text || config.components.table.texts.loadingText;
  const classes = config.components.loading.classes;

  const sizeClass =
    classes[`container${size.charAt(0).toUpperCase() + size.slice(1)}`];

  return (
    <div className={`${classes.container} ${sizeClass} ${className}`}>
      <div className={classes.spinner}></div>
      {loadingText && <div className={classes.text}>{loadingText}</div>}
    </div>
  );
};
