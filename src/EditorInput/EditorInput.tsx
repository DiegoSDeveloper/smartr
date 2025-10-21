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
  inputRef?: React.MutableRefObject<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function EditorInput(props: EditorInputPropTypes) {
  const {
    inputType,
    type,
    editorAttributes,
    onBlurEvent,
    onChangeEvent,
    onPasteEvent,
    onKeyDownEvent,
    inputRef,
    className,
    checked,
    style,
    children,
    ...attributes
  } = props;

  const inputProps: Record<string, any> = {
    ...attributes,
    ...editorAttributes,
    className: type !== Input.Hidden ? className : null,
    onChange: type !== Input.Hidden ? onChangeEvent : null,
    onBlur: type !== Input.Hidden ? onBlurEvent : null,
    onPaste: type !== Input.Hidden ? onPasteEvent : null,
    onKeyDown: type !== Input.Hidden ? onKeyDownEvent : null,
    ref: inputRef,
    style: style,
  };

  if (editorAttributes?.type === "checkbox") {
    inputProps.checked = !!checked;
    delete inputProps.defaultChecked;
    delete inputProps.value;
  }

  return React.createElement(inputType, inputProps, children);
}
