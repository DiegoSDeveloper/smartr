import React from "react";
interface RadioPropTypes {
    id?: string;
    options: any[];
    optionsId: string;
    optionsDescription: string;
    optionsTooltip?: string;
    optionsFirstSelected: boolean;
    optionsNoneSelectedValue: any;
    optionsNoneSelectedText: string;
    value: any;
    inline: boolean;
    inputRadioRefs: React.MutableRefObject<any[]>;
    editorAttributes: Record<string, any>;
    onBlurEvent: (event: React.FocusEvent<HTMLInputElement>) => Promise<void>;
    onChangeEvent: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    inputRef: React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    className?: string;
}
export declare function Radio(props: RadioPropTypes): React.DetailedReactHTMLElement<{
    className: string;
    ref: React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
}, HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
export {};
