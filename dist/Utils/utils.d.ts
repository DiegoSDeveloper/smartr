/**
 * Util funtions
 */
import { IconPosition, Input, ScreenSize, ValueType } from "../types";
import { EditorPropType } from "../Editor/EditorPropType";
import { ValidationResult } from "../ValidationResult";
type ClassValue = string | number | boolean | undefined | null;
type ClassDictionary = Record<string, any>;
type ClassArray = ClassValue[];
export declare function getColumnSize(size: number, prefix?: ScreenSize): any;
export declare function getScreenSize(): ScreenSize;
export declare function bytesToHumanReadable(bytes: number): string;
export declare function mapToCssModules(className?: string): string;
export declare function parameterizedString(...args: any[]): any;
export declare function formatNumber(number: number, thousandsSeparator?: string, decimalSeparator?: string, decimalPlaces?: number): string;
export declare function getDefaultHasIcon(type: Input): boolean;
export declare function getDefaultIconPosition(type: Input): IconPosition;
export declare function getDefaultIcon(type: Input): string;
export declare function getValueType(type: Input): ValueType.Integer | ValueType.Float | ValueType.Boolean | ValueType.String;
export declare function getValueAsType(type: ValueType, value: any, separator?: string): any;
export declare function getEditorAttributes(props: EditorPropType, isInvalid: boolean, editorValue: any, showPassword: boolean): Record<string, any>;
export declare function removeMask(type: Input, editorMask: string, maskedValue: any, thousandsSeparator?: string, decimalSeparator?: string): any;
export declare function applyMask(type: Input, editorMask: string, input: any, thousandsSeparator?: string, decimalSeparator?: string, decimalPlaces?: number): string;
export declare function validateEditorInputValue(currentValue: any, props: EditorPropType, editorMask?: string): ValidationResult[];
export declare function classNames(...args: (ClassValue | ClassDictionary | ClassArray)[]): string;
export {};
