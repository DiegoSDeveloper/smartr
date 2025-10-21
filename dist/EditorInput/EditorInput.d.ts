import React from "react";
import { Input } from "../types";
interface EditorInputPropTypes {
    type: Input;
    inputType: string;
    editorAttributes: Record<string, any>;
    checked?: boolean;
    onBlurEvent?: (event: React.FocusEvent<HTMLInputElement>) => Promise<void>;
    onChangeEvent?: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    onPasteEvent?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
    onKeyDownEvent?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    inputRef?: React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export declare function EditorInput(props: EditorInputPropTypes): React.DOMElement<Record<string, any>, Element>;
export {};
