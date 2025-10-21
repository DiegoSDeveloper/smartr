import React from "react";
import { classNames } from "../Utils/utils";
import { mapToCssModules } from "../Utils/utils";

/**
 * Row definition
 */
interface rowPropTypes {
  tag?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Row = React.forwardRef<HTMLElement, rowPropTypes>((props, ref) => {
  const {
    className,
    style,
    tag: Tag = "div",
    children,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(className, "row"));

  return React.createElement(
    Tag,
    {
      ...attributes,
      className: classes,
      style,
      ref,
    },
    children
  );
});
