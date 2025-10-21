/// <reference types="react" />
interface SelectPropTypes {
    options: any[];
    optionsId: string;
    optionsDescription: string;
    optionsGrouped?: boolean;
    optionsGroup?: string;
    optionGetDescription?: (option: any) => string;
    optionGetGroup?: (option: any) => string;
    optionsFirstSelected: boolean;
    optionsNoneSelectedValue: any;
    optionsNoneSelectedText: string;
    optionsFilter: boolean;
    optionsMultiple: boolean;
    optionsLimiteDescriptionSelected: number;
    optionsMultipleSeparatorValue: string;
    optionsMultipleSeparatorDescription: string;
    placeholder?: string;
    searchPlaceholder?: string;
    value: any;
    enabled?: boolean;
    readOnly?: boolean;
    children?: any;
    editorAttributes: Record<string, any>;
    optionRenderer?: (option: any, isSelected: boolean, searchText: string) => React.ReactNode;
    onBlurEvent: (event: React.FocusEvent<HTMLInputElement>) => Promise<void>;
    onChangeEvent: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    inputRef: React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    className?: string;
}
declare const Select: (props: SelectPropTypes) => import("react/jsx-runtime").JSX.Element;
export default Select;
