import React from "react";

import { TooltipPosition, LabelMode } from "../types";
import { Label } from "../Label/Label";
import { useSmartConfig } from "../hook/useSmartConfig";

interface checkboxGroupPropTypes {
  id?: string;
  checkBoxText?: string;
  required?: boolean;
  titleBold?: boolean;
  tooltip?: string;
  toolTipPosition?: TooltipPosition;
  children?: React.ReactNode;
}

export function CheckboxGroup(props: checkboxGroupPropTypes) {
  const {
    id,
    children,
    checkBoxText,
    tooltip,
    toolTipPosition,
    required,
    titleBold,
  } = props;

  const config = useSmartConfig();

  const checkBoxLabelAttributes: Record<string, string> = {};
  if (id) {
    checkBoxLabelAttributes["htmlFor"] = id;
  }
  const checkBoxLabel = (
    <Label
      id={id}
      htmlFor={id}
      title={checkBoxText}
      titleBold={titleBold}
      required={required}
      mode={LabelMode.CheckBox}
      tooltip={tooltip}
      toolTipPosition={toolTipPosition}
      className={config.components.checkbox.classes.label}
    ></Label>
  );

  return React.createElement(
    "div",
    {
      key: 0,
      className: config.components.checkbox.classes.group,
    },
    children,
    checkBoxLabel
  );
}
