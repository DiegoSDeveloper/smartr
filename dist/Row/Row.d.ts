import React from "react";
/**
 * Row definition
 */
interface rowPropTypes {
    tag?: string;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}
export declare const Row: React.ForwardRefExoticComponent<rowPropTypes & React.RefAttributes<HTMLElement>>;
export {};
