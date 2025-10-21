/// <reference types="react" />
export declare enum AlertType {
    Success = 1,
    Warning = 2,
    Danger = 3,
    Info = 4
}
interface alertPropTypes {
    type: AlertType;
    className?: string;
    children?: React.ReactNode;
}
export declare function Alert(props: alertPropTypes): import("react/jsx-runtime").JSX.Element;
export {};
