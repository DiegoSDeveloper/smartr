/// <reference types="react" />
export type TableColumnProps = {
    header?: string;
    accessor?: string;
    type?: ColumnType;
    headerClassName?: string;
    contentClassName?: string;
    headerAlign?: AlignType;
    contentAlign?: AlignType;
    headerAlignCard?: AlignType;
    contentAlignCard?: AlignType;
    cardHeaderVisible?: boolean;
    format?: string;
    hideMinOrDefaultValue?: boolean;
    enableSort?: boolean;
    enableFilter?: boolean;
    disableFilters?: boolean;
    cardOnlyIfValue?: boolean | ((record: any) => boolean);
    prefix?: string;
    suffix?: string;
    mask?: string | ((value: any) => string);
    sourceList?: any[];
    sourceValueProperty?: string;
    sourceDescriptionProperty?: string;
    sourceBadgeProperty?: string;
    displayBadge?: boolean;
    showOn?: ScreenSize[];
    hiddenOn?: ScreenSize[];
    hideBelow?: ScreenSize;
    hideAbove?: ScreenSize;
    width?: string;
    renderCell?: (data?: any) => any;
    onDoubleClick?: (rowIndex: number, colIndex: number, value: any, rowData: any) => void;
};
export interface TableRef {
    getSelectedRows: () => any[];
    selectRow: (rowIndex: number) => void;
    deselectRow: (rowIndex: number) => void;
    selectAll: () => void;
    deselectAll: () => void;
    exportData: (format: "csv" | "excel" | "pdf") => void;
}
export interface TablePaginationProps {
    totalRecords?: number;
    currentPage?: number;
    pageSize?: number;
    totalPages?: number;
    showPagination?: boolean;
    paginationPosition?: "top" | "bottom" | "both";
    customPaginationRender?: (paginationInfo: {
        currentPage: number;
        totalPages: number;
        totalRecords: number;
        pageSize: number;
        onPageChange: (page: number) => void;
        loading?: boolean;
    }) => React.ReactNode;
    onPageChange?: (page: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
}
export interface TableDataManagementProps {
    enableDataManagement?: boolean;
    onFetchData?: (params: {
        page: number;
        pageSize: number;
        filters?: any;
        sort?: any;
        search?: string;
    }) => Promise<{
        data: any[];
        totalRecords: number;
        totalPages?: number;
    }>;
    loading?: boolean;
    loadingText?: string;
    autoLoad?: boolean;
    debounceTime?: number;
}
export interface TableProps extends TablePaginationProps, TableDataManagementProps {
    columns: TableColumnProps[];
    columnsDetail?: TableColumnProps[];
    data?: any[];
    dataDetailProperty?: string;
    showHeader?: boolean;
    showDetailHeader?: boolean;
    enableHoverEffect?: boolean;
    enableHoverEffectDetail?: boolean;
    singleRecordTable?: boolean;
    uniqueHeaderSingleRecordTable?: boolean;
    viewMode?: TableViewMode;
    cardViewModeBelow?: ScreenSize;
    selection?: SelectionType;
    enableSelectAll?: boolean;
    className?: any;
    classNameDetail?: any;
    rowClassName?: string | ((record: any) => string);
    rowDetailClassName?: string | ((detail: any, parent: any) => string);
    timeZone?: string;
    culture?: string;
    noRecordMessage?: string;
    sortAscendingIcon?: string;
    sortDescendingIcon?: string;
    sortDefaultIcon?: string;
    rowFooterRender?: (record: any, rowIndex: number) => React.ReactNode;
    rowDetailFooterRender?: (detailRecord: any, parentRecord: any, rowIndex: number, parentRowIndex: number) => React.ReactNode;
    onCheckedChange?: (rowData: any, index: number, checked: boolean) => void;
    onCheckedAllChange?: (checked: boolean) => void;
    onDoubleClick?: (rowData: any, index: number) => void;
    onDoubleClickDetail?: (rowData: any, rowDataParent: any, rowIndex: number, parentRowIndex: number) => void;
    onDataLoaded?: (data: any[], totalRecords: number) => void;
    onLoadingStateChange?: (loading: boolean) => void;
    onError?: (error: any) => void;
}
export declare enum SelectionType {
    NONE = 1,
    SINGLE = 1,
    MULTIPLE = 2,
    CHECKBOX = 3
}
export declare enum ColumnType {
    STRING = 1,
    FLOAT = 2,
    DATE = 3,
    DATETIME = 4,
    INT = 5,
    BOOLEAN = 6,
    TEMPLATE = 7
}
export declare enum AlignType {
    START = 1,
    CENTER = 2,
    END = 3
}
export declare enum TableViewMode {
    TABLE = 1,
    CARD = 2
}
export type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
