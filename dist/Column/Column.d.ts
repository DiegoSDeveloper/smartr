import { ColumnSize } from "../types";
import React from "react";
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
export declare const Column: React.ForwardRefExoticComponent<columnPropTypes & React.RefAttributes<HTMLElement>>;
export {};
