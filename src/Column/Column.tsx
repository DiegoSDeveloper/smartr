import { ColumnSize, ScreenSize } from "../types";
import React from "react";
import { getColumnSize, mapToCssModules } from "../Utils/utils";
import { classNames } from "../Utils/utils";
import { useSmartConfig } from "../hook/useSmartConfig";

/**
 * Column definition
 */
interface columnPropTypes {
  tag?: string;
  className?: string;
  xs?: ColumnSize;
  sm?: ColumnSize;
  md?: ColumnSize;
  lg?: ColumnSize;
  xl?: ColumnSize;
  xxl?: ColumnSize;
  size?: ColumnSize;
  children?: React.ReactNode;
}

export const Column = React.forwardRef<HTMLElement, columnPropTypes>(
  (props, ref) => {
    const config = useSmartConfig();
    const {
      className,
      xs,
      sm,
      md,
      lg,
      xl,
      xxl,
      size,
      tag = config.columnTag,
      children,
      ...attributes
    } = props;

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

    const classes = mapToCssModules(classNames(className, colClasses));

    return React.createElement(
      tag,
      {
        ...attributes,
        className: classes,
        ref,
      },
      children
    );
  }
);
