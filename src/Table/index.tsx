import {
  forwardRef,
  Fragment,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";

import {
  AlignType,
  ColumnType,
  SelectionType,
  TableColumnProps,
  TableProps,
  TableRef,
  TableViewMode,
} from "./types";
import { flushSync } from "react-dom";
import { Util } from "./util";
import { classNames } from "../Utils/utils";
import { useSmartConfig } from "../hook/useSmartConfig";
import { TablePagination } from "./TablePagination";
import { Loading } from "../Loading";
import { ScreenSize } from "../types";

// Determine the default view mode based on screen size
const getDefaultViewMode = (defaultCardBelow: ScreenSize): TableViewMode => {
  const screenSize = Util.getScreenSize();
  const order: ScreenSize[] = [
    ScreenSize.XS,
    ScreenSize.SM,
    ScreenSize.MD,
    ScreenSize.LG,
    ScreenSize.XL,
    ScreenSize.XXL,
  ];

  return order.indexOf(screenSize) < order.indexOf(defaultCardBelow)
    ? TableViewMode.CARD
    : TableViewMode.TABLE;
};

export const Table = forwardRef<TableRef, TableProps>(
  (
    {
      columns,
      columnsDetail,
      dataDetailProperty,
      showHeader = true,
      showDetailHeader = true,
      enableHoverEffect = true,
      enableHoverEffectDetail = true,
      singleRecordTable = false,
      uniqueHeaderSingleRecordTable = false,
      onDoubleClick,
      onDoubleClickDetail,
      onCheckedChange,
      onCheckedAllChange,
      rowFooterRender,
      rowDetailFooterRender,
      timeZone,
      culture,
      selection = SelectionType.NONE,
      enableSelectAll = false,
      cardViewModeBelow = ScreenSize.MD,
      noRecordMessage,
      sortAscendingIcon,
      sortDescendingIcon,
      sortDefaultIcon,
      viewMode = getDefaultViewMode(cardViewModeBelow),
      rowClassName,
      rowDetailClassName,
      data = [],
      className,
      classNameDetail,
      pagination = {},

      // New data management props
      enableDataManagement = false,
      onFetchData,
      loading: externalLoading = false,
      loadingText,
      autoLoad = true,
      onDataLoaded,
      onLoadingStateChange,
      onError,
    },
    ref
  ) => {
    const {
      totalRecords,
      currentPage = 1,
      pageSize = 10,
      totalPages,
      showPagination = false,
      paginationPosition = "bottom",
      customPaginationRender,
      onPageChange,
    } = pagination;

    const config = useSmartConfig();

    const [sortedColumn, setSortedColumn] = useState<TableColumnProps>(null);
    const [isSortedDesc, setIsSortedDesc] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);

    // Internal state for data management
    const [internalData, setInternalData] = useState<any[]>([]);
    const [internalLoading, setInternalLoading] = useState(false);
    const [internalCurrentPage, setInternalCurrentPage] = useState(1);
    const [internalTotalRecords, setInternalTotalRecords] = useState(0);
    const [internalTotalPages, setInternalTotalPages] = useState(0);

    const screenSize = Util.getScreenSize();
    const order: ScreenSize[] = [
      ScreenSize.XS,
      ScreenSize.SM,
      ScreenSize.MD,
      ScreenSize.LG,
      ScreenSize.XL,
      ScreenSize.XXL,
    ];
    const screenIdx = order.indexOf(screenSize);

    const finalTimeZone = timeZone ?? config.components.table.behavior.timeZone;
    const finalCulture = culture ?? config.components.table.behavior.culture;
    const finalNoRecordMessage =
      noRecordMessage ?? config.components.table.texts.noRecordMessage;
    const finalLoadingText =
      loadingText ?? config.components.table.texts.loadingText;
    const finalSortAscendingIcon =
      sortAscendingIcon ??
      config.components.table.icons.sortAscending ??
      "fas fa-sort-up";
    const finalSortDescendingIcon =
      sortDescendingIcon ??
      config.components.table.icons.sortDescending ??
      "fas fa-sort-down";
    const finalSortDefaultIcon =
      sortDefaultIcon ??
      config.components.table.icons.sortDefault ??
      "fas fa-sort";

    // Determine data source and states
    const isManaged = enableDataManagement && onFetchData;
    const displayData = isManaged ? internalData : data;
    const loading = isManaged ? internalLoading : externalLoading;
    const displayCurrentPage = isManaged ? internalCurrentPage : currentPage;
    const displayTotalRecords = isManaged ? internalTotalRecords : totalRecords;
    const displayTotalPages = isManaged
      ? internalTotalPages
      : totalPages || Math.ceil((totalRecords || 0) / pageSize);

    // Fetch data when enableDataManagement is true
    useEffect(() => {
      if (isManaged && autoLoad) {
        fetchData(internalCurrentPage);
      }
    }, [isManaged, autoLoad, internalCurrentPage]);
    // No Table/index.tsx, ADICIONE estes debug:

    // 1. Debug no fetchData
    const fetchData = async (page: number) => {
      if (!onFetchData) return;

      const loadingState = true;
      setInternalLoading(loadingState);
      onLoadingStateChange?.(loadingState);

      try {
        const result = await onFetchData({
          page,
          pageSize,
        });

        setInternalData(result.data || []);
        setInternalTotalRecords(result.totalRecords || 0);
        setInternalTotalPages(
          result.totalPages || Math.ceil((result.totalRecords || 0) / pageSize)
        );

        onDataLoaded?.(result.data, result.totalRecords);
      } catch (error) {
        console.error("Error fetching table data:", error);
        setInternalData([]);
        setInternalTotalRecords(0);
        setInternalTotalPages(0);
        onError?.(error);
      } finally {
        const loadingState = false;
        setInternalLoading(loadingState);
        onLoadingStateChange?.(loadingState);
      }
    };

    useEffect(() => {
      if (isManaged && autoLoad) {
        fetchData(internalCurrentPage);
      }
    }, [isManaged, autoLoad, internalCurrentPage]);

    const handlePageChange = (page: number) => {
      if (isManaged) {
        setInternalCurrentPage(page);
      } else {
        onPageChange?.(page);
      }
    };

    // Filter visible columns based on responsive rules
    const visibleColumns = columns.filter((c) => {
      // 1) showOn has highest priority
      if (c.showOn?.length) return c.showOn.includes(screenSize);

      // 2) explicitly hide on current breakpoint
      if (c.hiddenOn?.includes(screenSize)) return false;

      // 3) relative rules
      if (c.hideBelow && screenIdx < order.indexOf(c.hideBelow)) return false;
      if (c.hideAbove && screenIdx > order.indexOf(c.hideAbove)) return false;

      return true; // visible by default
    });

    useImperativeHandle(ref, () => ({
      getSelectedRows: () => {
        return selectedRows.map((index) => displayData[index]);
      },
      selectRow: (rowIndex: number) => {
        if (!selectedRows.includes(rowIndex)) {
          setSelectedRows((prevSelected) => [...prevSelected, rowIndex]);
        }
      },
      deselectRow: (rowIndex: number) => {
        setSelectedRows((prevSelected) =>
          prevSelected.filter((index) => index !== rowIndex)
        );
      },
      selectAll: () => {
        const allRows = displayData.map((_, index) => index);
        setSelectedRows(allRows);
        if (onCheckedAllChange) {
          onCheckedAllChange(true);
        }
      },
      deselectAll: () => {
        setSelectedRows([]);
        if (onCheckedAllChange) {
          onCheckedAllChange(false);
        }
      },
      exportData: (format: "csv" | "excel" | "pdf") => {
        // Get rows to be exported
        const rows =
          selection !== SelectionType.CHECKBOX &&
          selection !== SelectionType.MULTIPLE
            ? displayData
            : selectedRows.map((index) => displayData[index]);

        if (rows.length === 0) {
          console.warn("No rows selected for export.");
          return;
        }

        // Create headers based on columns
        const headers = columns.map((col) => col.header || col.accessor || "");

        // Process cell values for export
        const processedRows = rows.map((record) =>
          columns.map((column) => renderCellValueForExport(record, column))
        );

        if (format === "csv") {
          // Generate CSV content
          const csvContent = [
            headers.join(","), // Headers
            ...processedRows.map((row) =>
              row
                .map((value) => `"${value}"`) // Escape values
                .join(",")
            ),
          ].join("\n");

          // Create and download CSV file
          const blob = new Blob([csvContent], {
            type: "text/csv;charset=utf-8;",
          });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "export.csv";
          a.click();
          URL.revokeObjectURL(url);
        }

        // Future implementations for Excel and PDF can be added here
      },
    }));

    const handleSelectAll = (event) => {
      if (event.target.checked) {
        const allRows = displayData.map((_, index) => index);
        flushSync(() => {
          setSelectedRows(allRows);
        });
        if (onCheckedAllChange) {
          onCheckedAllChange(true);
        }
      } else {
        flushSync(() => {
          setSelectedRows([]);
        });
        if (onCheckedAllChange) {
          onCheckedAllChange(false);
        }
      }
    };

    const handleSelect = (event, rowIndex) => {
      if (event.target.checked) {
        flushSync(() => {
          setSelectedRows((prevSelected) => [...prevSelected, rowIndex]);
        });
        if (onCheckedChange) {
          onCheckedChange(displayData[rowIndex], rowIndex, true); // Trigger event when selecting
        }
      } else {
        flushSync(() => {
          setSelectedRows((prevSelected) =>
            prevSelected.filter((index) => index !== rowIndex)
          );
        });
        if (onCheckedChange) {
          onCheckedChange(displayData[rowIndex], rowIndex, false); // Trigger event when unchecking
        }
      }
    };

    const generateSortingIndicator = (column: TableColumnProps) => {
      // ✅ Só mostra indicador se a coluna for ordenável
      if (column.enableSort !== true) {
        return finalSortDefaultIcon ? (
          <i
            className={finalSortDefaultIcon}
            style={{ opacity: 0, visibility: "hidden", marginLeft: "5px" }}
          />
        ) : null;
      }

      if (sortedColumn && sortedColumn.accessor === column.accessor) {
        return (
          <i
            className={
              isSortedDesc ? finalSortDescendingIcon : finalSortAscendingIcon
            }
            style={{ marginLeft: "5px" }}
          />
        );
      }

      return finalSortDefaultIcon ? (
        <i
          className={finalSortDefaultIcon}
          style={{ opacity: 0.3, marginLeft: "5px" }}
        />
      ) : null;
    };

    const handleSort = (column: TableColumnProps) => {
      if (column.enableSort !== true) return;

      if (sortedColumn && sortedColumn.accessor === column.accessor) {
        setIsSortedDesc(!isSortedDesc);
      } else {
        setSortedColumn(column);
        setIsSortedDesc(false);
      }
    };

    const sortedData = [...displayData].sort((a, b) => {
      if (!sortedColumn) return 0;

      const valueA = a.hasOwnProperty(sortedColumn.accessor)
        ? a[sortedColumn.accessor]
        : Util.getDefaultValue(sortedColumn.type);
      const valueB = b.hasOwnProperty(sortedColumn.accessor)
        ? b[sortedColumn.accessor]
        : Util.getDefaultValue(sortedColumn.type);

      if (sortedColumn.type === ColumnType.DATE) {
        const dateA = new Date(valueA);
        const dateB = new Date(valueB);
        if (dateA < dateB) return isSortedDesc ? 1 : -1;
        if (dateA > dateB) return isSortedDesc ? -1 : 1;
        return 0;
      }

      if (typeof valueA === "number" && typeof valueB === "number") {
        if (valueA < valueB) return isSortedDesc ? 1 : -1;
        if (valueA > valueB) return isSortedDesc ? -1 : 1;
        return 0;
      }

      if (valueA < valueB) return isSortedDesc ? 1 : -1;
      if (valueA > valueB) return isSortedDesc ? -1 : 1;
      return 0;
    });

    const renderCellValue = (
      record,
      column: TableColumnProps,
      row: number,
      parent: any = null,
      parentRow?: number
    ) => {
      let value = Util.getColumnValue(column, record);
      if (
        column.hideMinOrDefaultValue &&
        Util.isMinOrDefaultValue(value, column.type)
      ) {
        value = null;
      }

      if (column.renderCell) {
        return column.renderCell({
          record,
          value,
          row,
          parent,
          parentRow,
        });
      }

      if (value !== undefined && value !== null) {
        if (column.sourceList && Array.isArray(column.sourceList)) {
          const sourceValueProperty =
            column.sourceValueProperty ??
            config.components.table.behavior.sourceValueProperty;
          const sourceDescriptionProperty =
            column.sourceDescriptionProperty ??
            config.components.table.behavior.sourceDescriptionProperty;
          if (sourceValueProperty && sourceDescriptionProperty) {
            const foundItem = column.sourceList.find(
              (item) => item[sourceValueProperty] === value
            );

            if (foundItem) {
              value = foundItem[sourceDescriptionProperty];
              if (column.displayBadge) {
                const sourceBadgeProperty =
                  column.sourceBadgeProperty ??
                  config.components.table.behavior.sourceBadgeProperty;
                if (sourceBadgeProperty) {
                  const badgeClasses = Util.mapToCssModules(
                    classNames(
                      config.components.table.classes.badge,
                      foundItem[sourceBadgeProperty]
                    )
                  );
                  return <div className={badgeClasses}>{value}</div>;
                }
              }
              return value;
            }
          }
        }

        if (column.format) {
          const formatOptions = {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          };

          if (column.format.match(/[cdfnp]/i)) {
            const decimalPlaces =
              column.format.length > 1
                ? parseInt(column.format.substring(1))
                : 0;
            formatOptions.minimumFractionDigits = decimalPlaces;
            formatOptions.maximumFractionDigits = decimalPlaces;
          }

          switch (column.format.charAt(0)) {
            case "d":
              return Util.formatDate(
                value,
                finalCulture,
                { year: "numeric", month: "numeric", day: "numeric" },
                finalTimeZone
              );
            case "D":
              return Util.formatDate(
                value,
                finalCulture,
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
                finalTimeZone
              );
            case "t":
              return Util.formatDate(
                value,
                finalCulture,
                { hour: "2-digit", minute: "2-digit" },
                finalTimeZone
              );
            case "T":
              return Util.formatDate(
                value,
                finalCulture,
                {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: true,
                },
                finalTimeZone
              );
            case "c":
            case "C":
              return parseFloat(value).toLocaleString(finalCulture, {
                style: "currency",
                currency: "BRL",
                ...formatOptions,
              });
            case "f":
            case "F":
              return parseFloat(value).toLocaleString(
                finalCulture,
                formatOptions
              );
            case "n":
            case "N":
              return parseInt(value, 10).toLocaleString(
                finalCulture,
                formatOptions
              );
            case "p":
            case "P":
              return `${parseFloat(value).toFixed(2)}%`;
            default:
              return value;
          }
        }

        if (column.mask) {
          return typeof column.mask === "string"
            ? Util.applyMask(value, column.mask)
            : column.mask(record);
        }
        switch (column.type) {
          case ColumnType.FLOAT:
            return parseFloat(value).toLocaleString(finalCulture, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            });
          case ColumnType.DATE:
            return Util.getFormattedDate(value, finalTimeZone, finalCulture);
          case ColumnType.DATETIME:
            return Util.getFormattedDateTime(
              value,
              finalTimeZone,
              finalCulture
            );
          case ColumnType.INT:
            return parseInt(value, 10);
          default: {
            return value;
          }
        }
      }
    };

    const renderCellValueForExport = (record, column: TableColumnProps) => {
      let value = Util.getColumnValue(column, record);

      if (value !== undefined && value !== null) {
        if (column.format) {
          const formatOptions = {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          };

          if (column.format.match(/[cdfnp]/i)) {
            const decimalPlaces =
              column.format.length > 1
                ? parseInt(column.format.substring(1))
                : 0;
            formatOptions.minimumFractionDigits = decimalPlaces;
            formatOptions.maximumFractionDigits = decimalPlaces;
          }

          switch (column.format.charAt(0)) {
            case "d":
              return Util.formatDate(
                value,
                finalCulture,
                { year: "numeric", month: "numeric", day: "numeric" },
                finalTimeZone
              );
            case "D":
              return Util.formatDate(
                value,
                finalCulture,
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
                finalTimeZone
              );
            case "t":
              return Util.formatDate(
                value,
                finalCulture,
                { hour: "2-digit", minute: "2-digit" },
                finalTimeZone
              );
            case "T":
              return Util.formatDate(
                value,
                finalCulture,
                {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: true,
                },
                finalTimeZone
              );
            case "c":
            case "C":
              return parseFloat(value).toLocaleString(finalCulture, {
                style: "currency",
                currency: "BRL",
                ...formatOptions,
              });
            case "f":
            case "F":
              return parseFloat(value).toLocaleString(
                finalCulture,
                formatOptions
              );
            case "n":
            case "N":
              return parseInt(value, 10).toLocaleString(
                finalCulture,
                formatOptions
              );
            case "p":
            case "P":
              return `${parseFloat(value).toFixed(2)}%`;
            default:
              return value;
          }
        }

        if (column.mask) {
          return typeof column.mask === "string"
            ? Util.applyMask(value, column.mask)
            : column.mask(record);
        }

        switch (column.type) {
          case ColumnType.FLOAT:
            return parseFloat(value).toLocaleString(finalCulture, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            });
          case ColumnType.DATE:
            return Util.getFormattedDate(value, finalTimeZone, finalCulture);
          case ColumnType.DATETIME:
            return Util.getFormattedDateTime(
              value,
              finalTimeZone,
              finalCulture
            );
          case ColumnType.INT:
            return parseInt(value, 10);
          default:
            return value;
        }
      }

      return value || "";
    };

    const classes = Util.mapToCssModules(
      classNames(
        className,
        "table table-bordered",
        enableHoverEffect ? "table-hover" : ""
      )
    );

    const classesDetail = Util.mapToCssModules(
      classNames(
        classNameDetail,
        "table table-bordered",
        enableHoverEffectDetail ? "table-hover" : ""
      )
    );

    const renderHeader = () => {
      return (
        <>
          <thead className="table-light table-nowrap">
            <tr role="row">
              {selection === SelectionType.CHECKBOX && (
                <th
                  role="columnheader"
                  className={`header-checkbox text-center`}
                >
                  {enableSelectAll && (
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      aria-label="Select All"
                    />
                  )}
                </th>
              )}
              {visibleColumns.map((column, index) => (
                <th
                  key={`th-header-${index}`}
                  role="columnheader"
                  className={classNames(
                    column.headerClassName,
                    Util.getAlignClassName(column.headerAlign),
                    {
                      "header-filter": !column.disableFilters,
                    }
                  )}
                  style={{
                    ...(column.width ? { width: column.width } : {}),
                  }}
                  onClick={
                    !singleRecordTable && column.enableSort === true
                      ? () => handleSort(column)
                      : null
                  }
                >
                  {column.header}
                  {!singleRecordTable && generateSortingIndicator(column)}
                </th>
              ))}
            </tr>
          </thead>
        </>
      );
    };

    const renderTableHeader = () => {
      return (
        <>
          <div className="table-responsive react-table">
            <table role="table" className={classes}>
              {renderHeader()}
            </table>
          </div>
        </>
      );
    };

    const renderPagination = () => {
      if (!showPagination) {
        return null;
      }

      // Safe calculations to ensure valid numbers
      const safeCurrentPage = Number(displayCurrentPage) || 1;
      const safeTotalRecords = Number(displayTotalRecords) || 0;
      const safeTotalPages =
        Number(displayTotalPages) ||
        Math.ceil(safeTotalRecords / pageSize) ||
        1;

      if (customPaginationRender) {
        return customPaginationRender({
          currentPage: safeCurrentPage,
          totalPages: safeTotalPages,
          totalRecords: safeTotalRecords,
          pageSize: pageSize,
          onPageChange: handlePageChange,
          loading,
        });
      }

      return (
        <TablePagination
          currentPage={safeCurrentPage}
          totalPages={safeTotalPages}
          totalRecords={safeTotalRecords}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          loading={loading}
        />
      );
    };
    const renderTable = (data) => {
      const handleRowDoubleClick = (
        event: React.MouseEvent<HTMLTableRowElement>,
        rowData: any,
        rowIndex: number
      ) => {
        if (onDoubleClick) {
          onDoubleClick(rowData, rowIndex);
        }
      };
      const handleRowDoubleClickDetail = (
        event: React.MouseEvent<HTMLTableRowElement>,
        rowData: any,
        rowDataParent: any,
        rowIndex: number,
        rowIndexParent: number
      ) => {
        if (onDoubleClickDetail) {
          onDoubleClickDetail(rowData, rowDataParent, rowIndex, rowIndexParent);
        }
      };
      const handleCellDoubleClick = (
        rowIndex: number,
        colIndex: number,
        rowData: any,
        column: TableColumnProps
      ) => {
        if (column.onDoubleClick) {
          column.onDoubleClick(
            rowIndex,
            colIndex,
            Util.getColumnValue(column, rowData),
            rowData
          );
        }
      };

      const resolveRowClassName = (record: any) => {
        if (!rowClassName) return "";
        return typeof rowClassName === "function"
          ? rowClassName(record)
          : rowClassName;
      };

      const resolveDetailRowClassName = (detail: any, parent: any) => {
        if (!rowDetailClassName) return "";
        return typeof rowDetailClassName === "function"
          ? rowDetailClassName(detail, parent)
          : rowDetailClassName;
      };
      return (
        <>
          {data.length > 0 ? (
            <div className="table-responsive react-table">
              <table role="table" className={classes}>
                {showHeader && !uniqueHeaderSingleRecordTable && renderHeader()}

                <tbody>
                  {data.map((record, rowIndex) => (
                    <Fragment key={`fragement-${rowIndex}`}>
                      <tr
                        key={`tr-${rowIndex}`}
                        role="row"
                        className={classNames(resolveRowClassName(record))}
                        onDoubleClick={(event) =>
                          handleRowDoubleClick(event, record, rowIndex)
                        }
                      >
                        {selection === SelectionType.CHECKBOX && (
                          <td role="cell" className="cell-checkbox text-center">
                            <input
                              type="checkbox"
                              checked={selectedRows.includes(rowIndex)}
                              onChange={(event) =>
                                handleSelect(event, rowIndex)
                              }
                              aria-label="Select"
                            />
                          </td>
                        )}
                        {visibleColumns.map((column, colIndex) => (
                          <td
                            key={`td-${colIndex}`}
                            role="cell"
                            className={classNames(
                              column.contentClassName,
                              Util.getAlignClassName(column.contentAlign)
                            )}
                            style={{
                              ...((!showHeader ||
                                (showHeader &&
                                  uniqueHeaderSingleRecordTable)) &&
                              column.width
                                ? { width: column.width }
                                : {}),
                            }}
                            onDoubleClick={(event) =>
                              handleCellDoubleClick(
                                rowIndex,
                                colIndex,
                                record,
                                column
                              )
                            }
                          >
                            {renderCellValue(record, column, rowIndex)}
                          </td>
                        ))}
                      </tr>

                      {/* ➜ main row footer */}
                      {typeof rowFooterRender === "function" && (
                        <tr
                          key={`tr-footer-${rowIndex}`}
                          className="tr-row-footer"
                        >
                          <td
                            role="cell"
                            className="td-row-footer"
                            colSpan={
                              (selection === SelectionType.CHECKBOX ? 1 : 0) +
                              visibleColumns.length
                            }
                          >
                            {rowFooterRender(record, rowIndex)}
                          </td>
                        </tr>
                      )}

                      {columnsDetail && columnsDetail.length > 0 && (
                        <tr
                          key={`tr-detail-${rowIndex}`}
                          role="row"
                          className="tr-detail"
                        >
                          <td
                            colSpan={
                              visibleColumns.length +
                              (selection === SelectionType.CHECKBOX ? 1 : 0)
                            }
                          >
                            <table role="table" className={classesDetail}>
                              {showDetailHeader && (
                                <thead className="table-light table-nowrap">
                                  <tr key={`tr-detail-${rowIndex}`} role="row">
                                    {columnsDetail.map(
                                      (columnDetail, index) => (
                                        <th
                                          key={`td-detail-${index}`}
                                          role="columnheader"
                                          className={classNames(
                                            columnDetail.headerClassName,
                                            Util.getAlignClassName(
                                              columnDetail.headerAlign
                                            ),
                                            {
                                              "header-filter":
                                                !columnDetail.disableFilters,
                                            }
                                          )}
                                          style={{
                                            ...(columnDetail.width
                                              ? { width: columnDetail.width }
                                              : {}),
                                          }}
                                          onClick={() =>
                                            handleSort(columnDetail)
                                          }
                                        >
                                          {columnDetail.header}
                                          {generateSortingIndicator(
                                            columnDetail
                                          )}
                                        </th>
                                      )
                                    )}
                                  </tr>
                                </thead>
                              )}

                              <tbody>
                                {record[dataDetailProperty].map(
                                  (recordDetail, rowDetailIndex) => (
                                    <Fragment key={rowDetailIndex}>
                                      <tr
                                        role="row"
                                        className={classNames(
                                          resolveDetailRowClassName(
                                            recordDetail,
                                            record
                                          )
                                        )}
                                        onDoubleClick={(event) =>
                                          handleRowDoubleClickDetail(
                                            event,
                                            recordDetail,
                                            record,
                                            rowDetailIndex,
                                            rowIndex
                                          )
                                        }
                                      >
                                        {columnsDetail.map(
                                          (columnDetail, colDetailIndex) => (
                                            <td
                                              key={colDetailIndex}
                                              role="cell"
                                              className={classNames(
                                                columnDetail.contentClassName,
                                                Util.getAlignClassName(
                                                  columnDetail.contentAlign
                                                )
                                              )}
                                              style={{
                                                ...((!showHeader ||
                                                  (showHeader &&
                                                    uniqueHeaderSingleRecordTable)) &&
                                                columnDetail.width
                                                  ? {
                                                      width: columnDetail.width,
                                                    }
                                                  : {}),
                                              }}
                                            >
                                              {renderCellValue(
                                                recordDetail,
                                                columnDetail,
                                                rowDetailIndex,
                                                record,
                                                rowIndex
                                              )}
                                            </td>
                                          )
                                        )}
                                      </tr>

                                      {/* ➜ detail row footer */}
                                      {typeof rowDetailFooterRender ===
                                        "function" && (
                                        <tr className="tr-row-detail-footer">
                                          <td
                                            role="cell"
                                            className="td-row-detail-footer"
                                            colSpan={columnsDetail.length}
                                          >
                                            {rowDetailFooterRender(
                                              recordDetail,
                                              record,
                                              rowDetailIndex,
                                              rowIndex
                                            )}
                                          </td>
                                        </tr>
                                      )}
                                    </Fragment>
                                  )
                                )}
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className={`alert alert-info text-center`} role="alert">
              {finalNoRecordMessage}
            </div>
          )}
        </>
      );
    };

    const renderCards = (data: any[]) => {
      const idx = (s: ScreenSize) => order.indexOf(s);

      const hasValue = (record: any, column: TableColumnProps) => {
        let value = Util.getColumnValue(column, record);
        if (Util.isMinOrDefaultValue(value, column.type)) {
          value = null;
        }
        return value ? true : false;
      };
      // filter detail columns by responsive rules
      const visibleDetailColumns = (columnsDetail ?? []).filter((c) => {
        if (c.showOn?.length) return c.showOn.includes(screenSize);
        if (c.hiddenOn?.includes(screenSize)) return false;
        if (c.hideBelow && idx(screenSize) < idx(c.hideBelow)) return false;
        if (c.hideAbove && idx(screenSize) > idx(c.hideAbove)) return false;
        return true;
      });

      const resolveRowClassName = (record: any) => {
        if (!rowClassName) return "";
        return typeof rowClassName === "function"
          ? rowClassName(record)
          : rowClassName;
      };

      const resolveDetailRowClassName = (detail: any, parent: any) => {
        if (!rowDetailClassName) return "";
        return typeof rowDetailClassName === "function"
          ? rowDetailClassName(detail, parent)
          : rowDetailClassName;
      };

      // ➜ No records: show alert
      if (!data || data.length === 0) {
        return (
          <div className={`alert alert-info text-center my-3`} role="alert">
            {finalNoRecordMessage}
          </div>
        );
      }

      return (
        <div className="card-list">
          {data.map((record, rowIndex) => (
            <div
              key={rowIndex}
              /* <-- apply "tr" main class to card wrapper */
              className={classNames(
                "card mb-3 p-3 shadow-sm",
                resolveRowClassName(record)
              )}
              onDoubleClick={(e) => onDoubleClick?.(record, rowIndex)}
            >
              {/* Main record fields */}
              {visibleColumns.map((column, colIndex) => {
                // content already processed (includes hideMinOrDefaultValue, mask, format, etc.)
                const cellContent = renderCellValue(record, column, rowIndex);

                const coi = column.cardOnlyIfValue;

                if (
                  (typeof coi === "function" && !coi(record)) || // function: decides based on record
                  (coi === true && !hasValue(record, column)) // boolean true: only renders if has value
                ) {
                  return null;
                }
                const showHeader = column.cardHeaderVisible !== false;

                return (
                  <div key={colIndex} className="row gx-2 border-bottom py-2">
                    {/* Label */}
                    {showHeader && (
                      <div
                        className={classNames(
                          "col-4",
                          column.headerClassName,
                          Util.getAlignClassName(column.headerAlignCard)
                        )}
                      >
                        <strong>{column.header}</strong>
                      </div>
                    )}

                    {/* Value */}
                    <div
                      className={classNames(
                        showHeader ? "col-8" : "col-12",
                        column.contentClassName,
                        Util.getAlignClassName(
                          column.contentAlignCard,
                          AlignType.END
                        )
                      )}
                    >
                      {cellContent}
                    </div>
                  </div>
                );
              })}

              {/* ➜ card footer (main row) */}
              {typeof rowFooterRender === "function" && (
                <div className="card-row-footer pt-2">
                  {rowFooterRender(record, rowIndex)}
                </div>
              )}

              {/* Details as nested cards */}
              {columnsDetail &&
                columnsDetail.length > 0 &&
                dataDetailProperty &&
                Array.isArray(record[dataDetailProperty]) &&
                record[dataDetailProperty].length > 0 && (
                  <div className="mt-3">
                    {record[dataDetailProperty].map(
                      (recordDetail: any, rowDetailIndex: number) => (
                        <div
                          key={rowDetailIndex}
                          className={classNames(
                            "card mb-2 p-2 bg-light-subtle",
                            resolveDetailRowClassName(recordDetail, record)
                          )}
                          onDoubleClick={() =>
                            onDoubleClickDetail?.(
                              recordDetail,
                              record,
                              rowDetailIndex,
                              rowIndex
                            )
                          }
                        >
                          {visibleDetailColumns.map(
                            (columnDetail, colDetailIndex) => {
                              const cellDetail = renderCellValue(
                                recordDetail,
                                columnDetail,
                                rowDetailIndex,
                                record,
                                rowIndex
                              );

                              const coi = columnDetail.cardOnlyIfValue;

                              if (
                                (typeof coi === "function" &&
                                  !coi(recordDetail)) || // function: decides based on record
                                (coi === true &&
                                  !hasValue(recordDetail, columnDetail)) // boolean true: only renders if has value
                              ) {
                                return null;
                              }

                              // in CARD, label depends only on cardHeaderVisible
                              const showHeaderDetail =
                                columnDetail.cardHeaderVisible !== false;

                              return (
                                <div
                                  key={colDetailIndex}
                                  className="row gx-2 border-bottom py-2"
                                >
                                  {showHeaderDetail && (
                                    <div
                                      className={classNames(
                                        "col-4",
                                        columnDetail.headerClassName,
                                        Util.getAlignClassName(
                                          columnDetail.headerAlignCard ??
                                            columnDetail.headerAlign
                                        )
                                      )}
                                    >
                                      <strong>{columnDetail.header}</strong>
                                    </div>
                                  )}

                                  <div
                                    className={classNames(
                                      showHeaderDetail ? "col-8" : "col-12",
                                      columnDetail.contentClassName,
                                      Util.getAlignClassName(
                                        columnDetail.contentAlignCard ??
                                          columnDetail.contentAlign,
                                        AlignType.END
                                      )
                                    )}
                                  >
                                    {cellDetail}
                                  </div>
                                </div>
                              );
                            }
                          )}

                          {/* ➜ detail card footer */}
                          {typeof rowDetailFooterRender === "function" && (
                            <div className="card-row-detail-footer pt-2">
                              {rowDetailFooterRender(
                                recordDetail,
                                record,
                                rowDetailIndex,
                                rowIndex
                              )}
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>
                )}
            </div>
          ))}
        </div>
      );
    };

    const renderContent = (rows: any[]) =>
      viewMode === TableViewMode.CARD ? renderCards(rows) : renderTable(rows);

    // Show loading state
    if (loading) {
      return <Loading text={finalLoadingText} />;
    }

    // No Table/index.tsx, MODIFIQUE o return final:

    // Table/index.tsx - RETURN SECTION ONLY
    return (
      <div className="smart-table-container">
        {/* Top pagination */}
        {(paginationPosition === "top" || paginationPosition === "both") &&
          renderPagination()}

        {/* Main table content */}
        {!singleRecordTable ? (
          <Fragment>{renderContent(sortedData)}</Fragment>
        ) : (
          <Fragment>
            {uniqueHeaderSingleRecordTable &&
              viewMode === TableViewMode.TABLE &&
              renderTableHeader()}
            {sortedData.map((record, index) => (
              <Fragment key={`fra-${index}`}>
                {renderContent([record])}
              </Fragment>
            ))}
          </Fragment>
        )}

        {/* Bottom pagination */}
        {(paginationPosition === "bottom" || paginationPosition === "both") &&
          renderPagination()}
      </div>
    );
  }
);
