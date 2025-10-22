import React from "react";
import { mapToCssModules } from "../Utils/utils";
import { classNames } from "../Utils/utils";
import { TooltipPosition } from "../types";
import { Tooltip } from "../Tooltip/Tooltip";
import { useSmartConfig } from "../hook/useSmartConfig";

export interface editorButtonPropTypes {
  tag?: string;
  className?: string;
  text?: string;
  tooltip?: string;
  toolTipPosition?: TooltipPosition;
  icon?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function EditorButton(props: editorButtonPropTypes) {
  const config = useSmartConfig();
  const {
    className,
    tag = config.tags.editorButtonTag,
    icon,
    text,
    tooltip,
    toolTipPosition = TooltipPosition.Top,
    onClick,
    ...attributes
  } = props;
  const classes = mapToCssModules(
    classNames(config.components.editor.classes.inputGroupButton, className)
  );

  const innerContent = (
    <>
      {icon && <i className={icon}></i>}
      {text}
    </>
  );
  let content = React.createElement(
    tag,
    {
      ...attributes,
      className: classes,
      onClick: onClick,
      ref: {},
    },
    innerContent
  );
  if (tooltip) {
    content = (
      <Tooltip position={toolTipPosition} text={tooltip}>
        {content}
      </Tooltip>
    );
  }
  return (
    <>
      <div className={config.components.editor.classes.inputGroupAppendButton}>
        {content}
      </div>
    </>
  );
}
