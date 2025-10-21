import React from "react";
import { ValidationResult } from "../ValidationResult";
import { EditorPropType } from "./EditorPropType";
export interface EditorRef {
    validate: () => Promise<ValidationResult[]>;
    getId: () => string;
    getName: () => string;
    getTitle: () => string;
    getValue: () => any;
    getSubmit: () => boolean;
    setErrorList: (list: ValidationResult[]) => void;
    forwardRef?: (ref: EditorRef | null) => void;
}
export declare const Editor: React.ForwardRefExoticComponent<EditorPropType & React.RefAttributes<EditorRef>>;
