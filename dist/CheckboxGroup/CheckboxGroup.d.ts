import React from "react";
import { TooltipPosition } from "../types";
interface checkboxGroupPropTypes {
    id?: string;
    checkBoxText?: string;
    required?: boolean;
    titleBold?: boolean;
    tooltip?: string;
    toolTipPosition?: TooltipPosition;
    children?: React.ReactNode;
}
export declare function CheckboxGroup(props: checkboxGroupPropTypes): React.DetailedReactHTMLElement<{
    key: number;
    className: string;
}, HTMLElement>;
export {};
