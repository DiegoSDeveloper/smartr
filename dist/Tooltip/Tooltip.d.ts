import { TooltipPosition } from "../types";
import React from "react";
interface TooltipPropTypes {
    className?: string;
    text?: string;
    position?: TooltipPosition;
    children?: React.ReactNode;
}
export declare function Tooltip(props: TooltipPropTypes): import("react/jsx-runtime").JSX.Element;
export {};
