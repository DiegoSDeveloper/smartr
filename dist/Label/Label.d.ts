import React from "react";
import { ColumnSize, LabelMode, TooltipPosition } from "../types";
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
export declare function Label(props: labelPropTypes): React.DetailedReactHTMLElement<{
    className: any;
}, HTMLElement>;
export {};
