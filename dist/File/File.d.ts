import React from "react";
interface FilePropTypes {
    id?: string;
    name?: string;
    placeholder?: string;
    maxFilesPlaceholder?: number;
    fileUrlDownload?: string;
    fileDownloadName?: string;
    editorAttributes: Record<string, any>;
    onDownloadFileClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onDeleteFileClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onBlurEvent?: (event: React.FocusEvent<HTMLInputElement>) => Promise<void>;
    onChangeEvent?: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    inputRef: React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    className?: string;
}
export declare function File(props: FilePropTypes): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
export {};
