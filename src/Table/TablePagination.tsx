// TablePagination.tsx - PRODUCTION READY VERSION
import React from "react";
import { useSmartConfig } from "../hook/useSmartConfig";
import { Tooltip } from "../Tooltip/Tooltip";
import { TooltipPosition } from "../types";
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

export function TablePagination({
  currentPage,
  totalPages,
  totalRecords,
  pageSize,
  onPageChange,
  loading = false,
  customTexts = {},
  customClasses = {},
  customIcons = {},
}: TablePaginationProps) {
  const config = useSmartConfig();

  // Get texts from config
  const texts = {
    showing: config.texts.table.showing,
    to: config.texts.table.to,
    of: config.texts.table.of,
    records: config.texts.table.records,
    firstPage: config.texts.table.firstPage,
    previousPage: config.texts.table.previousPage,
    nextPage: config.texts.table.nextPage,
    lastPage: config.texts.table.lastPage,
    page: config.texts.table.page,
    ...customTexts,
  };

  // Get classes from config
  const classes = {
    container: config.classes.table.container,
    info: config.classes.table.info,
    controls: config.classes.table.controls,
    pagination: config.classes.table.pagination,
    pageItem: config.classes.table.pageItem,
    pageInfo: config.classes.table.pageInfo,
    pageLink: config.classes.table.pageLink,
    activePage: config.classes.table.activePage,
    disabledPage: config.classes.table.disabledPage,
    ...customClasses,
  };

  // Get icons from config
  const icons = {
    firstPage: config.icons.table.firstPage,
    previousPage: config.icons.table.previousPage,
    nextPage: config.icons.table.nextPage,
    lastPage: config.icons.table.lastPage,
    ...customIcons,
  };

  // Safe calculations to prevent NaN and invalid values
  const safeTotalPages = Math.max(Number(totalPages) || 1, 1);
  const safeCurrentPage = Math.max(
    1,
    Math.min(Number(currentPage) || 1, safeTotalPages)
  );
  const safeTotalRecords = Math.max(Number(totalRecords) || 0, 0);

  const startItem =
    safeTotalRecords === 0 ? 0 : (safeCurrentPage - 1) * pageSize + 1;
  const endItem = Math.min(safeCurrentPage * pageSize, safeTotalRecords);

  // Don't show pagination if there's only one page
  if (safeTotalPages <= 1) {
    return null;
  }

  const isFirstPage = safeCurrentPage <= 1;
  const isLastPage = safeCurrentPage >= safeTotalPages;

  function getPageItemClass(isDisabled: boolean) {
    return `${classes.pageItem} ${
      isDisabled ? classes.disabledPage : ""
    }`.trim();
  }

  function handlePageClick(
    page: number,
    isDisabled: boolean,
    event: React.MouseEvent
  ) {
    event.preventDefault();
    if (isDisabled || loading) return;
    onPageChange(page);
  }

  return (
    <div
      className={`${classes.container} d-flex justify-content-between align-items-center flex-wrap`}
    >
      {/* Pagination info - LADO ESQUERDO */}
      <div className={classes.info}>
        <span>
          {texts.showing} <strong>{startItem}</strong> {texts.to}{" "}
          <strong>{endItem}</strong> {texts.of}{" "}
          <strong>{safeTotalRecords}</strong> {texts.records}
        </span>
      </div>

      {/* Pagination controls - LADO DIREITO */}
      <div className={classes.controls}>
        <ul className={`${classes.pagination} mb-0`}>
          {/* First page button */}
          <li className={getPageItemClass(isFirstPage)}>
            <Tooltip position={TooltipPosition.Top} text={texts.firstPage}>
              <a
                href="#"
                className={classes.pageLink}
                onClick={(e) => handlePageClick(1, isFirstPage, e)}
                aria-label={texts.firstPage}
              >
                <i className={icons.firstPage}></i>
              </a>
            </Tooltip>
          </li>

          {/* Previous page button */}
          <li className={getPageItemClass(isFirstPage)}>
            <Tooltip position={TooltipPosition.Top} text={texts.previousPage}>
              <a
                href="#"
                className={classes.pageLink}
                onClick={(e) =>
                  handlePageClick(safeCurrentPage - 1, isFirstPage, e)
                }
                aria-label={texts.previousPage}
              >
                <i className={icons.previousPage}></i>
              </a>
            </Tooltip>
          </li>

          {/* Current page indicator - BADGE ENTRE SETAS */}
          <li className={`${classes.pageItem}  bg-light border mx-1 px-3`}>
            <span
              className={`${classes.pageLink} ${classes.pageInfo} bg-transparent border-0 text-dark fw-semibold`}
            >
              {texts.page} {safeCurrentPage} {texts.of} {safeTotalPages}
            </span>
          </li>

          {/* Next page button */}
          <li className={getPageItemClass(isLastPage)}>
            <Tooltip position={TooltipPosition.Top} text={texts.nextPage}>
              <a
                href="#"
                className={classes.pageLink}
                onClick={(e) =>
                  handlePageClick(safeCurrentPage + 1, isLastPage, e)
                }
                aria-label={texts.nextPage}
              >
                <i className={icons.nextPage}></i>
              </a>
            </Tooltip>
          </li>

          {/* Last page button */}
          <li className={getPageItemClass(isLastPage)}>
            <Tooltip position={TooltipPosition.Top} text={texts.lastPage}>
              <a
                href="#"
                className={classes.pageLink}
                onClick={(e) => handlePageClick(safeTotalPages, isLastPage, e)}
                aria-label={texts.lastPage}
              >
                <i className={icons.lastPage}></i>
              </a>
            </Tooltip>
          </li>
        </ul>
      </div>
    </div>
  );
}
