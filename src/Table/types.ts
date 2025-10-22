import { ScreenSize } from "../types";

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
  onDoubleClick?: (
    rowIndex: number,
    colIndex: number,
    value: any,
    rowData: any
  ) => void;
};

export interface TableRef {
  getSelectedRows: () => any[];
  selectRow: (rowIndex: number) => void;
  deselectRow: (rowIndex: number) => void;
  selectAll: () => void;
  deselectAll: () => void;
  exportData: (format: "csv" | "excel" | "pdf") => void;
}

// ============================================================================
// INTERFACE FOR TablePagination COMPONENT (used in TablePagination.tsx)
// ============================================================================
export interface TablePaginationComponentProps {
  // Basic pagination control
  currentPage: number;
  totalPages: number;
  totalRecords: number;
  pageSize: number;
  onPageChange: (page: number) => void;

  // States
  loading?: boolean;

  // Text customizations
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

  // CSS classes customizations
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

  // Icon customizations
  customIcons?: {
    firstPage?: string;
    previousPage?: string;
    nextPage?: string;
    lastPage?: string;
  };
}

// ============================================================================
// INTERFACE FOR TABLE PAGINATION CONFIG (used in TableProps)
// ============================================================================
export interface TablePaginationConfigProps {
  // Pagination display control
  showPagination?: boolean;
  paginationPosition?: "top" | "bottom" | "both";

  // Pagination configuration
  totalRecords?: number;
  currentPage?: number;
  pageSize?: number;
  totalPages?: number;

  // Custom rendering
  customPaginationRender?: (paginationInfo: {
    currentPage: number;
    totalPages: number;
    totalRecords: number;
    pageSize: number;
    onPageChange: (page: number) => void;
    loading?: boolean;
  }) => React.ReactNode;

  // Callbacks
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
}

export interface TableDataManagementProps {
  // Automatic data management
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

  // Loading states
  loading?: boolean;
  loadingText?: string;

  // Auto-load settings
  autoLoad?: boolean;
  debounceTime?: number;
}

export interface TableProps extends TableDataManagementProps {
  // Columns and structure
  columns: TableColumnProps[];
  columnsDetail?: TableColumnProps[];

  // Data
  data?: any[];
  dataDetailProperty?: string;

  // Pagination configuration
  pagination?: TablePaginationConfigProps;

  // Display and behavior
  showHeader?: boolean;
  showDetailHeader?: boolean;
  enableHoverEffect?: boolean;
  enableHoverEffectDetail?: boolean;
  singleRecordTable?: boolean;
  uniqueHeaderSingleRecordTable?: boolean;
  viewMode?: TableViewMode;
  cardViewModeBelow?: ScreenSize;

  // Selection
  selection?: SelectionType;
  enableSelectAll?: boolean;

  // Styling
  className?: any;
  classNameDetail?: any;
  rowClassName?: string | ((record: any) => string);
  rowDetailClassName?: string | ((detail: any, parent: any) => string);

  // Localization and formatting
  timeZone?: string;
  culture?: string;

  // Messages
  noRecordMessage?: string;

  // Sorting icons
  sortAscendingIcon?: string;
  sortDescendingIcon?: string;
  sortDefaultIcon?: string;

  // Custom rendering
  rowFooterRender?: (record: any, rowIndex: number) => React.ReactNode;
  rowDetailFooterRender?: (
    detailRecord: any,
    parentRecord: any,
    rowIndex: number,
    parentRowIndex: number
  ) => React.ReactNode;

  // Events
  onCheckedChange?: (rowData: any, index: number, checked: boolean) => void;
  onCheckedAllChange?: (checked: boolean) => void;
  onDoubleClick?: (rowData: any, index: number) => void;
  onDoubleClickDetail?: (
    rowData: any,
    rowDataParent: any,
    rowIndex: number,
    parentRowIndex: number
  ) => void;

  // New events for data management
  onDataLoaded?: (data: any[], totalRecords: number) => void;
  onLoadingStateChange?: (loading: boolean) => void;
  onError?: (error: any) => void;
}

export enum SelectionType {
  NONE = 1,
  SINGLE = 1,
  MULTIPLE = 2,
  CHECKBOX = 3,
}

export enum ColumnType {
  STRING = 1,
  FLOAT = 2,
  DATE = 3,
  DATETIME = 4,
  INT = 5,
  BOOLEAN = 6,
  TEMPLATE = 7,
}

export enum AlignType {
  START = 1,
  CENTER = 2,
  END = 3,
}

export enum TableViewMode {
  TABLE = 1,
  CARD = 2,
}
