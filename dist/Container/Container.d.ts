import React, { ReactNode } from "react";
import { EditorRef } from "../Editor/Editor";
import { ValidationResult } from "../ValidationResult";
export interface ContainerProps {
    children?: ReactNode;
}
export interface ContainerRef {
    validate: () => Promise<ValidationResult[]>;
    getEditors: () => EditorRef[];
}
export declare const Container: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<ContainerRef>>;
