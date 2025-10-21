import React from "react";
import { TooltipPosition } from "../types";
export interface editorButtonPropTypes {
    tag?: string;
    className?: string;
    text?: string;
    tooltip?: string;
    toolTipPosition?: TooltipPosition;
    icon?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare function EditorButton(props: editorButtonPropTypes): import("react/jsx-runtime").JSX.Element;
