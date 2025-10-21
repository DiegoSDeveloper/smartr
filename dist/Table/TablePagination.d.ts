import "./TablePagination.scss";
export interface TablePaginationProps {
    currentPage: number;
    totalPages: number;
    totalRecords: number;
    pageSize: number;
    onPageChange: (page: number) => void;
    loading?: boolean;
    customTexts?: {
        showing?: string;
        to?: string;
        of?: string;
        records?: string;
        firstPage?: string;
        previousPage?: string;
        nextPage?: string;
        lastPage?: string;
        page?: string;
    };
    customClasses?: {
        container?: string;
        info?: string;
        controls?: string;
        pagination?: string;
        pageItem?: string;
        pageLink?: string;
        pageInfo?: string;
        activePage?: string;
        disabledPage?: string;
    };
    customIcons?: {
        firstPage?: string;
        previousPage?: string;
        nextPage?: string;
        lastPage?: string;
    };
}
export declare function TablePagination({ currentPage, totalPages, totalRecords, pageSize, onPageChange, loading, customTexts, customClasses, customIcons, }: TablePaginationProps): import("react/jsx-runtime").JSX.Element;
