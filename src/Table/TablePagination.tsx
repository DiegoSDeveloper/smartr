// TablePagination.tsx - PRODUCTION READY VERSION
import React from "react";
import { useSmartConfig } from "../hook/useSmartConfig";
import { Tooltip } from "../Tooltip/Tooltip";
import { TooltipPosition } from "../types";
import { TablePaginationComponentProps } from "./types";

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
}: TablePaginationComponentProps) {
  const config = useSmartConfig();

  // Get texts from config
  const texts = {
    showing: config.components.table.texts.showing,
    to: config.components.table.texts.to,
    of: config.components.table.texts.of,
    records: config.components.table.texts.records,
    firstPage: config.components.table.texts.firstPage,
    previousPage: config.components.table.texts.previousPage,
    nextPage: config.components.table.texts.nextPage,
    lastPage: config.components.table.texts.lastPage,
    page: config.components.table.texts.page,
    ...customTexts,
  };

  // ✅ USA CLASSES DE table.pagination
  const defaultClasses = config.components.table.classes.pagination;
  const classes = {
    ...defaultClasses,
    ...customClasses,
  };

  // Get icons from config
  const icons = {
    firstPage: config.components.table.icons.firstPage,
    previousPage: config.components.table.icons.previousPage,
    nextPage: config.components.table.icons.nextPage,
    lastPage: config.components.table.icons.lastPage,
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
    <div className={`${classes.container}`}>
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
        <ul className={`${classes.pagination}`}>
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
          <li className={`${classes.pageItem} ${classes.pageIndicatorBadge}`}>
            <span className={`${classes.pageInfo}`}>
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
