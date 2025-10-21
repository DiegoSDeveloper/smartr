export const defaultConfig = {
  hasInputGroup: true,
  translateToken: "GomeliusDev",
  translateText: false,
  columnTag: "div",
  invalidFeedbackTag: "div",
  editorButtonTag: "span",
  validateOnBlur: true,
  validateOnSubmit: true,
  prependIconAfterInput: true,
  showPasswordIcon: true,
  optionsId: "id",
  optionsDescription: "descricao",
  optionsToolTip: "tooltip",
  optionsGroup: "grupo",
  optionsNoneSelectedValue: "",
  optionsFirstSelected: false,
  optionsNoneSelectedText: "None selected",
  filePlaceholderText: "Select a file...",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  decimalPlaces: 2,
  phoneMask: "(00) 00000-0000",
  phonePlaceholder: "(00) 00000-0000",
  optionsLimiteDescriptionSelected: 3,
  optionsMultipleSeparatorValue: ",",
  optionsMultipleSeparatorDescription: ", ",
  toolTipWidth: 250,
  maxFiles: 10,
  maxFilesPlaceholder: 5,
  maxFileSize: 300,
  // maxFileSize: 52428800,
  table: {
    timeZone: "UTC",
    culture: "en-US",
    sourceValueProperty: "id",
    sourceDescriptionProperty: "description",
    sourceBadgeProperty: "badge",

    pageSize: 10,
    pageSizes: [10, 25, 50, 100],
  },
  texts: {
    optionsFilterPlaceholder: "type to search...",
    optionsMultipleSelectAll: "Select all",
    optionsMultipleSelectNone: "Select none",
    optionsMultipleSelected: "Selected",
    optionsMultipleNoneSelected: "None selected",
    downloadFileTooltip: "Click here to download the file",
    deleteFileTooltip: "Click here to delete the file",
    uploadFileTooltip: "Click here to choose a file",
    totalSelectedFiles: "Selected files",
    table: {
      showing: "Showing from",
      to: "to",
      of: "of",
      records: "records",
      firstPage: "Go to first page",
      previousPage: "Go to previous page",
      nextPage: "Go to next page",
      lastPage: "Go to last page",
      page: "Page",
    },
  },
  classes: {
    controlGroup: "form-group",
    controlGroupDisabledControl: "disabled",
    horizontalFormRow: "mb-1",
    horizontalLabel: "col-form-label",
    radioGroupList: "radio-group",
    radioGroup: "form-check",
    radioGroupInLine: "form-check form-check-inline",
    input: "form-control",
    label: "form-label float-label",
    radio: "form-check-input",
    checkbox: "form-check-input",
    checkboxGroup: "form-check",
    checkboxLabel: "form-check-label",
    radioLabel: "form-check-label",
    radioOptionsGroup: "radio-options-group",
    required: "required",
    titleBold: "title-bold",
    inputGroup: "input-group",
    inputGroupAppendFile: "input-group-append file",
    inputGroupAppendButton: "input-group-append button",
    inputGroupAppendIcon: "input-group-append",
    inputGroupPrependIcon: "input-group-prepend",
    inputGroupIcon: "input-group-text inside-input",
    inputGroupButton: "input-group-text",
    inputGroupFileUploadIcon: "input-group-text upload",
    inputGroupFileDeleteIcon: "input-group-text delete",
    inputGroupFileDownloadIcon: "input-group-text download",
    inputGroupShowPasswordIcon: "input-group-text inside-input show-password",
    labelNote: "form-text text-muted note",
    invalid: "is-invalid",
    validationMessageError: "error-validation-message",
    validationMessageSuccess: "success-validation-message",
    validationMessageWarning: "warning-validation-message",
    tooltipTop: "smart-tooltip top",
    tooltipBottom: "smart-tooltip bottom",
    tooltipLeft: "smart-tooltip left",
    tooltipRight: "smart-tooltip right",
    tooltipOverlay: "tooltip-overlay",
    select: {
      container: "select-filter form-control",
      innerContainer: "select-box",
      groupHeader: "group-header",
      optionsContainer: "options-container",
      optionSelectedInput: "options-selected-input",
      optionDisabled: "option-disabled",
      dropdown: "options",
      option: "option",
      searchInput: "search-input",
      selectAll: "options-select-label",
    },
    table: {
      badge: "badge bg-link rounded-pill font-size-12",
      container: "table-pagination",
      info: "pagination-info",
      controls: "pagination-controls",
      pagination: "pagination pagination-rounded mb-sm-0",
      pageItem: "page-item",
      pageLink: "page-link",
      pageInfo: "page-info",
      activePage: "active",
      disabledPage: "disabled",
    },
  },
  icons: {
    money: "fas fa-dollar-sign",
    percent: "fas fa-percent",
    date: "fas fa-calendar",
    email: "fas fa-envelope",
    phone: "fas fa-phone",
    mobile: "fas fa-mobile-alt",
    fax: "fas fa-fax",
    password: "fas fa-lock",
    time: "fas fa-clock",
    card: "fas fa-credit-card",
    fastSearch: "fas fa-search",
    note: "fas fa-info",
    tooltip: "tooltip-icon fas fa-info-circle",
    delete: "fas fa-trash",
    download: "fas fa-cloud-download-alt",
    upload: "fas fa-cloud-upload-alt",
    showPassword: "fas fa-eye",
    hidePassword: "fas fa-eye-slash",
    moneyPositionStart: true,
    percentPositionStart: true,
    datePositionStart: true,
    emailPositionStart: true,
    phonePositionStart: true,
    mobilePositionStart: true,
    faxPositionStart: true,
    passwordPositionStart: true,
    timePositionStart: true,
    cardPositionStart: true,
    fastSearchPositionStart: true,
    notePositionStart: true,
    table: {
      sortAscending: "fas fa-sort-up",
      sortDescending: "fas fa-sort-down",
      sortDefault: "fas fa-sort",
      firstPage: "mdi mdi-chevron-double-left",
      previousPage: "mdi mdi-chevron-left",
      nextPage: "mdi mdi-chevron-right",
      lastPage: "mdi mdi-chevron-double-right",
    },
  },
  messages: {
    minCharacter: "Please enter at least 1 character",
    minCharacters: "Please enter at least %s1 characters",
    maxCharacter: "Please enter at most 1 character",
    maxCharacters: "Please enter at most %s1 characters",
    minMaxCharacters: "This value must be between %s1 and %s2 characters long",

    minNumber: "The value must be greater than or equal to %s1",
    maxNumber: "The value must be less than or equal to %s1",
    minMaxNumber: "This number must be between %s1 and %s2",

    email: "Please enter a valid email address",
    required: "This field is required",
    date: "Please enter a valid date",
    number: "Please enter a valid number",

    totalFilesAllowedExceeded: "Select at most %s1 files",
    fileSizeExceededMaxAllowed:
      "File %s1 exceeds the maximum allowed size of %s2",
    table: {
      noRecordMessage: "No records to display.",
      loadingText: "Loading...",
      searchPlaceholder: "Search...",
      paginationText: "Showing {0} to {1} of {2} entries",
    },
  },
};

