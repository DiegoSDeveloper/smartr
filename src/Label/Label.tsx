import React from "react";
import { classNames } from "../Utils/utils";
import { getColumnSize, mapToCssModules } from "../Utils/utils";

import { ColumnSize, LabelMode, ScreenSize, TooltipPosition } from "../types";
import { Tooltip } from "../Tooltip/Tooltip";
import { useSmartConfig } from "../hook/useSmartConfig";
/**
 * Label definition
 */
interface labelPropTypes {
  id?: string;
  htmlFor?: string;
  className?: string;
  title?: string;
  required?: boolean;
  titleBold?: boolean;
  tooltip?: string;
  toolTipPosition?: TooltipPosition;
  mode?: LabelMode;
  horizontal?: boolean;
  xs?: ColumnSize;
  sm?: ColumnSize;
  md?: ColumnSize;
  lg?: ColumnSize;
  xl?: ColumnSize;
  xxl?: ColumnSize;
  size?: ColumnSize;
}

export function Label(props: labelPropTypes) {
  const {
    className,
    id,
    htmlFor,
    required = false,
    titleBold = false,
    title,
    tooltip,
    toolTipPosition = TooltipPosition.Top,
    horizontal = false,
    mode = LabelMode.Normal,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    size,
  } = props;
  const config = useSmartConfig();
  let colClasses = "";
  if (size) {
    colClasses += getColumnSize(size);
  }
  if (xs) {
    colClasses += ` ${getColumnSize(xs, ScreenSize.XS)}`;
  }
  if (sm) {
    colClasses += ` ${getColumnSize(sm, ScreenSize.SM)}`;
  }
  if (md) {
    colClasses += ` ${getColumnSize(md, ScreenSize.MD)}`;
  }
  if (lg) {
    colClasses += ` ${getColumnSize(lg, ScreenSize.LG)}`;
  }
  if (xl) {
    colClasses += ` ${getColumnSize(xl, ScreenSize.XL)}`;
  }
  if (xxl) {
    colClasses += ` ${getColumnSize(xxl, ScreenSize.XXL)}`;
  }

  const labelAttributes: Record<string, string> = {};
  if (id) {
    let labelId = "lbl" + id;
    labelAttributes["id"] = labelId;
  }

  if (htmlFor) {
    labelAttributes["htmlFor"] = htmlFor;
  }

  labelAttributes["data-smarteditor"] = "label";

  let labelClasses;

  if (!horizontal) {
    switch (mode) {
      case LabelMode.CheckBox:
        labelClasses = config.classes.checkboxLabel;
        break;
      case LabelMode.RadioButton:
        labelClasses = config.classes.radioLabel;
        break;
      case LabelMode.Normal:
      default:
        labelClasses = config.classes.label;
        break;
    }
  } else {
    // Mantém a horizontalLabel para layout horizontal
    labelClasses = config.classes.horizontalLabel;
  }

  if (required) {
    labelClasses += ` ${config.classes.required}`;
  }
  if (titleBold) {
    labelClasses += ` ${config.classes.titleBold}`;
  }

  labelClasses = mapToCssModules(classNames(colClasses, labelClasses));

  let labelChildren = null;
  if (!tooltip) {
    labelChildren = String(title);
  } else {
    labelChildren = (
      <>
        {title}{" "}
        <Tooltip position={toolTipPosition} text={tooltip}>
          <i className={config.icons.tooltip}></i>
        </Tooltip>
      </>
    );
  }

  return React.createElement(
    "label",
    {
      ...labelAttributes,
      className: labelClasses,
    },
    labelChildren
  );
}
