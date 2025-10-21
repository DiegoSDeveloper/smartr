import { useCallback, useRef, useState } from "react";

import { TooltipPosition } from "../types";
import { classNames } from "../Utils/utils";
import { mapToCssModules } from "../Utils/utils";
import React from "react";
import { useSmartConfig } from "../hook/useSmartConfig";

interface TooltipPropTypes {
  className?: string;
  text?: string;
  position?: TooltipPosition;
  children?: React.ReactNode;
}

export function Tooltip(props: TooltipPropTypes) {
  const { className, children, text, position = TooltipPosition.Top } = props;
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipElementRef = useRef(null);
  const config = useSmartConfig();
  const handleTooltipMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleTooltipMouseLeave = () => {
    setShowTooltip(false);
  };

  const tooltipRef = useCallback(
    (node) => {
      if (node !== null) {
        const overlayRect = tooltipElementRef.current.getBoundingClientRect();
        const tooltipWidth =
          node.getBoundingClientRect().width < config.toolTipWidth
            ? node.getBoundingClientRect().width
            : config.toolTipWidth;
        const tooltipRect = node.getBoundingClientRect();
        let top, left;

        switch (position) {
          case TooltipPosition.Top:
            top = overlayRect.top - tooltipRect.height - 10;
            left =
              overlayRect.left + overlayRect.width / 2 - tooltipRect.width / 2;
            break;
          case TooltipPosition.Bottom:
            top = overlayRect.top + overlayRect.height + 10;
            left =
              overlayRect.left + overlayRect.width / 2 - tooltipRect.width / 2;
            break;
          case TooltipPosition.Left:
            top =
              overlayRect.top + overlayRect.height / 2 - tooltipRect.height / 2;
            left = overlayRect.left - tooltipRect.width - 10;
            break;
          case TooltipPosition.Right:
            top =
              overlayRect.top + overlayRect.height / 2 - tooltipRect.height / 2;
            left = overlayRect.left + overlayRect.width + 10;
            break;
          default:
            break;
        }

        node.style.top = `${top}px`;
        node.style.left = `${left}px`;
        node.style.visibility = "visible";
      }
    },
    [position]
  );
  let tooltipClass =
    position === TooltipPosition.Top
      ? config.classes.tooltipTop
      : position === TooltipPosition.Bottom
      ? config.classes.tooltipBottom
      : position === TooltipPosition.Left
      ? config.classes.tooltipLeft
      : config.classes.tooltipRight;
  tooltipClass = mapToCssModules(classNames(className, tooltipClass));
  const toolTipDiv = showTooltip ? (
    <div
      ref={tooltipRef}
      style={{ visibility: "hidden" }}
      className={tooltipClass}
    >
      {text}
    </div>
  ) : null;
  const childrenWithEvents = React.isValidElement(children)
    ? React.cloneElement(children as React.ReactElement<any>, {
        onMouseEnter: handleTooltipMouseEnter,
        onMouseLeave: handleTooltipMouseLeave,
        ref: tooltipElementRef,
      })
    : children;

  return (
    <>
      {childrenWithEvents}
      {toolTipDiv}
    </>
  );
}