export type SmartRConfig = typeof defaultConfig;

// DEBUG
const DEBUG_SMARTR = false;
const log = (...a: any[]) => DEBUG_SMARTR && console.log("[SmartR]", ...a);
const safe = (o: any) => {
  try {
    return JSON.stringify(o, null, 2);
  } catch {
    return String(o);
  }
};

// deep merge (objetos; arrays substituem)
function deepMerge<T>(base: T, patch: Partial<T>): T {
  if (!patch || typeof patch !== "object") return base;
  const out: any = Array.isArray(base)
    ? [...((patch as any) ?? base)]
    : { ...base };
  for (const [k, v] of Object.entries(patch)) {
    const b: any = (base as any)[k];
    if (
      v &&
      typeof v === "object" &&
      !Array.isArray(v) &&
      b &&
      typeof b === "object" &&
      !Array.isArray(b)
    ) {
      out[k] = deepMerge(b, v as any);
    } else {
      out[k] = v;
    }
  }
  return out;
}

// === 3) Override GLOBAL opcional em src/smartR.config.json ===
let globalOverride: Partial<SmartRConfig> | null = null;

try {
  // IMPORTANTE: caminho relativo ao arquivo atual (src/SmartR/configSmartR.ts) para a raiz de src/
  // Se você mover este arquivo para outro lugar, ajuste "../"
  // @ts-ignore - webpack/babel vai resolver JSON
  const mod = require("../smartR.config.json");
  globalOverride = (mod?.default ?? mod) as Partial<SmartRConfig>;
  log("override carregado de ../smartR.config.json");
  log("override (preview):", safe(globalOverride));
} catch (e: any) {
  log(
    "nenhum override encontrado em ../smartR.config.json (usando defaults).",
    e?.message ?? e
  );
}

// === 4) Config final ===
export const configSmartR: SmartRConfig = globalOverride
  ? deepMerge(defaultConfig, globalOverride)
  : defaultConfig;

log("globalOverride aplicado?", !!globalOverride);
if (globalOverride) log("config final (preview):", safe(configSmartR));
