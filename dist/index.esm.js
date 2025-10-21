import React, { useEffect, useState, useRef, useCallback, forwardRef, useImperativeHandle, Fragment as Fragment$1 } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { flushSync } from 'react-dom';

/**
 * Screen size preffix
 */
var ScreenSize;
(function (ScreenSize) {
  ScreenSize["XS"] = "xs";
  ScreenSize["SM"] = "sm";
  ScreenSize["MD"] = "md";
  ScreenSize["LG"] = "lg";
  ScreenSize["XL"] = "xl";
  ScreenSize["XXL"] = "xxl";
})(ScreenSize || (ScreenSize = {}));
var ColumnSize;
(function (ColumnSize) {
  ColumnSize[ColumnSize["Col1"] = 1] = "Col1";
  ColumnSize[ColumnSize["Col2"] = 2] = "Col2";
  ColumnSize[ColumnSize["Col3"] = 3] = "Col3";
  ColumnSize[ColumnSize["Col4"] = 4] = "Col4";
  ColumnSize[ColumnSize["Col5"] = 5] = "Col5";
  ColumnSize[ColumnSize["Col6"] = 6] = "Col6";
  ColumnSize[ColumnSize["Col7"] = 7] = "Col7";
  ColumnSize[ColumnSize["Col8"] = 8] = "Col8";
  ColumnSize[ColumnSize["Col9"] = 9] = "Col9";
  ColumnSize[ColumnSize["Col10"] = 10] = "Col10";
  ColumnSize[ColumnSize["Col11"] = 11] = "Col11";
  ColumnSize[ColumnSize["Col12"] = 12] = "Col12";
})(ColumnSize || (ColumnSize = {}));
var Input;
(function (Input) {
  Input[Input["Text"] = 1] = "Text";
  Input[Input["Money"] = 2] = "Money";
  Input[Input["Date"] = 4] = "Date";
  Input[Input["Email"] = 8] = "Email";
  Input[Input["Select"] = 16] = "Select";
  Input[Input["Phone"] = 32] = "Phone";
  Input[Input["Mobile"] = 64] = "Mobile";
  Input[Input["Password"] = 128] = "Password";
  Input[Input["CheckBox"] = 512] = "CheckBox";
  Input[Input["Percent"] = 1024] = "Percent";
  Input[Input["Search"] = 2048] = "Search";
  Input[Input["LongText"] = 4096] = "LongText";
  Input[Input["Hidden"] = 8192] = "Hidden";
  Input[Input["Integer"] = 16384] = "Integer";
  Input[Input["Time"] = 32768] = "Time";
  Input[Input["Label"] = 65536] = "Label";
  Input[Input["Fax"] = 131072] = "Fax";
  Input[Input["Card"] = 262144] = "Card";
  Input[Input["Html"] = 524288] = "Html";
  Input[Input["Radio"] = 1048576] = "Radio";
  Input[Input["FastSearch"] = 2097152] = "FastSearch";
  Input[Input["Decimal"] = 4194304] = "Decimal";
  Input[Input["File"] = 8388608] = "File";
  Input[Input["Month"] = 16777216] = "Month";
})(Input || (Input = {}));
var YesNo;
(function (YesNo) {
  YesNo[YesNo["Yes"] = 0] = "Yes";
  YesNo[YesNo["No"] = 1] = "No";
})(YesNo || (YesNo = {}));
var MonthDay;
(function (MonthDay) {
  MonthDay[MonthDay["Start"] = 0] = "Start";
  MonthDay[MonthDay["End"] = 1] = "End";
  MonthDay[MonthDay["Custom"] = 2] = "Custom";
})(MonthDay || (MonthDay = {}));
var Note;
(function (Note) {
  Note[Note["Tooltip"] = 0] = "Tooltip";
  Note[Note["Popover"] = 1] = "Popover";
  Note[Note["Label"] = 2] = "Label";
})(Note || (Note = {}));
var CharacterCasing;
(function (CharacterCasing) {
  CharacterCasing[CharacterCasing["Upper"] = 0] = "Upper";
  CharacterCasing[CharacterCasing["Lower"] = 1] = "Lower";
  CharacterCasing[CharacterCasing["Normal"] = 2] = "Normal";
})(CharacterCasing || (CharacterCasing = {}));
var OptionsSource;
(function (OptionsSource) {
  OptionsSource[OptionsSource["Enum"] = 0] = "Enum";
  OptionsSource[OptionsSource["Values"] = 1] = "Values";
  OptionsSource[OptionsSource["DataSource"] = 2] = "DataSource";
  OptionsSource[OptionsSource["YesNo"] = 3] = "YesNo";
})(OptionsSource || (OptionsSource = {}));
var TextInput;
(function (TextInput) {
  TextInput[TextInput["Integer"] = 0] = "Integer";
  TextInput[TextInput["Decimal"] = 1] = "Decimal";
  TextInput[TextInput["Letter"] = 2] = "Letter";
  TextInput[TextInput["AlphaNumeric"] = 3] = "AlphaNumeric";
})(TextInput || (TextInput = {}));
var ValueType;
(function (ValueType) {
  ValueType[ValueType["Integer"] = 0] = "Integer";
  ValueType[ValueType["Float"] = 1] = "Float";
  ValueType[ValueType["Boolean"] = 2] = "Boolean";
  ValueType[ValueType["String"] = 3] = "String";
  ValueType[ValueType["Flag"] = 4] = "Flag";
  ValueType[ValueType["Array"] = 5] = "Array";
})(ValueType || (ValueType = {}));
var Hidden;
(function (Hidden) {
  Hidden[Hidden["Undefined"] = 0] = "Undefined";
  Hidden[Hidden["XSDown"] = 1] = "XSDown";
  Hidden[Hidden["SMDown"] = 2] = "SMDown";
  Hidden[Hidden["MDDown"] = 4] = "MDDown";
  Hidden[Hidden["LGDown"] = 8] = "LGDown";
  Hidden[Hidden["XLDown"] = 16] = "XLDown";
  Hidden[Hidden["XSUp"] = 32] = "XSUp";
  Hidden[Hidden["SMUp"] = 64] = "SMUp";
  Hidden[Hidden["MDUp"] = 128] = "MDUp";
  Hidden[Hidden["LGUp"] = 256] = "LGUp";
  Hidden[Hidden["XLUp"] = 512] = "XLUp";
})(Hidden || (Hidden = {}));
var IconPosition;
(function (IconPosition) {
  IconPosition[IconPosition["Start"] = 1] = "Start";
  IconPosition[IconPosition["End"] = 2] = "End";
  IconPosition[IconPosition["Both"] = 3] = "Both";
})(IconPosition || (IconPosition = {}));
var ValidationMessage;
(function (ValidationMessage) {
  ValidationMessage[ValidationMessage["Error"] = 1] = "Error";
  ValidationMessage[ValidationMessage["Success"] = 2] = "Success";
  ValidationMessage[ValidationMessage["Warning"] = 3] = "Warning";
})(ValidationMessage || (ValidationMessage = {}));
var TooltipPosition;
(function (TooltipPosition) {
  TooltipPosition[TooltipPosition["Top"] = 1] = "Top";
  TooltipPosition[TooltipPosition["Bottom"] = 2] = "Bottom";
  TooltipPosition[TooltipPosition["Left"] = 3] = "Left";
  TooltipPosition[TooltipPosition["Right"] = 4] = "Right";
})(TooltipPosition || (TooltipPosition = {}));
var LabelMode;
(function (LabelMode) {
  LabelMode[LabelMode["Normal"] = 1] = "Normal";
  LabelMode[LabelMode["CheckBox"] = 2] = "CheckBox";
  LabelMode[LabelMode["RadioButton"] = 3] = "RadioButton";
})(LabelMode || (LabelMode = {}));

class ValidationResult {
  constructor(name, title, type, message, value) {
    this.Type = type;
    this.Message = message;
    this.Name = name;
    this.Title = title;
    this.Value = value;
  }
}

const defaultConfig = {
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
    pageSizes: [10, 25, 50, 100]
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
      page: "Page"
    }
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
      selectAll: "options-select-label"
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
      disabledPage: "disabled"
    }
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
      lastPage: "mdi mdi-chevron-double-right"
    }
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
    fileSizeExceededMaxAllowed: "File %s1 exceeds the maximum allowed size of %s2",
    table: {
      noRecordMessage: "No records to display.",
      loadingText: "Loading...",
      searchPlaceholder: "Search...",
      paginationText: "Showing {0} to {1} of {2} entries"
    }
  }
};
// DEBUG
const DEBUG_SMARTR = false;
const log = (...a) => DEBUG_SMARTR ;
const safe = o => {
  try {
    return JSON.stringify(o, null, 2);
  } catch {
    return String(o);
  }
};
// deep merge (objetos; arrays substituem)
function deepMerge(base, patch) {
  if (!patch || typeof patch !== "object") return base;
  const out = Array.isArray(base) ? [...(patch ?? base)] : {
    ...base
  };
  for (const [k, v] of Object.entries(patch)) {
    const b = base[k];
    if (v && typeof v === "object" && !Array.isArray(v) && b && typeof b === "object" && !Array.isArray(b)) {
      out[k] = deepMerge(b, v);
    } else {
      out[k] = v;
    }
  }
  return out;
}
// === 3) Override GLOBAL opcional em src/smartR.config.json ===
let globalOverride = null;
try {
  // IMPORTANTE: caminho relativo ao arquivo atual (src/SmartR/configSmartR.ts) para a raiz de src/
  // Se você mover este arquivo para outro lugar, ajuste "../"
  // @ts-ignore - webpack/babel vai resolver JSON
  const mod = require("../smartR.config.json");
  globalOverride = mod?.default ?? mod;
  log("override carregado de ../smartR.config.json");
  log("override (preview):", safe(globalOverride));
} catch (e) {
  log("nenhum override encontrado em ../smartR.config.json (usando defaults).", e?.message ?? e);
}
// === 4) Config final ===
const configSmartR = globalOverride ? deepMerge(defaultConfig, globalOverride) : defaultConfig;
if (globalOverride) log("config final (preview):", safe(configSmartR));

class ConfigManager {
  constructor() {
    this.config = {
      ...defaultConfig
    };
    this.isInitialized = false;
  }
  // Método principal - funciona das duas formas
  setConfig(userConfig) {
    this.config = this.deepMerge(this.config, userConfig);
    this.isInitialized = true;
  }
  // Para auto-load no projeto atual (opcional)
  initialize() {
    if (this.isInitialized) return;
    // Só tenta auto-load no projeto atual (não como pacote)
    if (this.isCurrentProject()) {
      this.tryAutoLoad();
    }
  }
  getConfig() {
    if (!this.isInitialized) {
      this.initialize();
    }
    return this.config;
  }
  isCurrentProject() {
    // Verifica se estamos no projeto original (não como pacote npm)
    // Isso é uma heurística simples - você pode ajustar
    return typeof window !== "undefined" && !window.location.pathname.includes("node_modules");
  }
  tryAutoLoad() {
    try {
      // Tenta carregar do window (configuração global)
      if (typeof window !== "undefined" && window.SmartRConfig) {
        this.setConfig(window.SmartRConfig);
        return;
      }
      // Tenta carregar via require (apenas em desenvolvimento)
      if (typeof require !== "undefined") {
        try {
          // @ts-ignore
          const userConfig = require("../../smartR.config.json");
          this.setConfig(userConfig.default || userConfig);
          return;
        } catch (e) {
          // Arquivo não existe - ignora
        }
      }
    } catch (error) {
      console.warn("[SmartR] Auto-load falhou, usando padrão");
    }
  }
  deepMerge(base, patch) {
    if (!patch || typeof patch !== "object") return base;
    const out = Array.isArray(base) ? [...(patch ?? base)] : {
      ...base
    };
    for (const [k, v] of Object.entries(patch)) {
      const b = base[k];
      if (v && typeof v === "object" && !Array.isArray(v) && b && typeof b === "object" && !Array.isArray(b)) {
        out[k] = this.deepMerge(b, v);
      } else {
        out[k] = v;
      }
    }
    return out;
  }
}
// Instância global
const configManager = new ConfigManager();
// Export para compatibilidade (funciona agora)
configManager.getConfig();

/**
 * Util funtions
 */
const config = configManager.getConfig();
function getColumnSize(size, prefix) {
  let className = null;
  if (size) {
    if (prefix) {
      className = `col-${prefix}-${size > 0 ? size : "auto"}`;
    } else {
      className = `col-${size > 0 ? size : "auto"}`;
    }
  }
  return className;
}
function bytesToHumanReadable(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  const i = parseInt(String(Math.floor(Math.log(bytes) / Math.log(1024))));
  return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + " " + sizes[i];
}
function mapToCssModules(className = "") {
  return className.split(" ").map(c => c).join(" ");
}
function parameterizedString(...args) {
  const str = args[0];
  const params = args.filter((arg, index) => index !== 0);
  if (!str) return "";
  return str.replace(/%s[0-9]+/g, matchedStr => {
    const variableIndex = matchedStr.replace("%s", "") - 1;
    return params[variableIndex];
  });
}
function formatNumber(number, thousandsSeparator = ".", decimalSeparator = ",", decimalPlaces = 2) {
  const numberString = number.toFixed(decimalPlaces);
  const parts = numberString.split(".");
  let wholeNumber = parts[0];
  let decimalPart = parts[1];
  if (thousandsSeparator) {
    wholeNumber = wholeNumber.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
  }
  return wholeNumber + decimalSeparator + decimalPart;
}
function getDefaultHasIcon(type) {
  return type === Input.Mobile || type === Input.Phone || type === Input.Fax || type === Input.Money || type === Input.Percent || type === Input.Password || type === Input.Email || type === Input.Date || type === Input.Time || type === Input.Card || type === Input.FastSearch;
}
function getDefaultIconPosition(type) {
  switch (type) {
    case Input.Mobile:
      return config.icons.mobilePositionStart ? IconPosition.Start : IconPosition.End;
    case Input.Phone:
      return config.icons.phonePositionStart ? IconPosition.Start : IconPosition.End;
    case Input.Fax:
      return config.icons.faxPositionStart ? IconPosition.Start : IconPosition.End;
    case Input.Money:
      return config.icons.moneyPositionStart ? IconPosition.Start : IconPosition.End;
    case Input.Percent:
      return config.icons.percentPositionStart ? IconPosition.Start : IconPosition.End;
    case Input.Password:
      return config.icons.passwordPositionStart ? IconPosition.Start : IconPosition.End;
    case Input.Email:
      return config.icons.emailPositionStart ? IconPosition.Start : IconPosition.End;
    case Input.Date:
      return config.icons.datePositionStart ? IconPosition.Start : IconPosition.End;
    case Input.Time:
      return config.icons.timePositionStart ? IconPosition.Start : IconPosition.End;
    case Input.Card:
      return config.icons.cardPositionStart ? IconPosition.Start : IconPosition.End;
    case Input.FastSearch:
      return config.icons.fastSearchPositionStart ? IconPosition.Start : IconPosition.End;
  }
  return IconPosition.Start;
}
function getDefaultIcon(type) {
  switch (type) {
    case Input.Mobile:
      return config.icons.mobile;
    case Input.Phone:
      return config.icons.phone;
    case Input.Fax:
      return config.icons.fax;
    case Input.Money:
      return config.icons.money;
    case Input.Percent:
      return config.icons.percent;
    case Input.Password:
      return config.icons.password;
    case Input.Email:
      return config.icons.email;
    case Input.Date:
      return config.icons.date;
    case Input.Time:
      return config.icons.time;
    case Input.Card:
      return config.icons.card;
    case Input.FastSearch:
      return config.icons.fastSearch;
  }
  return "";
}
function getValueType(type) {
  switch (type) {
    case Input.Money:
    case Input.Percent:
    case Input.Decimal:
      return ValueType.Float;
    case Input.Integer:
      return ValueType.Integer;
    case Input.CheckBox:
      return ValueType.Boolean;
    default:
      return ValueType.String;
  }
}
function getValueAsType(type, value, separator = ",") {
  switch (type) {
    case ValueType.Float:
      {
        if (value) {
          try {
            let cleanValueString = String(value);
            if (cleanValueString.includes(",") && cleanValueString.includes(".")) {
              const periodIndex = cleanValueString.indexOf(".");
              const comaIndex = cleanValueString.indexOf(",");
              if (comaIndex < periodIndex) {
                cleanValueString = cleanValueString.replace(/,/g, "");
              } else {
                cleanValueString = cleanValueString.replace(".", "");
                cleanValueString = cleanValueString.replace(",", ".");
              }
            } else if (cleanValueString.includes(",")) {
              cleanValueString = cleanValueString.replace(",", ".");
            }
            return parseFloat(cleanValueString);
          } catch (error) {
            return 0;
          }
        } else {
          return 0.0;
        }
      }
    case ValueType.Integer:
      {
        if (value) {
          try {
            const integerString = String(value);
            if (integerString.includes(".") || integerString.includes(",")) {
              return parseInt(integerString.split(/[.,]/)[0]);
            } else {
              return parseInt(value);
            }
          } catch (error) {
            return 0;
          }
        } else {
          return 0;
        }
      }
    case ValueType.Flag:
      {
        if (value) {
          try {
            const values = String(value).split(separator);
            return values.reduce(function (total, flagValue) {
              return total + parseInt(flagValue, 10);
            }, 0);
          } catch (error) {
            return 0;
          }
        } else {
          return 0;
        }
      }
    case ValueType.Array:
      {
        if (value) {
          try {
            return String(value).split(separator);
          } catch (error) {
            return 0;
          }
        } else {
          return 0;
        }
      }
    case ValueType.Boolean:
      {
        if (value) {
          try {
            const boolValue = value.toString().toLowerCase();
            return boolValue === "true" || boolValue === "1" || boolValue === "yes" || boolValue === "y";
          } catch (error) {
            return false;
          }
        } else {
          return false;
        }
      }
    default:
      {
        // return (value ?? "").toString(); // or treat file input
        return value;
      }
  }
}
function getDateFormatted(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
function getEditorAttributes(props, isInvalid, editorValue, showPassword) {
  const {
    type = Input.Text,
    className,
    sm,
    md,
    lg,
    xl,
    xxl,
    size,
    children,
    id,
    name,
    createRow = false,
    title,
    checkBoxText = "",
    required = false,
    value,
    placeholder,
    hasTitle = true,
    titleBold,
    enabled = true,
    readOnly = false,
    inline = false,
    rows,
    input,
    characterCasing = CharacterCasing.Upper,
    max,
    min,
    maxDate,
    minDate,
    mask,
    getMaskedValue = false,
    hasIcon = getDefaultHasIcon(props.type),
    iconPosition = getDefaultIconPosition(props.type),
    appendIcon = getDefaultIcon(props.type),
    prependIcon = getDefaultIcon(props.type),
    invalid,
    tooltip,
    toolTipPosition = TooltipPosition.Top,
    invalidMessage,
    requiredMessage,
    accept,
    multiple = false,
    optionsId = config.optionsId,
    optionsDescription = config.optionsDescription,
    optionsFirstSelected = config.optionsFirstSelected,
    optionsNoneSelectedValue = config.optionsNoneSelectedValue,
    optionsNoneSelectedText = config.optionsNoneSelectedText,
    options,
    thousandsSeparator = config.thousandsSeparator,
    decimalSeparator = config.decimalSeparator,
    formState,
    dispatchFormState,
    validateOnBlur = config.validateOnBlur,
    validateOnChange = false,
    validateDefaultOnBlur = true,
    validateDefaultOnChange = true,
    validateDefaultOnSubmit = config.validateOnSubmit,
    customValidationOnBlur,
    customValidationOnChange,
    customValidationOnSubmit,
    onChange,
    onBlur,
    showValidationResultOnSubmit = config.validateOnSubmit,
    ...attributes
  } = props;
  let editorMask = mask;
  const editorName = name || id;
  const editorAttributes = {};
  editorAttributes["data-smarteditor"] = Input[type];
  if (id) {
    editorAttributes["id"] = id;
  }
  if (editorName) {
    editorAttributes["name"] = editorName;
  }
  switch (input) {
    case TextInput.Decimal:
      {
        editorAttributes["data-input"] = "number";
      }
      break;
    case TextInput.Integer:
      {
        editorAttributes["data-input"] = "integer";
      }
      break;
    case TextInput.Letter:
      {
        editorAttributes["data-input"] = "letter";
      }
      break;
  }
  switch (type) {
    case Input.Hidden:
      {
        editorAttributes["type"] = "hidden";
      }
      break;
    case Input.Radio:
      {
        editorAttributes["type"] = "radio";
        if (!editorName && !id) {
          const generatedName = `radio-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
          editorAttributes["name"] = generatedName;
        }
      }
      break;
    case Input.CheckBox:
      {
        editorAttributes["type"] = "checkbox";
        editorAttributes["value"] = "true";
      }
      break;
    case Input.Text:
      {
        editorAttributes["type"] = "text";
        switch (characterCasing) {
          case CharacterCasing.Upper:
            {
              editorAttributes["data-text"] = "upper";
            }
            break;
          case CharacterCasing.Lower:
            {
              editorAttributes["data-text"] = "lower";
            }
            break;
          case CharacterCasing.Normal:
            {
              editorAttributes["data-text"] = "normal";
            }
            break;
        }
      }
      break;
    case Input.Integer:
      {
        editorAttributes["type"] = "number";
      }
      break;
    case Input.Date:
      {
        editorAttributes["type"] = "date";
        if (minDate) {
          editorAttributes["min"] = typeof minDate === "string" ? minDate : getDateFormatted(minDate);
        }
        if (maxDate) {
          editorAttributes["max"] = typeof maxDate === "string" ? maxDate : getDateFormatted(maxDate);
        }
      }
      break;
    case Input.Time:
      {
        editorAttributes["type"] = "text";
        editorAttributes["data-autoclose"] = "true";
        editorAttributes["readOnly"] = "";
        editorAttributes["data-time"] = "true";
      }
      break;
    case Input.Password:
      {
        if (!showPassword) {
          editorAttributes["type"] = "password";
        } else {
          editorAttributes["type"] = "text";
        }
      }
      break;
    case Input.Email:
      {
        editorAttributes["type"] = "email";
      }
      break;
    case Input.File:
      {
        editorAttributes["type"] = "file";
        if (accept) {
          editorAttributes["accept"] = accept;
        }
        if (multiple) {
          editorAttributes["multiple"] = "multiple";
        }
      }
      break;
    case Input.LongText:
      {
        editorAttributes["rows"] = String(rows);
      }
      break;
    case Input.Mobile:
    case Input.Phone:
    case Input.Fax:
      {
        editorAttributes["type"] = "tel";
        if (!placeholder && config.phonePlaceholder) {
          editorAttributes["placeholder"] = config.phonePlaceholder;
        }
        if (!editorMask && config.phoneMask) {
          editorMask = config.phoneMask;
        }
      }
      break;
    case Input.Select:
      break;
    default:
      {
        editorAttributes["type"] = "text";
      }
      break;
  }
  if (readOnly) {
    editorAttributes["readOnly"] = "";
    editorAttributes["tabIndex"] = "-1";
  }
  if (!enabled) {
    editorAttributes["disabled"] = "disabled";
  }
  if (editorMask) {
    editorAttributes["data-mask"] = editorMask;
  }
  if (type !== Input.File) {
    if (min && min > 0) {
      if (type !== Input.Integer) {
        editorAttributes["minLength"] = String(min);
      } else {
        editorAttributes["min"] = String(min);
      }
    }
    if (max && max > 0) {
      let maskLength = (editorMask ?? "").length;
      if (type !== Input.Integer) {
        editorAttributes["maxLength"] = String(Math.max(max, maskLength));
      } else {
        editorAttributes["max"] = String(Math.max(max, maskLength));
      }
    }
    if (placeholder) {
      editorAttributes["placeholder"] = placeholder;
    }
  }
  // if (String(editorValue)) {
  //   switch (type) {
  //     case Input.CheckBox:
  //       {
  //         editorAttributes["defaultChecked"] =
  //           String(editorValue) === "true" || String(editorValue) === "1";
  //       }
  //       break;
  //     case Input.Select:
  //       {
  //         //     editorAttributes["defaultValue"] = editorValue;
  //       }
  //       break;
  //     default: {
  //       //  editorAttributes["defaultValue"] = editorValue;
  //       break;
  //     }
  //   }
  // }
  if (editorValue !== undefined && editorValue !== null) {
    editorAttributes["value"] = editorValue;
  } else {
    editorAttributes["value"] = "";
  }
  if (isInvalid) {
    editorAttributes["aria-invalid"] = "true";
  }
  return editorAttributes;
}
function removeMask(type, editorMask, maskedValue, thousandsSeparator = config.thousandsSeparator, decimalSeparator = config.decimalSeparator) {
  if (!editorMask && type !== Input.Money && type !== Input.Decimal && type !== Input.Percent) return maskedValue;
  if (type !== Input.Money && type !== Input.Decimal && type !== Input.Percent && !editorMask) {
    return maskedValue;
  }
  let unmaskedValue = "";
  if (type !== Input.Money && type !== Input.Decimal && type !== Input.Percent) {
    let maskIndex = 0;
    for (let i = 0; i < maskedValue.length; i++) {
      if (maskIndex >= editorMask.length) break;
      const maskChar = editorMask[maskIndex];
      if (maskChar === "0" || maskChar === "9" || maskChar === "A" || maskChar === "S") {
        unmaskedValue += maskedValue[i];
      }
      maskIndex++;
    }
  } else {
    const sanitizedString = maskedValue.replace(new RegExp(`\\${thousandsSeparator}`, "g"), "").replace(new RegExp(`\\${decimalSeparator}`), ".");
    const floatValue = parseFloat(sanitizedString);
    unmaskedValue = isNaN(floatValue) ? "0.00" : floatValue.toString();
  }
  return unmaskedValue;
}
function applyMask(type, editorMask, input, thousandsSeparator = config.thousandsSeparator, decimalSeparator = config.decimalSeparator, decimalPlaces = config.decimalPlaces) {
  if (!input || type !== Input.Text && type !== Input.Phone && type !== Input.Mobile && type !== Input.Fax && type !== Input.Money && type !== Input.Decimal && type !== Input.Percent) return "";
  if ((type === Input.Text || type === Input.Mobile || type === Input.Fax || type === Input.Phone) && !editorMask) {
    return "";
  }
  let maskedValue = "";
  if (type === Input.Text || type === Input.Mobile || type === Input.Fax || type === Input.Phone) {
    let maskIndex = 0;
    for (let i = 0; i < input.length; i++) {
      if (maskIndex >= editorMask.length) break;
      const maskChar = editorMask[maskIndex];
      if (maskChar === "0") {
        if (/\d/.test(input[i])) {
          maskedValue += input[i];
          maskIndex++;
        }
      } else if (maskChar === "9") {
        if (/\d/.test(input[i])) {
          maskedValue += input[i];
          maskIndex++;
        }
      } else if (maskChar === "A") {
        if (/[a-zA-Z0-9]/.test(input[i])) {
          maskedValue += input[i];
          maskIndex++;
        }
      } else if (maskChar === "S") {
        if (/[a-zA-Z]/.test(input[i])) {
          maskedValue += input[i];
          maskIndex++;
        }
      } else {
        maskedValue += maskChar;
        maskIndex++;
        if (input[i] !== maskChar) {
          i--;
        }
      }
    }
  } else if (type === Input.Money || type === Input.Decimal || type === Input.Percent) {
    if (typeof input === "number") {
      input = formatNumber(input, thousandsSeparator, decimalSeparator, decimalPlaces);
    }
    input = input.replace(/[^\d]/g, "");
    input = input.replace(/,+/g, ",");
    let numericValue = parseFloat(input);
    let wholeNumber = 0;
    let decimalNumber = 0;
    if (numericValue >= Math.pow(10, decimalPlaces)) {
      wholeNumber = parseInt(numericValue.toString().slice(0, -decimalPlaces));
      decimalNumber = parseInt(numericValue.toString().slice(-decimalPlaces));
    } else {
      decimalNumber = numericValue;
    }
    var number = parseFloat(`${wholeNumber}.${decimalNumber.toString().padStart(decimalPlaces, "0")}`);
    maskedValue = formatNumber(number, thousandsSeparator, decimalSeparator, decimalPlaces);
  }
  return maskedValue;
}
function validateEditorInputValue(currentValue, props, editorMask) {
  const {
    type = Input.Text,
    id,
    name,
    title,
    required = false,
    max,
    min,
    maxFiles,
    multiple,
    maxFileSize,
    requiredMessage
  } = props;
  const editorName = name || id;
  let list = [];
  if (!currentValue || currentValue instanceof FileList && currentValue.length === 0) {
    if (required) {
      list.push(new ValidationResult(editorName, title, ValidationMessage.Error, requiredMessage || config.messages.required, currentValue));
    }
  } else if ((type === Input.Text || type === Input.LongText) && (min && min > 0 || max && max > 0)) {
    const currentValueString = String(currentValue);
    let maskLength = (editorMask ?? "").length;
    let minCharacter = Number(min);
    let maxCharacter = Math.max(max, maskLength);
    if (min && min > 0 && max && max > 0) {
      if (currentValueString.length < minCharacter || currentValueString.length > maxCharacter) {
        list.push(new ValidationResult(editorName, title, ValidationMessage.Error, parameterizedString(config.messages.minMaxCharacters, minCharacter, maxCharacter), currentValue));
      }
    } else if (minCharacter > 0 && currentValueString.length < minCharacter) {
      list.push(new ValidationResult(editorName, title, ValidationMessage.Error, minCharacter > 1 ? parameterizedString(config.messages.minCharacters, minCharacter) : config.messages.minCharacter, currentValue));
    } else if (maxCharacter > 0 && currentValueString.length > maxCharacter) {
      list.push(new ValidationResult(editorName, title, ValidationMessage.Error, maxCharacter > 1 ? parameterizedString(config.messages.maxCharacters, maxCharacter) : config.messages.maxCharacter, currentValue));
    }
  } else if (type === Input.Integer && (min && min > 0 || max && max > 0)) {
    let currentValueNumber = parseInt(currentValue, 10);
    if (!isNaN(currentValueNumber)) {
      let minNumber = Number(min);
      let maxNumber = Number(max);
      if (min && min > 0 && max && max > 0) {
        if (currentValueNumber < minNumber || currentValueNumber > maxNumber) {
          list.push(new ValidationResult(editorName, title, ValidationMessage.Error, parameterizedString(config.messages.minMaxNumber, minNumber, maxNumber), currentValue));
        }
      } else if (minNumber > 0 && currentValueNumber < minNumber) {
        list.push(new ValidationResult(editorName, title, ValidationMessage.Error, parameterizedString(config.messages.minNumber, minNumber), currentValue));
      } else if (maxNumber > 0 && currentValueNumber > maxNumber) {
        list.push(new ValidationResult(editorName, title, ValidationMessage.Error, parameterizedString(config.messages.maxNumber, maxNumber), currentValue));
      }
    } else {
      list.push(new ValidationResult(editorName, title, ValidationMessage.Error, requiredMessage || config.messages.number, currentValue));
    }
  } else if (type === Input.Decimal && (min && min > 0 || max && max > 0)) {
    let currentValueNumber = parseFloat(currentValue);
    if (!isNaN(currentValueNumber)) {
      let minNumber = Number(min);
      let maxNumber = Number(max);
      if (min && min > 0 && max && max > 0) {
        if (currentValueNumber < minNumber || currentValueNumber > maxNumber) {
          list.push(new ValidationResult(editorName, title, ValidationMessage.Error, parameterizedString(config.messages.minMaxNumber, minNumber, maxNumber), currentValue));
        }
      } else if (minNumber > 0 && currentValueNumber < minNumber) {
        list.push(new ValidationResult(editorName, title, ValidationMessage.Error, parameterizedString(config.messages.minNumber, minNumber), currentValue));
      } else if (maxNumber > 0 && currentValueNumber > maxNumber) {
        list.push(new ValidationResult(editorName, title, ValidationMessage.Error, parameterizedString(config.messages.maxNumber, maxNumber), currentValue));
      }
    } else {
      list.push(new ValidationResult(editorName, title, ValidationMessage.Error, requiredMessage || config.messages.number, currentValue));
    }
  } else if (type === Input.Email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(String(currentValue))) {
      list.push(new ValidationResult(editorName, title, ValidationMessage.Error, config.messages.email, currentValue));
    }
  } else if (type === Input.File) {
    if (currentValue) {
      if (multiple && currentValue.length > maxFiles) {
        list.push(new ValidationResult(editorName, title, ValidationMessage.Error, parameterizedString(config.messages.totalFilesAllowedExceeded, maxFiles), currentValue));
      }
      for (let i = 0; i < currentValue.length; i++) {
        const file = currentValue[i];
        if (file.size > maxFileSize) {
          list.push(new ValidationResult(editorName, title, ValidationMessage.Error, parameterizedString(config.messages.fileSizeExceededMaxAllowed, file.name, bytesToHumanReadable(maxFileSize)), currentValue));
        }
      }
    }
  }
  return list;
}
function classNames(...args) {
  const classes = [];
  for (const arg of args) {
    if (!arg) continue;
    if (typeof arg === "string" || typeof arg === "number") {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = classNames(...arg);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (typeof arg === "object") {
      if (arg.toString !== Object.prototype.toString) {
        classes.push(arg.toString());
      } else {
        for (const key in arg) {
          if (arg.hasOwnProperty(key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }
  }
  return classes.join(" ");
}

const Row = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    className,
    style,
    tag: Tag = "div",
    children,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(className, "row"));
  return /*#__PURE__*/React.createElement(Tag, {
    ...attributes,
    className: classes,
    style,
    ref
  }, children);
});

const useSmartConfig = () => {
  // Inicializa uma vez quando o hook é usado
  useEffect(() => {
    configManager.initialize();
  }, []);
  return configManager.getConfig();
};

const Column = /*#__PURE__*/React.forwardRef((props, ref) => {
  const config = useSmartConfig();
  const {
    className,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    size,
    tag = config.columnTag,
    children,
    ...attributes
  } = props;
  let colClasses = "";
  if (size) {
    colClasses += getColumnSize(size);
  }
  if (xs) {
    colClasses += ` ${getColumnSize(xs, ScreenSize.XS)}`;
  }
  if (sm) {
    colClasses += ` ${getColumnSize(sm, ScreenSize.SM)}`;
  }
  if (md) {
    colClasses += ` ${getColumnSize(md, ScreenSize.MD)}`;
  }
  if (lg) {
    colClasses += ` ${getColumnSize(lg, ScreenSize.LG)}`;
  }
  if (xl) {
    colClasses += ` ${getColumnSize(xl, ScreenSize.XL)}`;
  }
  if (xxl) {
    colClasses += ` ${getColumnSize(xxl, ScreenSize.XXL)}`;
  }
  const classes = mapToCssModules(classNames(className, colClasses));
  return /*#__PURE__*/React.createElement(tag, {
    ...attributes,
    className: classes,
    ref
  }, children);
});

function Tooltip(props) {
  const {
    className,
    children,
    text,
    position = TooltipPosition.Top
  } = props;
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipElementRef = useRef(null);
  const config = useSmartConfig();
  const handleTooltipMouseEnter = () => {
    setShowTooltip(true);
  };
  const handleTooltipMouseLeave = () => {
    setShowTooltip(false);
  };
  const tooltipRef = useCallback(node => {
    if (node !== null) {
      const overlayRect = tooltipElementRef.current.getBoundingClientRect();
      node.getBoundingClientRect().width < config.toolTipWidth ? node.getBoundingClientRect().width : config.toolTipWidth;
      const tooltipRect = node.getBoundingClientRect();
      let top, left;
      switch (position) {
        case TooltipPosition.Top:
          top = overlayRect.top - tooltipRect.height - 10;
          left = overlayRect.left + overlayRect.width / 2 - tooltipRect.width / 2;
          break;
        case TooltipPosition.Bottom:
          top = overlayRect.top + overlayRect.height + 10;
          left = overlayRect.left + overlayRect.width / 2 - tooltipRect.width / 2;
          break;
        case TooltipPosition.Left:
          top = overlayRect.top + overlayRect.height / 2 - tooltipRect.height / 2;
          left = overlayRect.left - tooltipRect.width - 10;
          break;
        case TooltipPosition.Right:
          top = overlayRect.top + overlayRect.height / 2 - tooltipRect.height / 2;
          left = overlayRect.left + overlayRect.width + 10;
          break;
      }
      node.style.top = `${top}px`;
      node.style.left = `${left}px`;
      node.style.visibility = "visible";
    }
  }, [position]);
  let tooltipClass = position === TooltipPosition.Top ? config.classes.tooltipTop : position === TooltipPosition.Bottom ? config.classes.tooltipBottom : position === TooltipPosition.Left ? config.classes.tooltipLeft : config.classes.tooltipRight;
  tooltipClass = mapToCssModules(classNames(className, tooltipClass));
  const toolTipDiv = showTooltip ? jsx("div", {
    ref: tooltipRef,
    style: {
      visibility: "hidden"
    },
    className: tooltipClass,
    children: text
  }) : null;
  const childrenWithEvents = /*#__PURE__*/React.isValidElement(children) ? /*#__PURE__*/React.cloneElement(children, {
    onMouseEnter: handleTooltipMouseEnter,
    onMouseLeave: handleTooltipMouseLeave,
    ref: tooltipElementRef
  }) : children;
  return jsxs(Fragment, {
    children: [childrenWithEvents, toolTipDiv]
  });
}

function Label(props) {
  const {
    className,
    id,
    htmlFor,
    required = false,
    titleBold = false,
    title,
    tooltip,
    toolTipPosition = TooltipPosition.Top,
    horizontal = false,
    mode = LabelMode.Normal,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    size
  } = props;
  const config = useSmartConfig();
  let colClasses = "";
  if (size) {
    colClasses += getColumnSize(size);
  }
  if (xs) {
    colClasses += ` ${getColumnSize(xs, ScreenSize.XS)}`;
  }
  if (sm) {
    colClasses += ` ${getColumnSize(sm, ScreenSize.SM)}`;
  }
  if (md) {
    colClasses += ` ${getColumnSize(md, ScreenSize.MD)}`;
  }
  if (lg) {
    colClasses += ` ${getColumnSize(lg, ScreenSize.LG)}`;
  }
  if (xl) {
    colClasses += ` ${getColumnSize(xl, ScreenSize.XL)}`;
  }
  if (xxl) {
    colClasses += ` ${getColumnSize(xxl, ScreenSize.XXL)}`;
  }
  const labelAttributes = {};
  if (id) {
    let labelId = "lbl" + id;
    labelAttributes["id"] = labelId;
  }
  if (htmlFor) {
    labelAttributes["htmlFor"] = htmlFor;
  }
  labelAttributes["data-smarteditor"] = "label";
  let labelClasses;
  if (!horizontal) {
    switch (mode) {
      case LabelMode.CheckBox:
        labelClasses = config.classes.checkboxLabel;
        break;
      case LabelMode.RadioButton:
        labelClasses = config.classes.radioLabel;
        break;
      case LabelMode.Normal:
      default:
        labelClasses = config.classes.label;
        break;
    }
  } else {
    // Mantém a horizontalLabel para layout horizontal
    labelClasses = config.classes.horizontalLabel;
  }
  if (required) {
    labelClasses += ` ${config.classes.required}`;
  }
  if (titleBold) {
    labelClasses += ` ${config.classes.titleBold}`;
  }
  labelClasses = mapToCssModules(classNames(colClasses, labelClasses));
  let labelChildren = null;
  if (!tooltip) {
    labelChildren = String(title);
  } else {
    labelChildren = jsxs(Fragment, {
      children: [title, " ", jsx(Tooltip, {
        position: toolTipPosition,
        text: tooltip,
        children: jsx("i", {
          className: config.icons.tooltip
        })
      })]
    });
  }
  return /*#__PURE__*/React.createElement("label", {
    ...labelAttributes,
    className: labelClasses
  }, labelChildren);
}

function CheckboxGroup(props) {
  const {
    id,
    children,
    checkBoxText,
    tooltip,
    toolTipPosition,
    required,
    titleBold
  } = props;
  const config = useSmartConfig();
  const checkBoxLabel = jsx(Label, {
    id: id,
    htmlFor: id,
    title: checkBoxText,
    titleBold: titleBold,
    required: required,
    mode: LabelMode.CheckBox,
    tooltip: tooltip,
    toolTipPosition: toolTipPosition,
    className: config.classes.checkboxLabel
  });
  return /*#__PURE__*/React.createElement("div", {
    key: 0,
    className: config.classes.checkboxGroup
  }, children, checkBoxLabel);
}

function EditorInput(props) {
  const {
    inputType,
    type,
    editorAttributes,
    onBlurEvent,
    onChangeEvent,
    onPasteEvent,
    onKeyDownEvent,
    inputRef,
    className,
    checked,
    style,
    children,
    ...attributes
  } = props;
  const inputProps = {
    ...attributes,
    ...editorAttributes,
    className: type !== Input.Hidden ? className : null,
    onChange: type !== Input.Hidden ? onChangeEvent : null,
    onBlur: type !== Input.Hidden ? onBlurEvent : null,
    onPaste: type !== Input.Hidden ? onPasteEvent : null,
    onKeyDown: type !== Input.Hidden ? onKeyDownEvent : null,
    ref: inputRef,
    style: style
  };
  if (editorAttributes?.type === "checkbox") {
    inputProps.checked = !!checked;
    delete inputProps.defaultChecked;
    delete inputProps.value;
  }
  return /*#__PURE__*/React.createElement(inputType, inputProps, children);
}

function Radio(props) {
  const {
    id,
    options,
    optionsId,
    optionsDescription,
    optionsTooltip,
    optionsFirstSelected,
    optionsNoneSelectedValue,
    optionsNoneSelectedText,
    editorAttributes,
    value,
    inline,
    inputRadioRefs,
    onBlurEvent,
    onChangeEvent,
    inputRef,
    className,
    ...attributes
  } = props;
  const config = useSmartConfig();
  let editorValue = value;
  const radioLabelAttributes = {};
  const dataSource = options && typeof options[Symbol.iterator] === "function" ? [...options] : [];
  if (!optionsFirstSelected) {
    let noneSelectOption = {};
    noneSelectOption[optionsId] = optionsNoneSelectedValue;
    noneSelectOption[optionsDescription] = optionsNoneSelectedText;
    dataSource.unshift(noneSelectOption);
    if (!editorValue) {
      editorValue = optionsNoneSelectedValue;
    }
  } else {
    if (!editorValue && dataSource.length > 0) {
      editorValue = dataSource[0][optionsId];
    }
  }
  const innerChildren = dataSource.map((option, index) => {
    if (id) {
      radioLabelAttributes["htmlFor"] = `${id}-opt-${index + 1}`;
      editorAttributes["id"] = `${id}-opt-${index + 1}`;
    }
    editorAttributes["value"] = option[optionsId];
    editorAttributes["defaultChecked"] = option[optionsId] === editorValue;
    const radioLabel = jsx(Label, {
      id: id,
      htmlFor: `${id}-opt-${index + 1}`,
      title: option[optionsDescription],
      tooltip: option[optionsTooltip],
      mode: LabelMode.CheckBox,
      className: config.classes.radioLabel
    });
    /*#__PURE__*/React.createElement("label", {
      ...radioLabelAttributes,
      className: config.classes.radioLabel
    }, option[optionsDescription]);
    const radioRef = /*#__PURE__*/React.createRef();
    inputRadioRefs.current[index] = radioRef;
    const radioInput = /*#__PURE__*/React.createElement("input", {
      ...attributes,
      ...editorAttributes,
      className: className,
      onChange: onChangeEvent,
      onBlur: onBlurEvent,
      ref: radioRef
    });
    const radioGroup = /*#__PURE__*/React.createElement("div", {
      key: index,
      className: !inline ? config.classes.radioGroup : config.classes.radioGroupInLine
    }, radioInput, radioLabel);
    return radioGroup;
  });
  const optionsGroup = /*#__PURE__*/React.createElement("div", {
    className: config.classes.radioGroupList,
    ref: inputRef
  }, innerChildren);
  return optionsGroup;
}

const Select = props => {
  const {
    options,
    optionsId,
    optionsDescription,
    optionsGrouped = false,
    optionsGroup,
    optionGetDescription,
    optionGetGroup,
    optionsFirstSelected,
    optionsFilter,
    optionsMultiple,
    optionsLimiteDescriptionSelected,
    optionsMultipleSeparatorValue,
    optionsMultipleSeparatorDescription,
    optionsNoneSelectedValue,
    optionsNoneSelectedText,
    editorAttributes,
    placeholder,
    searchPlaceholder,
    value,
    enabled = true,
    readOnly = false,
    optionRenderer,
    onBlurEvent,
    onChangeEvent,
    inputRef,
    className,
    children,
    ...attributes
  } = props;
  const configSmartR = useSmartConfig();
  // Se não tem filter, não é multiple, não tem render customizado e não é agrupado,
  // renderiza o select nativo simples
  const shouldUseNativeSelect = !optionsFilter && !optionsMultiple && !optionRenderer && !optionsGrouped;
  // Verifica se o componente está desabilitado ou somente leitura
  const isDisabled = !enabled || readOnly;
  if (shouldUseNativeSelect) {
    return jsx(EditorInput, {
      type: Input.Select,
      inputType: "select",
      editorAttributes: {
        ...editorAttributes,
        disabled: isDisabled,
        readOnly: readOnly
      },
      onBlurEvent: isDisabled ? undefined : onBlurEvent,
      onChangeEvent: isDisabled ? undefined : onChangeEvent,
      inputRef: inputRef,
      children: children,
      className: classNames(className, {
        [configSmartR.classes.controlGroupDisabledControl]: isDisabled
      })
    });
  }
  // Código do select customizado continua aqui...
  const [filterState, setFilterState] = useState({
    isOpen: false,
    searchText: ""
  });
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const searchInputRef = useRef(null);
  const {
    isOpen,
    searchText
  } = filterState;
  let innerChildren = null;
  let editorValue = value;
  let editorDescription = null;
  let selecteds = [];
  let selectLabelText = configSmartR.texts.optionsMultipleSelectAll;
  useEffect(() => {
    if (isDisabled) {
      setFilterState(prevState => ({
        ...prevState,
        isOpen: false,
        searchText: ""
      }));
      return;
    }
    const handleClickOutside = event => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setFilterState(prevState => ({
          ...prevState,
          searchText: "",
          isOpen: false
        }));
      }
    };
    if (filterState.isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      if (containerRef.current) {
        const width = containerRef.current.getBoundingClientRect().width;
        setContainerWidth(width);
      }
      if (optionsFilter) {
        searchInputRef.current.focus();
      }
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterState.isOpen, isDisabled]);
  const toggleDropdown = () => {
    if (isDisabled) return;
    setFilterState(prevState => ({
      ...prevState,
      isOpen: !prevState.isOpen
    }));
  };
  const handleSearchChange = e => {
    if (isDisabled) return;
    setFilterState(prevState => ({
      ...prevState,
      searchText: e.target.value
    }));
  };
  const selectAllClick = select => {
    if (isDisabled) return;
    if (select) {
      selecteds = options.map(item => String(item[optionsId]));
    } else {
      selecteds = [];
    }
    editorValue = selecteds.join(optionsMultipleSeparatorValue);
    inputRef.current.value = editorValue;
    onChangeEvent({
      target: inputRef.current
    });
  };
  const handleOptionClick = (option, event) => {
    if (isDisabled) return;
    event.stopPropagation();
    editorValue = option[optionsId];
    editorDescription = option[optionsDescription];
    setFilterState(prevState => ({
      ...prevState,
      isOpen: !optionsMultiple ? false : true,
      searchText: ""
    }));
    let clickedValue = option[optionsId];
    if (optionsMultiple) {
      if (!selecteds.includes(String(clickedValue))) {
        selecteds.push(String(clickedValue));
      } else {
        selecteds = selecteds.filter(Filter => Filter !== String(clickedValue));
      }
      clickedValue = selecteds.join(optionsMultipleSeparatorValue);
    }
    inputRef.current.value = clickedValue;
    onChangeEvent({
      target: inputRef.current
    });
  };
  // Função para obter o grupo de uma opção
  const getOptionGroup = option => {
    if (optionsGroup && option[optionsGroup]) {
      return option[optionsGroup];
    }
    if (optionGetGroup) {
      return optionGetGroup(option);
    }
    return "";
  };
  if (options) {
    const dataSource = options && typeof options[Symbol.iterator] === "function" ? [...options] : [];
    if (!optionsMultiple) {
      if (!optionsFirstSelected) {
        let noneSelectOption = {};
        noneSelectOption[optionsId] = optionsNoneSelectedValue;
        noneSelectOption[optionsDescription] = optionsNoneSelectedText;
        dataSource.unshift(noneSelectOption);
        if (!editorValue) {
          editorValue = optionsNoneSelectedValue;
        }
      } else {
        if (!editorValue && dataSource.length > 0) {
          editorValue = dataSource[0][optionsId];
        }
      }
      const option = dataSource.find(Filter => Filter[optionsId] === editorValue);
      if (option) {
        editorDescription = optionGetDescription ? optionGetDescription(option) : option[optionsDescription];
      }
    } else {
      if (editorValue) {
        if (!Array.isArray(editorValue)) {
          if (typeof editorValue === "string") {
            if (editorValue.includes(optionsMultipleSeparatorValue)) {
              selecteds = String(editorValue).split(optionsMultipleSeparatorValue);
            } else {
              const option = dataSource.find(Filter => Filter[optionsId] === editorValue);
              if (option) {
                selecteds = [editorValue];
              } else {
                const editorNumber = parseInt(editorValue);
                if (!isNaN(editorNumber)) {
                  dataSource.forEach(item => {
                    if ((editorNumber & parseInt(item[optionsId])) === parseInt(item[optionsId])) {
                      selecteds.push(String(item[optionsId]));
                    }
                  });
                }
              }
            }
          } else if (typeof editorValue === "number") {
            dataSource.forEach(item => {
              if ((editorValue & parseInt(item[optionsId])) === parseInt(item[optionsId])) {
                selecteds.push(String(item[optionsId]));
              }
            });
          }
        } else {
          selecteds = editorValue.map(String);
        }
      } else {
        selecteds = [];
      }
      if (selecteds.length === 0) {
        selectLabelText = configSmartR.texts.optionsMultipleSelectAll;
        editorDescription = configSmartR.texts.optionsMultipleNoneSelected;
      } else if (selecteds.length === dataSource.length) {
        selectLabelText = configSmartR.texts.optionsMultipleSelectNone;
      }
      if (selecteds.length > 0) {
        if (selecteds.length <= optionsLimiteDescriptionSelected) {
          const descriptions = options.filter(item => selecteds.includes(String(item[optionsId]))).map(item => item[optionsDescription]);
          editorDescription = descriptions.join(configSmartR.optionsMultipleSeparatorDescription);
        } else {
          editorDescription = `${selecteds.length} ${configSmartR.texts.optionsMultipleSelected}`;
        }
      }
    }
    const items = dataSource.map((option, index) => {
      // Se houver optionRenderer, não executa optionGetDescription
      if (optionRenderer) return option;
      option[optionsDescription] = !optionGetDescription || index === 0 && optionGetDescription && !optionsFirstSelected ? option[optionsDescription] : optionGetDescription(option);
      return option;
    });
    // Filtra os itens baseado no texto de busca
    const filteredItems = items.filter(option => option[optionsDescription].toLowerCase().includes(searchText.toLowerCase()));
    // Lógica para opções agrupadas
    if (optionsGrouped) {
      const groupedOptions = new Map();
      // Agrupar as opções filtradas
      filteredItems.forEach(option => {
        const group = getOptionGroup(option);
        if (!groupedOptions.has(group)) {
          groupedOptions.set(group, []);
        }
        groupedOptions.get(group).push(option);
      });
      // Criar elementos React agrupados
      innerChildren = Array.from(groupedOptions.entries()).map(([groupName, groupOptions], groupIndex) => {
        const optionElements = groupOptions.map((option, optionIndex) => {
          const isSelected = selecteds.includes(String(option[optionsId]));
          // Se optionRenderer foi fornecido, use-o
          if (option[optionsId] && optionRenderer) {
            return jsx("div", {
              className: classNames(configSmartR.classes.select.option, {
                [configSmartR.classes.select.optionDisabled]: isDisabled
              }),
              onClick: isDisabled ? undefined : e => handleOptionClick(option, e),
              children: optionRenderer(option, isSelected, searchText)
            }, `group-${groupIndex}-option-${optionIndex}`);
          }
          // Renderização padrão para opções agrupadas
          const optionText = option[optionsDescription];
          const startIndex = optionText.toLowerCase().indexOf(searchText.toLowerCase());
          const endIndex = startIndex + searchText.length;
          return jsxs("div", {
            className: classNames(configSmartR.classes.select.option, {
              [configSmartR.classes.select.optionDisabled]: isDisabled
            }),
            onClick: isDisabled ? undefined : e => handleOptionClick(option, e),
            children: [optionsMultiple ? jsx("input", {
              "data-smarteditor": "CheckBox",
              type: "checkbox",
              className: configSmartR.classes.checkbox,
              checked: isSelected,
              value: option[optionsId],
              disabled: isDisabled
            }) : null, jsx("span", {
              children: startIndex >= 0 ? jsxs(Fragment, {
                children: [optionText.substring(0, startIndex), jsx("strong", {
                  children: optionText.substring(startIndex, endIndex)
                }), optionText.substring(endIndex)]
              }) : optionText
            })]
          }, `group-${groupIndex}-option-${optionIndex}`);
        });
        return jsxs("div", {
          children: [jsx("div", {
            className: configSmartR.classes.select.groupHeader,
            children: groupName
          }), optionElements]
        }, `group-${groupIndex}`);
      });
    } else {
      // Lógica original para opções não agrupadas
      innerChildren = filteredItems.map((option, index) => {
        const isSelected = selecteds.includes(String(option[optionsId]));
        // Se optionRenderer foi fornecido, use-o
        if (option[optionsId] && optionRenderer) {
          return jsx("div", {
            className: classNames(configSmartR.classes.select.option, {
              [configSmartR.classes.select.optionDisabled]: isDisabled
            }),
            onClick: isDisabled ? undefined : e => handleOptionClick(option, e),
            children: optionRenderer(option, isSelected, searchText)
          }, index);
        }
        // Renderização padrão (código original)
        const optionText = option[optionsDescription];
        const startIndex = optionText.toLowerCase().indexOf(searchText.toLowerCase());
        const endIndex = startIndex + searchText.length;
        return jsxs("div", {
          className: classNames(configSmartR.classes.select.option, {
            [configSmartR.classes.select.optionDisabled]: isDisabled
          }),
          onClick: isDisabled ? undefined : e => handleOptionClick(option, e),
          children: [optionsMultiple ? jsx("input", {
            "data-smarteditor": "CheckBox",
            type: "checkbox",
            className: configSmartR.classes.checkbox,
            checked: isSelected,
            value: option[optionsId],
            disabled: isDisabled
          }) : null, jsx("span", {
            children: startIndex >= 0 ? jsxs(Fragment, {
              children: [optionText.substring(0, startIndex), jsx("strong", {
                children: optionText.substring(startIndex, endIndex)
              }), optionText.substring(endIndex)]
            }) : optionText
          })]
        }, index);
      });
    }
  }
  const classes = mapToCssModules(classNames(className, configSmartR.classes.select.container, {
    [configSmartR.classes.controlGroupDisabledControl]: isDisabled
  }));
  return jsxs("div", {
    ref: containerRef,
    tabIndex: isDisabled ? -1 : 0,
    className: classes,
    onClick: isDisabled ? undefined : toggleDropdown,
    children: [jsx(EditorInput, {
      type: Input.Hidden,
      inputType: "input",
      editorAttributes: {
        ...editorAttributes,
        type: "hidden",
        disabled: isDisabled,
        readOnly: readOnly
      },
      inputRef: inputRef
    }), jsxs("div", {
      className: `${configSmartR.classes.select.innerContainer} ${filterState.isOpen ? "open" : ""}`,
      children: [jsx("div", {
        className: `${configSmartR.classes.select.optionSelectedInput} ${filterState.isOpen ? "open" : ""}`,
        children: editorDescription
      }), jsxs("div", {
        className: configSmartR.classes.select.optionsContainer,
        style: {
          width: `${containerWidth}px`
        },
        children: [optionsMultiple && !isDisabled ? jsx("a", {
          href: "#!",
          onClick: e => {
            e.preventDefault();
            selectAllClick(selecteds.length < options.length);
          },
          className: configSmartR.classes.select.selectAll,
          children: selectLabelText
        }) : null, optionsFilter && !isDisabled ? jsx("input", {
          type: "text",
          className: configSmartR.classes.select.searchInput,
          value: searchText,
          ref: searchInputRef,
          onChange: handleSearchChange,
          placeholder: searchPlaceholder,
          disabled: isDisabled
        }) : null, jsx("div", {
          className: configSmartR.classes.select.dropdown,
          children: innerChildren
        })]
      })]
    })]
  });
};

function File(props) {
  const config = useSmartConfig();
  const {
    id,
    name,
    placeholder = config.filePlaceholderText,
    editorAttributes,
    maxFilesPlaceholder = config.maxFilesPlaceholder,
    fileUrlDownload,
    fileDownloadName,
    onDownloadFileClick,
    onDeleteFileClick,
    onBlurEvent,
    onChangeEvent,
    inputRef,
    className,
    ...attributes
  } = props;
  const [fileName, setFileName] = useState();
  const inputUploadRef = useRef(null);
  const finalInputRef = inputRef || inputUploadRef;
  const handleFileChange = async event => {
    const files = event.target.files;
    let fileNames;
    if (files.length > maxFilesPlaceholder) {
      fileNames = `${files.length} ${config.texts.totalSelectedFiles}`;
    } else {
      const fileNamesArray = [];
      for (let i = 0; i < files.length; i++) {
        fileNamesArray.push(files[i].name);
      }
      fileNames = fileNamesArray.join(", ");
    }
    setFileName(fileNames);
    if (onChangeEvent) {
      onChangeEvent(event);
    }
  };
  const handleUploadClick = () => {
    finalInputRef.current.click();
  };
  function extractFileName(url) {
    const lastSlashIndex = url.lastIndexOf("/");
    const fileName = url.substring(lastSlashIndex + 1);
    return fileName;
  }
  const handleBlurEvent = async event => {
    if (onBlurEvent) {
      let files;
      if (finalInputRef && finalInputRef.current && finalInputRef.current instanceof HTMLInputElement) {
        files = finalInputRef.current.files;
      }
      const event = {
        target: {
          name: name,
          files: files
        }
      };
      onBlurEvent(event);
    }
  };
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = fileUrlDownload;
    link.target = "_blank";
    let urlFileName = fileDownloadName;
    if (!fileDownloadName) {
      urlFileName = extractFileName(fileUrlDownload);
    }
    if (urlFileName) {
      link.download = urlFileName;
    }
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDeleteClick = () => {
    setFileName("");
    if (finalInputRef && finalInputRef.current) {
      finalInputRef.current.value = "";
    }
    const event = {
      target: {
        name: name,
        files: []
      }
    };
    handleFileChange(event);
  };
  const inputAttributes = {};
  inputAttributes["type"] = "text";
  inputAttributes["readOnly"] = "readOnly";
  if (placeholder) {
    inputAttributes["placeholder"] = placeholder;
  }
  inputAttributes["defaultValue"] = fileName;
  const input = jsx(EditorInput, {
    type: Input.Text,
    inputType: "input",
    editorAttributes: inputAttributes,
    onBlurEvent: handleBlurEvent,
    className: className
  });
  const {
    value,
    ...restEditorAttributes
  } = editorAttributes;
  const inputUpload = jsx(EditorInput, {
    type: Input.File,
    inputType: "input",
    editorAttributes: restEditorAttributes,
    inputRef: finalInputRef,
    onChangeEvent: handleFileChange,
    style: {
      display: "none"
    }
  });
  const deleteIconComponent = onDeleteFileClick || fileName ? jsx(Tooltip, {
    position: TooltipPosition.Top,
    text: config.texts.deleteFileTooltip,
    children: jsx("div", {
      className: config.classes.inputGroupAppendFile,
      onClick: fileName ? handleDeleteClick : onDeleteFileClick,
      children: jsx("span", {
        className: config.classes.inputGroupFileDeleteIcon,
        children: jsx("i", {
          className: config.icons.delete
        })
      })
    })
  }) : null;
  const downloadIconComponent = fileUrlDownload || onDownloadFileClick ? jsx(Tooltip, {
    position: TooltipPosition.Top,
    text: config.texts.downloadFileTooltip,
    children: jsx("div", {
      className: config.classes.inputGroupAppendFile,
      onClick: onDownloadFileClick ?? handleDownloadClick,
      children: jsx("span", {
        className: config.classes.inputGroupFileDownloadIcon,
        children: jsx("i", {
          className: config.icons.download
        })
      })
    })
  }) : null;
  const uploadIconComponent = jsx(Tooltip, {
    position: TooltipPosition.Top,
    text: config.texts.uploadFileTooltip,
    children: jsx("div", {
      className: config.classes.inputGroupAppendFile,
      onClick: handleUploadClick,
      children: jsx("span", {
        className: config.classes.inputGroupFileUploadIcon,
        children: jsx("i", {
          className: config.icons.upload
        })
      })
    })
  });
  const optionsGroup = /*#__PURE__*/React.createElement("div", {
    className: config.classes.inputGroup
  }, input, deleteIconComponent, downloadIconComponent, uploadIconComponent, inputUpload);
  return optionsGroup;
}

function EditorButton(props) {
  const config = useSmartConfig();
  const {
    className,
    tag = config.editorButtonTag,
    icon,
    text,
    tooltip,
    toolTipPosition = TooltipPosition.Top,
    onClick,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(config.classes.inputGroupButton, className));
  const innerContent = jsxs(Fragment, {
    children: [icon && jsx("i", {
      className: icon
    }), text]
  });
  let content = /*#__PURE__*/React.createElement(tag, {
    ...attributes,
    className: classes,
    onClick: onClick,
    ref: {}
  }, innerContent);
  if (tooltip) {
    content = jsx(Tooltip, {
      position: toolTipPosition,
      text: tooltip,
      children: content
    });
  }
  return jsx(Fragment, {
    children: jsx("div", {
      className: config.classes.inputGroupAppendButton,
      children: content
    })
  });
}

const Editor = /*#__PURE__*/forwardRef((props, ref) => {
  const config = useSmartConfig();
  const {
    type = Input.Text,
    className,
    sm,
    md,
    lg,
    xl,
    xxl,
    size,
    labelSm,
    labelMd,
    labelLg,
    labelXl,
    labelXxl,
    labelSize,
    children,
    id,
    name,
    createRow = false,
    createColumn = true,
    title,
    checkBoxText = "",
    required = false,
    value,
    placeholder,
    hasTitle = true,
    titleBold,
    enabled = true,
    readOnly = false,
    inline = false,
    horizontal = false,
    rows,
    input,
    valueType = getValueType(props.type),
    characterCasing = CharacterCasing.Upper,
    maxFileSize,
    maxFilesPlaceholder,
    max,
    min,
    minDate,
    maxDate,
    mask,
    getMaskedValue = false,
    enableShowPassword = config.showPasswordIcon,
    showPasswordIconPosition = IconPosition.End,
    showPasswordIcon = config.icons.showPassword,
    hidePasswordIcon = config.icons.hidePassword,
    hasIcon = getDefaultHasIcon(props.type),
    iconPosition = getDefaultIconPosition(props.type),
    appendIcon = getDefaultIcon(props.type),
    prependIcon = getDefaultIcon(props.type),
    invalid,
    tooltip,
    toolTipPosition = TooltipPosition.Top,
    note,
    noteClassName,
    invalidMessage,
    requiredMessage,
    accept,
    fileUrlDownload,
    fileDownloadName,
    prependButtons,
    appendButtons,
    optionsId = config.optionsId,
    optionsDescription = config.optionsDescription,
    optionsToolTip = config.optionsToolTip,
    optionsGroup = config.optionsGroup,
    optionGetDescription,
    optionGetGroup,
    optionsFirstSelected = config.optionsFirstSelected,
    optionsNoneSelectedValue = config.optionsNoneSelectedValue,
    optionsNoneSelectedText = config.optionsNoneSelectedText,
    options,
    optionsFilter = false,
    optionsGrouped = false,
    optionsMultiple = false,
    optionsMultipleSeparatorValue = config.optionsMultipleSeparatorValue,
    optionsMultipleSeparatorDescription = config.optionsMultipleSeparatorDescription,
    optionsLimiteDescriptionSelected = config.optionsLimiteDescriptionSelected,
    optionsFilterPlaceholder = config.texts.optionsFilterPlaceholder,
    optionRenderer,
    thousandsSeparator = config.thousandsSeparator,
    decimalSeparator = config.decimalSeparator,
    decimalPlaces = config.decimalPlaces,
    skipSubmit = false,
    state,
    dispatchState,
    formState,
    dispatchFormState,
    listFormState,
    listFormIndex,
    dispatchListFormState,
    validateOnBlur = config.validateOnBlur,
    validateOnChange = false,
    validateDefaultOnBlur = true,
    validateDefaultOnChange = true,
    validateDefaultOnSubmit = config.validateOnSubmit,
    customValidationOnBlur,
    customValidationOnChange,
    customValidationOnSubmit,
    onDownloadFileClick,
    onDeleteFileClick,
    onChange,
    onBlur,
    showValidationResultOnSubmit = config.validateOnSubmit,
    ...attributes
  } = props;
  const inputRadioRefs = useRef([]);
  const inputRef = useRef(null);
  const [validationList, setValidationList] = useState();
  const [isInvalid, setIsInvalid] = useState(invalid);
  const [showPassword, setShowPassword] = useState(false);
  const editorName = name || id;
  let editorValue = value;
  let editorMask = mask;
  if (!editorValue) {
    editorValue = getStateValue();
  }
  function getStateValue() {
    let value;
    if (editorName) {
      if (formState) {
        value = formState[editorName];
      } else if (listFormState && listFormIndex !== undefined && listFormIndex < listFormState.length) {
        value = listFormState[listFormIndex][editorName];
      }
    } else if (state && state !== null && state !== undefined) {
      value = state;
    }
    return value;
  }
  function setStateValue(inputName, value) {
    // Atualização de um único formulário
    if (inputName && formState && dispatchFormState) {
      dispatchFormState(prevState => {
        const newState = {
          ...prevState,
          [inputName]: value
        };
        return newState;
      });
    }
    // Atualização de uma lista de formulários
    else if (listFormState && dispatchListFormState && listFormIndex !== undefined && listFormIndex < listFormState.length) {
      const newState = listFormState.map((item, index) => {
        if (index === listFormIndex) {
          const updatedItem = {
            ...item,
            [inputName]: value
          };
          return updatedItem;
        }
        return item;
      });
      dispatchListFormState(newState);
    }
    // Atualização de estado genérico
    else if (dispatchState) {
      dispatchState(prevState => {
        return value;
      });
    }
  }
  function validateInput(currentValue) {
    let list = validateEditorInputValue(currentValue, props, editorMask);
    setIsInvalid(list.length > 0);
    return list;
  }
  function getName() {
    return editorName;
  }
  function getId() {
    return id;
  }
  function getSubmit() {
    return !skipSubmit;
  }
  function getTitle() {
    return title;
  }
  function setErrorList(list) {
    setValidationList(list);
    setIsInvalid(list.length > 0);
  }
  function getValue() {
    let currentValue;
    if (inputRef?.current) {
      switch (type) {
        case Input.Radio:
          {
            for (const ref of inputRadioRefs.current) {
              if (ref.current instanceof HTMLInputElement) {
                if (ref.current.checked) {
                  currentValue = ref.current.value;
                }
              }
            }
          }
          break;
        case Input.CheckBox:
          {
            if (inputRef.current instanceof HTMLInputElement) {
              currentValue = inputRef?.current?.checked;
            }
          }
          break;
        case Input.File:
          {
            if (inputRef.current instanceof HTMLInputElement) {
              currentValue = inputRef?.current?.files;
            }
          }
          break;
        default:
          {
            currentValue = inputRef?.current?.value;
          }
          break;
      }
    } else {
      currentValue = getStateValue();
    }
    if ((editorMask || type === Input.Money || type === Input.Decimal || type === Input.Percent) && currentValue && !getMaskedValue) {
      currentValue = removeMask(type, editorMask, currentValue, thousandsSeparator, decimalSeparator);
    }
    return getValueAsType(valueType, currentValue, optionsMultipleSeparatorValue);
  }
  async function validate() {
    let list = [];
    const currentValue = getValue();
    if (validateDefaultOnSubmit) {
      list = validateInput(currentValue);
    }
    if (customValidationOnSubmit) {
      const customValidationResults = await customValidationOnSubmit(currentValue);
      list = [...list, ...customValidationResults];
    }
    if (showValidationResultOnSubmit) {
      setValidationList(list);
      setIsInvalid(list.length > 0);
    }
    return Promise.resolve(list);
  }
  useImperativeHandle(ref, () => ({
    validate,
    getName,
    getId,
    getTitle,
    getValue,
    getSubmit,
    setErrorList
  }));
  const handleInputChange = useCallback(async event => {
    const {
      name,
      value,
      files,
      type: inputCheckedType,
      checked
    } = event.target;
    let newValue = files ?? value;
    // Se o tipo for checkbox ou radio, usa o valor de "checked"
    if (inputCheckedType === "checkbox") {
      newValue = checked;
    }
    // Aplica máscara se for necessário e o tipo for diferente de file, checkbox ou radio
    if ((editorMask || type === Input.Money || type === Input.Decimal || type === Input.Percent) && type !== Input.File && type !== Input.CheckBox && type !== Input.Radio) {
      newValue = applyMask(type, editorMask, newValue, thousandsSeparator, decimalSeparator, decimalPlaces);
    }
    // Seta o valor no input ref, exceto se for file, checkbox ou radio
    if (inputRef.current && type !== Input.File && type !== Input.CheckBox && type !== Input.Radio) {
      inputRef.current.value = newValue || "";
    }
    // Conversão de valor conforme o tipo
    const changedValueType = getValueAsType(valueType, newValue, optionsMultipleSeparatorValue);
    // Validação, se necessário
    if (validateOnChange) {
      let list = [];
      if (validateDefaultOnChange) {
        list = validateInput(changedValueType);
      }
      if (customValidationOnChange) {
        const customValidationResults = await customValidationOnChange(changedValueType);
        list = [...list, ...customValidationResults];
      }
      setValidationList(list);
      setIsInvalid(list.length > 0);
    }
    // Remove a máscara se necessário
    if (editorMask && newValue && !getMaskedValue && type !== Input.File && type !== Input.CheckBox && type !== Input.Radio) {
      newValue = removeMask(type, editorMask, newValue, thousandsSeparator, decimalSeparator);
    }
    const stateValue = getValueAsType(valueType, newValue, optionsMultipleSeparatorValue);
    setStateValue(name, stateValue);
    if (onChange) {
      onChange(event, getValueAsType(valueType, newValue, optionsMultipleSeparatorValue), id, name, type);
    }
  }, [validateOnChange, onChange, customValidationOnChange, validateDefaultOnChange, editorMask, formState, state, listFormState]);
  const handleInputBlur = useCallback(async event => {
    const {
      name,
      value,
      files
    } = event.target;
    let newValue = files ?? value;
    let validationValue = newValue;
    if (validateOnBlur) {
      if (editorMask && validationValue && !getMaskedValue) {
        validationValue = removeMask(type, editorMask, validationValue, thousandsSeparator, decimalSeparator);
      }
      validationValue = getValueAsType(valueType, validationValue, optionsMultipleSeparatorValue);
      let list = [];
      if (validateDefaultOnBlur) {
        list = validateInput(validationValue);
      }
      if (customValidationOnBlur) {
        const customValidationResults = await customValidationOnBlur(validationValue);
        list = [...list, ...customValidationResults];
      }
      setValidationList(list);
      setIsInvalid(list.length > 0);
      list.length === 0;
    }
    if (onBlur) {
      onBlur(event, validationValue, id, name, type);
    }
  }, [validateOnBlur, editorMask, customValidationOnBlur, validateDefaultOnBlur, formState, state, listFormState, onBlur]);
  // Callback for handling key down events on text inputs.
  // This method validates the key pressed based on the expected input type.
  const handleInputKeyDown = useCallback(event => {
    // Only process if the input is of type 'Input.Text' and a specific text input type is defined.
    if (type !== Input.Text || input === undefined) return;
    // Define allowed control keys that should always be permitted (e.g., navigation and editing keys).
    const allowedControlKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab", "Enter", "Escape", "Home", "End"];
    // If CTRL is pressed, allow the key combination (this enables CTRL+V, CTRL+C, etc.)
    if (event.ctrlKey) return;
    // Switch based on the specific text input type to enforce different validation rules.
    switch (input) {
      case TextInput.Integer:
        {
          // For Integer input: allow only digits (0-9).
          if (allowedControlKeys.includes(event.key)) return;
          if (!/^[0-9]$/.test(event.key)) {
            event.preventDefault();
          }
          break;
        }
      case TextInput.Decimal:
        {
          // For Decimal input: allow only digits and one decimal point.
          if (allowedControlKeys.includes(event.key)) return;
          if (event.key === ".") {
            // Prevent multiple decimal points.
            if (event.currentTarget.value.includes(".")) {
              event.preventDefault();
            }
            return;
          }
          if (!/^[0-9]$/.test(event.key)) {
            event.preventDefault();
          }
          break;
        }
      case TextInput.Letter:
        {
          // For Letter input: allow only alphabet characters (A-Z and a-z).
          if (allowedControlKeys.includes(event.key)) return;
          if (!/^[a-zA-Z]$/.test(event.key)) {
            event.preventDefault();
          }
          break;
        }
      case TextInput.AlphaNumeric:
        {
          // For AlphaNumeric input: allow only letters and digits.
          if (allowedControlKeys.includes(event.key)) return;
          if (!/^[a-zA-Z0-9]$/.test(event.key)) {
            event.preventDefault();
          }
          break;
        }
    }
  }, [type, input]);
  // Callback for handling paste events on text inputs.
  // This method validates the pasted text based on the expected input type before it is inserted.
  const handleInputPaste = useCallback(event => {
    // Only process if the input is of type 'Input.Text' and a specific text input type is defined.
    if (type !== Input.Text || input === undefined) return;
    // Retrieve the text being pasted from the clipboard.
    const pastedText = event.clipboardData.getData("text");
    // Switch based on the specific text input type to enforce different validation rules for pasted content.
    switch (input) {
      case TextInput.Integer:
        {
          // For Integer input: allow only pasted text containing digits (0-9).
          if (!/^[0-9]+$/.test(pastedText)) {
            event.preventDefault();
          }
          break;
        }
      case TextInput.Decimal:
        {
          // For Decimal input: allow only pasted text that is a valid decimal number.
          // This regex allows an optional sequence of digits, an optional decimal point, and one or more digits.
          if (!/^(?:[0-9]*\.?[0-9]+)$/.test(pastedText)) {
            event.preventDefault();
          }
          break;
        }
      case TextInput.Letter:
        {
          // For Letter input: allow only pasted text containing alphabet characters.
          if (!/^[a-zA-Z]+$/.test(pastedText)) {
            event.preventDefault();
          }
          break;
        }
      case TextInput.AlphaNumeric:
        {
          // For AlphaNumeric input: allow only pasted text containing letters and digits.
          if (!/^[a-zA-Z0-9]+$/.test(pastedText)) {
            event.preventDefault();
          }
          break;
        }
    }
  }, [type, input]);
  const onShowPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  let editorInput = null;
  let titleLabel = null;
  let noteLabel = null;
  let inputType = "input";
  let classes = config.classes.input;
  if (hasTitle && title) {
    titleLabel = jsx(Label, {
      id: id,
      htmlFor: id,
      title: title,
      titleBold: titleBold,
      required: required,
      tooltip: tooltip,
      toolTipPosition: toolTipPosition,
      horizontal: horizontal,
      size: horizontal ? labelSize : null,
      sm: horizontal ? labelSm : null,
      md: horizontal ? labelMd : null,
      lg: horizontal ? labelLg : null,
      xl: horizontal ? labelXl : null,
      xxl: horizontal ? labelXxl : null
    });
  }
  switch (type) {
    case Input.Select:
      {
        inputType = "select";
      }
      break;
    case Input.Radio:
      {
        classes = `${config.classes.radio}`;
      }
      break;
    case Input.CheckBox:
      {
        classes = `${config.classes.checkbox}`;
      }
      break;
    case Input.LongText:
      {
        inputType = "textarea";
      }
      break;
    case Input.Mobile:
    case Input.Phone:
    case Input.Fax:
      {
        if (!editorMask && config.phoneMask) {
          editorMask = config.phoneMask;
        }
      }
      break;
  }
  let innerChildren = null;
  let dataSource = [];
  if (type !== Input.Select) {
    if (editorValue) {
      if (type !== Input.Date || !(editorValue instanceof Date)) {
        if (editorValue && (editorMask || type === Input.Money || type === Input.Decimal || type === Input.Percent)) {
          editorValue = applyMask(type, editorMask, editorValue, thousandsSeparator, decimalSeparator, decimalPlaces);
        }
      } else {
        try {
          var day = ("0" + editorValue.getDate()).slice(-2);
          var month = ("0" + (editorValue.getMonth() + 1)).slice(-2);
          var dateValue = editorValue.getFullYear() + "-" + month + "-" + day;
          editorValue = String(dateValue);
        } catch {}
      }
    }
  } else if (options) {
    dataSource = options && typeof options[Symbol.iterator] === "function" ? [...options] : [];
    if (dataSource.every(element => {
      const type = typeof element;
      return type !== "object" && type !== "function";
    })) {
      dataSource = dataSource.map((value, index) => {
        const obj = {};
        obj[optionsId] = value;
        obj[optionsDescription] = value;
        return obj;
      });
    }
    if (!optionsFirstSelected) {
      let noneSelectOption = {};
      noneSelectOption[optionsId] = optionsNoneSelectedValue;
      noneSelectOption[optionsDescription] = optionsNoneSelectedText;
      dataSource.unshift(noneSelectOption);
      if (!editorValue && (editorValue === undefined || editorValue === null)) {
        editorValue = optionsNoneSelectedValue;
      }
    } else {
      if (!String(editorValue) && dataSource.length > 0) {
        editorValue = dataSource[0][optionsId];
      }
    }
  }
  if (type === Input.Select && !optionsFilter) {
    if (optionsGrouped) {
      // Lógica para opções agrupadas
      const groupedOptions = new Map();
      // Agrupar as opções
      dataSource.forEach(option => {
        const group = optionsGroup ? option[optionsGroup] : optionGetGroup ? optionGetGroup(option) : "Sem Grupo";
        if (!groupedOptions.has(group)) {
          groupedOptions.set(group, []);
        }
        groupedOptions.get(group).push(option);
      });
      // Criar elementos React agrupados
      innerChildren = Array.from(groupedOptions.entries()).map(([groupName, groupOptions], groupIndex) => {
        const optionElements = groupOptions.map((option, optionIndex) => {
          return /*#__PURE__*/React.createElement("option", {
            value: option[optionsId],
            key: `group-${groupIndex}-option-${optionIndex}`
          }, !optionGetDescription ? option[optionsDescription] : optionGetDescription(option));
        });
        return /*#__PURE__*/React.createElement("optgroup", {
          label: groupName,
          key: `group-${groupIndex}`
        }, optionElements);
      });
    } else {
      // Lógica original para opções não agrupadas
      innerChildren = dataSource.map((option, index) => {
        return /*#__PURE__*/React.createElement("option", {
          value: option[optionsId],
          key: index
        }, !optionGetDescription || index === 0 && optionGetDescription && !optionsFirstSelected ? option[optionsDescription] : optionGetDescription(option));
      });
    }
  }
  classes = mapToCssModules(classNames(className, classes, isInvalid ? config.classes.invalid : null));
  const editorAttributes = getEditorAttributes(props, isInvalid, editorValue, showPassword);
  switch (type) {
    case Input.CheckBox:
      {
        editorInput = jsx(CheckboxGroup, {
          id: id,
          checkBoxText: checkBoxText,
          required: required,
          titleBold: titleBold,
          tooltip: tooltip,
          toolTipPosition: toolTipPosition,
          children: jsx(EditorInput, {
            type: type,
            inputType: inputType,
            editorAttributes: editorAttributes,
            checked: editorValue,
            onBlurEvent: handleInputBlur,
            onChangeEvent: handleInputChange,
            inputRef: inputRef,
            children: innerChildren,
            className: classes
          })
        });
      }
      break;
    case Input.Radio:
      {
        editorInput = jsx(Radio, {
          inline: inline,
          id: id,
          editorAttributes: editorAttributes,
          inputRadioRefs: inputRadioRefs,
          onBlurEvent: handleInputBlur,
          onChangeEvent: handleInputChange,
          options: options,
          optionsDescription: optionsDescription,
          optionsTooltip: optionsToolTip,
          optionsFirstSelected: optionsFirstSelected,
          optionsId: optionsId,
          optionsNoneSelectedValue: optionsNoneSelectedValue,
          value: editorValue,
          optionsNoneSelectedText: optionsNoneSelectedText,
          className: classes,
          inputRef: inputRef
        });
      }
      break;
    case Input.Select:
      {
        editorInput = jsx(Select, {
          placeholder: placeholder,
          searchPlaceholder: optionsFilterPlaceholder,
          editorAttributes: editorAttributes,
          onBlurEvent: handleInputBlur,
          onChangeEvent: handleInputChange,
          options: options,
          optionsGrouped: optionsGrouped,
          optionsDescription: optionsDescription,
          optionGetDescription: optionGetDescription,
          optionGetGroup: optionGetGroup,
          optionsGroup: optionsGroup,
          optionsFirstSelected: optionsFirstSelected,
          optionsFilter: optionsFilter,
          optionsMultiple: optionsMultiple,
          enabled: enabled,
          readOnly: readOnly,
          optionsMultipleSeparatorValue: optionsMultipleSeparatorValue,
          optionsMultipleSeparatorDescription: optionsMultipleSeparatorDescription,
          children: innerChildren,
          optionsLimiteDescriptionSelected: optionsLimiteDescriptionSelected,
          optionsId: optionsId,
          optionsNoneSelectedValue: optionsNoneSelectedValue,
          value: editorValue,
          optionRenderer: optionRenderer,
          optionsNoneSelectedText: optionsNoneSelectedText,
          className: classes,
          inputRef: inputRef
        });
      }
      break;
    case Input.File:
      {
        editorInput = jsx(File, {
          id: id,
          name: editorName,
          editorAttributes: editorAttributes,
          onDownloadFileClick: onDownloadFileClick,
          onDeleteFileClick: onDeleteFileClick,
          fileUrlDownload: fileUrlDownload,
          fileDownloadName: fileDownloadName,
          placeholder: placeholder,
          maxFilesPlaceholder: maxFilesPlaceholder,
          onBlurEvent: handleInputBlur,
          onChangeEvent: handleInputChange,
          inputRef: inputRef,
          className: classes
        });
      }
      break;
    default:
      {
        editorInput = jsx(EditorInput, {
          type: type,
          inputType: inputType,
          editorAttributes: editorAttributes,
          onBlurEvent: handleInputBlur,
          onChangeEvent: handleInputChange,
          onKeyDownEvent: type === Input.Text ? handleInputKeyDown : null,
          onPasteEvent: type === Input.Text ? handleInputPaste : null,
          inputRef: inputRef,
          children: innerChildren,
          className: classes,
          ...attributes
        });
      }
      break;
  }
  if (type === Input.Hidden) {
    return editorInput;
  }
  if (note) {
    const noteClasses = mapToCssModules(classNames(config.classes.labelNote, noteClassName));
    noteLabel = jsx("label", {
      className: noteClasses,
      children: note
    });
  }
  let invalidElementList = [];
  if (invalid && invalidMessage || validationList && validationList.length > 0) {
    if (invalidMessage) {
      invalidElementList.push(/*#__PURE__*/React.createElement(config.invalidFeedbackTag, {
        key: 0,
        className: config.classes.validationMessageError
      }, String(invalidMessage)));
    }
    validationList?.map((item, index) => {
      let messageClassName = null;
      switch (item.Type) {
        case ValidationMessage.Error:
          {
            messageClassName = config.classes.validationMessageError;
          }
          break;
        case ValidationMessage.Success:
          {
            messageClassName = config.classes.validationMessageSuccess;
          }
          break;
        case ValidationMessage.Warning:
          {
            messageClassName = config.classes.validationMessageWarning;
          }
          break;
      }
      invalidElementList.push(/*#__PURE__*/React.createElement(config.invalidFeedbackTag, {
        key: index + 1,
        className: messageClassName
      }, String(item.Message)));
    });
  }
  const prependIconComponent = hasIcon && (iconPosition === IconPosition.Both || iconPosition === IconPosition.Start) ? jsx("div", {
    className: config.classes.inputGroupPrependIcon,
    children: jsx("span", {
      className: config.classes.inputGroupIcon,
      children: jsx("i", {
        className: prependIcon
      })
    })
  }) : null;
  const appendIconComponent = hasIcon && (iconPosition === IconPosition.Both || iconPosition === IconPosition.End) ? jsx("div", {
    className: config.classes.inputGroupAppendIcon,
    children: jsx("span", {
      className: config.classes.inputGroupIcon,
      children: jsx("i", {
        className: appendIcon
      })
    })
  }) : null;
  const showPasswordIconComponent = type === Input.Password && enableShowPassword ? jsx("div", {
    className: showPasswordIconPosition === IconPosition.Start ? config.classes.inputGroupPrependIcon : config.classes.inputGroupAppendIcon,
    children: jsx("span", {
      className: config.classes.inputGroupShowPasswordIcon,
      onClick: onShowPasswordHandler,
      children: jsx("i", {
        className: showPassword ? hidePasswordIcon : showPasswordIcon
      })
    })
  }) : null;
  const prependButtonElements = prependButtons?.map((button, index) => jsx(EditorButton, {
    ...button
  }, index));
  const appendButtonElements = appendButtons?.map((button, index) => jsx(EditorButton, {
    ...button
  }, index));
  let inputGroup = jsxs("div", {
    className: config.classes.inputGroup,
    children: [prependButtonElements, config.prependIconAfterInput && prependIconComponent, (showPasswordIconPosition === IconPosition.Start || showPasswordIconPosition === IconPosition.Both) && showPasswordIconComponent, editorInput, !config.prependIconAfterInput && prependIconComponent, (showPasswordIconPosition === IconPosition.End || showPasswordIconPosition === IconPosition.Both) && showPasswordIconComponent, appendIconComponent, appendButtonElements]
  });
  if (!hasIcon && !(prependButtonElements || appendButtonElements)) {
    inputGroup = editorInput;
  }
  const classControlGroup = mapToCssModules(classNames(config.classes.controlGroup, isInvalid ? config.classes.invalid : "", enabled && type !== Input.File ? "" : config.classes.controlGroupDisabledControl));
  if (!horizontal) {
    let section = /*#__PURE__*/React.createElement("div", {
      className: classControlGroup
    }, titleLabel, inputGroup, noteLabel, invalidElementList);
    let column = jsx(Column, {
      size: size,
      sm: sm,
      md: md,
      lg: lg,
      xl: xl,
      xxl: xxl,
      children: section
    });
    if (createRow) {
      return jsx(Row, {
        children: column
      });
    } else if (createColumn) {
      return column;
    } else {
      return section;
    }
  } else {
    inputGroup = jsx(Column, {
      size: size,
      sm: sm,
      md: md,
      lg: lg,
      xl: xl,
      xxl: xxl,
      children: inputGroup
    });
    return jsxs(Row, {
      className: config.classes.horizontalFormRow,
      children: [titleLabel, " ", inputGroup, " ", noteLabel, " ", invalidElementList]
    });
  }
});

const Container = /*#__PURE__*/forwardRef((props, ref) => {
  const inputRefs = useRef([]);
  const {
    children
  } = props;
  inputRefs.current = [];
  async function validate() {
    const validationPromises = inputRefs.current.map(async ref => {
      return await ref.validate();
    });
    const validationResults = await Promise.all(validationPromises);
    const list = validationResults.flat();
    return list;
  }
  function getEditors() {
    return inputRefs.current;
  }
  useImperativeHandle(ref, () => ({
    validate,
    getEditors
  }));
  const handleEditorRef = useCallback(ref => {
    if (ref) {
      const exists = inputRefs.current.some(existingRef => existingRef.getName() === ref.getName() && existingRef.getId() === ref.getId());
      if (!exists) {
        inputRefs.current.push(ref);
      }
      if (ref.forwardRef) {
        ref.forwardRef(ref);
      }
    }
  }, [children]);
  const mapEditorsRecursively = children => {
    return React.Children.map(children, child => {
      if (/*#__PURE__*/React.isValidElement(child)) {
        if (child.type === Editor) {
          return /*#__PURE__*/React.cloneElement(child, {
            ...child.props,
            ref: ref => handleEditorRef(ref)
          });
        } else if (child.props.children) {
          const newChildren = mapEditorsRecursively(child.props.children);
          return /*#__PURE__*/React.cloneElement(child, {
            ...child.props,
            children: newChildren
          });
        }
      }
      return child;
    });
  };
  return jsx(Fragment, {
    children: mapEditorsRecursively(children)
  });
});

var SelectionType;
(function (SelectionType) {
  SelectionType[SelectionType["NONE"] = 1] = "NONE";
  SelectionType[SelectionType["SINGLE"] = 1] = "SINGLE";
  SelectionType[SelectionType["MULTIPLE"] = 2] = "MULTIPLE";
  SelectionType[SelectionType["CHECKBOX"] = 3] = "CHECKBOX";
})(SelectionType || (SelectionType = {}));
var ColumnType;
(function (ColumnType) {
  ColumnType[ColumnType["STRING"] = 1] = "STRING";
  ColumnType[ColumnType["FLOAT"] = 2] = "FLOAT";
  ColumnType[ColumnType["DATE"] = 3] = "DATE";
  ColumnType[ColumnType["DATETIME"] = 4] = "DATETIME";
  ColumnType[ColumnType["INT"] = 5] = "INT";
  ColumnType[ColumnType["BOOLEAN"] = 6] = "BOOLEAN";
  ColumnType[ColumnType["TEMPLATE"] = 7] = "TEMPLATE";
})(ColumnType || (ColumnType = {}));
var AlignType;
(function (AlignType) {
  AlignType[AlignType["START"] = 1] = "START";
  AlignType[AlignType["CENTER"] = 2] = "CENTER";
  AlignType[AlignType["END"] = 3] = "END";
})(AlignType || (AlignType = {}));
var TableViewMode;
(function (TableViewMode) {
  TableViewMode[TableViewMode["TABLE"] = 1] = "TABLE";
  TableViewMode[TableViewMode["CARD"] = 2] = "CARD";
})(TableViewMode || (TableViewMode = {}));

const timeZoneMap = {
  "Dateline Standard Time": "Etc/GMT+12",
  "UTC-11": "Etc/GMT+11",
  "Aleutian Standard Time": "America/Adak",
  "Hawaiian Standard Time": "Pacific/Honolulu",
  "Marquesas Standard Time": "Pacific/Marquesas",
  "Alaskan Standard Time": "America/Anchorage",
  "UTC-09": "Etc/GMT+9",
  "Pacific Standard Time (Mexico)": "America/Tijuana",
  "UTC-08": "Etc/GMT+8",
  "Pacific Standard Time": "America/Los_Angeles",
  "US Mountain Standard Time": "America/Phoenix",
  "Mountain Standard Time (Mexico)": "America/Chihuahua",
  "Mountain Standard Time": "America/Denver",
  "Yukon Standard Time": "America/Whitehorse",
  "Central America Standard Time": "America/Guatemala",
  "Central Standard Time": "America/Chicago",
  "Easter Island Standard Time": "Pacific/Easter",
  "Central Standard Time (Mexico)": "America/Mexico_City",
  "Canada Central Standard Time": "America/Regina",
  "SA Pacific Standard Time": "America/Bogota",
  "Eastern Standard Time (Mexico)": "America/Cancun",
  "Eastern Standard Time": "America/New_York",
  "Haiti Standard Time": "America/Port-au-Prince",
  "Cuba Standard Time": "America/Havana",
  "US Eastern Standard Time": "America/Indianapolis",
  "Turks And Caicos Standard Time": "America/Grand_Turk",
  "Paraguay Standard Time": "America/Asuncion",
  "Atlantic Standard Time": "America/Halifax",
  "Venezuela Standard Time": "America/Caracas",
  "Central Brazilian Standard Time": "America/Sao_Paulo",
  "SA Western Standard Time": "America/La_Paz",
  "Pacific SA Standard Time": "America/Santiago",
  "Newfoundland Standard Time": "America/St_Johns",
  "Tocantins Standard Time": "America/Araguaina",
  "E. South America Standard Time": "America/Sao_Paulo",
  "SA Eastern Standard Time": "America/Cayenne",
  "Argentina Standard Time": "America/Argentina/Buenos_Aires",
  "Montevideo Standard Time": "America/Montevideo",
  "Magallanes Standard Time": "America/Punta_Arenas",
  "Saint Pierre Standard Time": "America/Miquelon",
  "Bahia Standard Time": "America/Bahia",
  "UTC-02": "Etc/GMT+2",
  "Greenland Standard Time": "America/Godthab",
  "Mid-Atlantic Standard Time": "Etc/GMT+2",
  "Azores Standard Time": "Atlantic/Azores",
  "Cape Verde Standard Time": "Atlantic/Cape_Verde",
  UTC: "Etc/GMT",
  "GMT Standard Time": "Europe/London",
  "Greenwich Standard Time": "Atlantic/Reykjavik",
  "Sao Tome Standard Time": "Africa/Sao_Tome",
  "Morocco Standard Time": "Africa/Casablanca",
  "W. Europe Standard Time": "Europe/Berlin",
  "Central Europe Standard Time": "Europe/Budapest",
  "Romance Standard Time": "Europe/Paris",
  "Central European Standard Time": "Europe/Warsaw",
  "W. Central Africa Standard Time": "Africa/Lagos",
  "GTB Standard Time": "Europe/Bucharest",
  "Middle East Standard Time": "Asia/Beirut",
  "Egypt Standard Time": "Africa/Cairo",
  "E. Europe Standard Time": "Europe/Chisinau",
  "West Bank Standard Time": "Asia/Hebron",
  "South Africa Standard Time": "Africa/Johannesburg",
  "FLE Standard Time": "Europe/Kiev",
  "Israel Standard Time": "Asia/Jerusalem",
  "South Sudan Standard Time": "Africa/Juba",
  "Kaliningrad Standard Time": "Europe/Kaliningrad",
  "Sudan Standard Time": "Africa/Khartoum",
  "Libya Standard Time": "Africa/Tripoli",
  "Namibia Standard Time": "Africa/Windhoek",
  "Jordan Standard Time": "Asia/Amman",
  "Arabic Standard Time": "Asia/Baghdad",
  "Syria Standard Time": "Asia/Damascus",
  "Turkey Standard Time": "Europe/Istanbul",
  "Arab Standard Time": "Asia/Riyadh",
  "Belarus Standard Time": "Europe/Minsk",
  "Russian Standard Time": "Europe/Moscow",
  "E. Africa Standard Time": "Africa/Nairobi",
  "Volgograd Standard Time": "Europe/Volgograd",
  "Iran Standard Time": "Asia/Tehran",
  "Arabian Standard Time": "Asia/Dubai",
  "Astrakhan Standard Time": "Europe/Astrakhan",
  "Azerbaijan Standard Time": "Asia/Baku",
  "Russia Time Zone 3": "Europe/Samara",
  "Mauritius Standard Time": "Indian/Mauritius",
  "Saratov Standard Time": "Europe/Saratov",
  "Georgian Standard Time": "Asia/Tbilisi",
  "Caucasus Standard Time": "Asia/Yerevan",
  "Afghanistan Standard Time": "Asia/Kabul",
  "West Asia Standard Time": "Asia/Tashkent",
  "Qyzylorda Standard Time": "Asia/Qyzylorda",
  "Ekaterinburg Standard Time": "Asia/Yekaterinburg",
  "Pakistan Standard Time": "Asia/Karachi",
  "India Standard Time": "Asia/Kolkata",
  "Sri Lanka Standard Time": "Asia/Colombo",
  "Nepal Standard Time": "Asia/Kathmandu",
  "Central Asia Standard Time": "Asia/Almaty",
  "Bangladesh Standard Time": "Asia/Dhaka",
  "Omsk Standard Time": "Asia/Omsk",
  "Myanmar Standard Time": "Asia/Yangon",
  "SE Asia Standard Time": "Asia/Bangkok",
  "Altai Standard Time": "Asia/Barnaul",
  "W. Mongolia Standard Time": "Asia/Hovd",
  "North Asia Standard Time": "Asia/Krasnoyarsk",
  "N. Central Asia Standard Time": "Asia/Novosibirsk",
  "Tomsk Standard Time": "Asia/Tomsk",
  "China Standard Time": "Asia/Shanghai",
  "North Asia East Standard Time": "Asia/Irkutsk",
  "Singapore Standard Time": "Asia/Singapore",
  "W. Australia Standard Time": "Australia/Perth",
  "Taipei Standard Time": "Asia/Taipei",
  "Ulaanbaatar Standard Time": "Asia/Ulaanbaatar",
  "Aus Central W. Standard Time": "Australia/Eucla",
  "Transbaikal Standard Time": "Asia/Chita",
  "Tokyo Standard Time": "Asia/Tokyo",
  "North Korea Standard Time": "Asia/Pyongyang",
  "Korea Standard Time": "Asia/Seoul",
  "Yakutsk Standard Time": "Asia/Yakutsk",
  "Cen. Australia Standard Time": "Australia/Adelaide",
  "AUS Central Standard Time": "Australia/Darwin",
  "E. Australia Standard Time": "Australia/Brisbane",
  "AUS Eastern Standard Time": "Australia/Sydney",
  "West Pacific Standard Time": "Pacific/Port_Moresby",
  "Tasmania Standard Time": "Australia/Hobart",
  "Vladivostok Standard Time": "Asia/Vladivostok",
  "Lord Howe Standard Time": "Australia/Lord_Howe",
  "Bougainville Standard Time": "Pacific/Bougainville",
  "Russia Time Zone 10": "Asia/Srednekolymsk",
  "Magadan Standard Time": "Asia/Magadan",
  "Norfolk Standard Time": "Pacific/Norfolk",
  "Sakhalin Standard Time": "Asia/Sakhalin",
  "Central Pacific Standard Time": "Pacific/Guadalcanal",
  "Russia Time Zone 11": "Asia/Kamchatka",
  "New Zealand Standard Time": "Pacific/Auckland",
  "UTC+12": "Etc/GMT-12",
  "Fiji Standard Time": "Pacific/Fiji",
  "Kamchatka Standard Time": "Asia/Kamchatka",
  "Chatham Islands Standard Time": "Pacific/Chatham",
  "UTC+13": "Etc/GMT-13",
  "Tonga Standard Time": "Pacific/Tongatapu",
  "Samoa Standard Time": "Pacific/Apia",
  "Line Islands Standard Time": "Pacific/Kiritimati"
};

const Util = {
  timeZoneMap: {
    "Dateline Standard Time": "Etc/GMT+12",
    "UTC-11": "Etc/GMT+11",
    "Aleutian Standard Time": "America/Adak",
    "Hawaiian Standard Time": "Pacific/Honolulu",
    "Marquesas Standard Time": "Pacific/Marquesas",
    "Alaskan Standard Time": "America/Anchorage",
    "UTC-09": "Etc/GMT+9",
    "Pacific Standard Time (Mexico)": "America/Tijuana",
    "UTC-08": "Etc/GMT+8",
    "Pacific Standard Time": "America/Los_Angeles",
    "US Mountain Standard Time": "America/Phoenix",
    "Mountain Standard Time (Mexico)": "America/Chihuahua",
    "Mountain Standard Time": "America/Denver",
    "Yukon Standard Time": "America/Whitehorse",
    "Central America Standard Time": "America/Guatemala",
    "Central Standard Time": "America/Chicago",
    "Easter Island Standard Time": "Pacific/Easter",
    "Central Standard Time (Mexico)": "America/Mexico_City",
    "Canada Central Standard Time": "America/Regina",
    "SA Pacific Standard Time": "America/Bogota",
    "Eastern Standard Time (Mexico)": "America/Cancun",
    "Eastern Standard Time": "America/New_York",
    "Haiti Standard Time": "America/Port-au-Prince",
    "Cuba Standard Time": "America/Havana",
    "US Eastern Standard Time": "America/Indianapolis",
    "Turks And Caicos Standard Time": "America/Grand_Turk",
    "Paraguay Standard Time": "America/Asuncion",
    "Atlantic Standard Time": "America/Halifax",
    "Venezuela Standard Time": "America/Caracas",
    "Central Brazilian Standard Time": "America/Sao_Paulo",
    "SA Western Standard Time": "America/La_Paz",
    "Pacific SA Standard Time": "America/Santiago",
    "Newfoundland Standard Time": "America/St_Johns",
    "Tocantins Standard Time": "America/Araguaina",
    "E. South America Standard Time": "America/Sao_Paulo",
    "SA Eastern Standard Time": "America/Cayenne",
    "Argentina Standard Time": "America/Argentina/Buenos_Aires",
    "Montevideo Standard Time": "America/Montevideo",
    "Magallanes Standard Time": "America/Punta_Arenas",
    "Saint Pierre Standard Time": "America/Miquelon",
    "Bahia Standard Time": "America/Bahia",
    "UTC-02": "Etc/GMT+2",
    "Greenland Standard Time": "America/Godthab",
    "Mid-Atlantic Standard Time": "Etc/GMT+2",
    "Azores Standard Time": "Atlantic/Azores",
    "Cape Verde Standard Time": "Atlantic/Cape_Verde",
    UTC: "Etc/GMT",
    "GMT Standard Time": "Europe/London",
    "Greenwich Standard Time": "Atlantic/Reykjavik",
    "Sao Tome Standard Time": "Africa/Sao_Tome",
    "Morocco Standard Time": "Africa/Casablanca",
    "W. Europe Standard Time": "Europe/Berlin",
    "Central Europe Standard Time": "Europe/Budapest",
    "Romance Standard Time": "Europe/Paris",
    "Central European Standard Time": "Europe/Warsaw",
    "W. Central Africa Standard Time": "Africa/Lagos",
    "GTB Standard Time": "Europe/Bucharest",
    "Middle East Standard Time": "Asia/Beirut",
    "Egypt Standard Time": "Africa/Cairo",
    "E. Europe Standard Time": "Europe/Chisinau",
    "West Bank Standard Time": "Asia/Hebron",
    "South Africa Standard Time": "Africa/Johannesburg",
    "FLE Standard Time": "Europe/Kiev",
    "Israel Standard Time": "Asia/Jerusalem",
    "South Sudan Standard Time": "Africa/Juba",
    "Kaliningrad Standard Time": "Europe/Kaliningrad",
    "Sudan Standard Time": "Africa/Khartoum",
    "Libya Standard Time": "Africa/Tripoli",
    "Namibia Standard Time": "Africa/Windhoek",
    "Jordan Standard Time": "Asia/Amman",
    "Arabic Standard Time": "Asia/Baghdad",
    "Syria Standard Time": "Asia/Damascus",
    "Turkey Standard Time": "Europe/Istanbul",
    "Arab Standard Time": "Asia/Riyadh",
    "Belarus Standard Time": "Europe/Minsk",
    "Russian Standard Time": "Europe/Moscow",
    "E. Africa Standard Time": "Africa/Nairobi",
    "Volgograd Standard Time": "Europe/Volgograd",
    "Iran Standard Time": "Asia/Tehran",
    "Arabian Standard Time": "Asia/Dubai",
    "Astrakhan Standard Time": "Europe/Astrakhan",
    "Azerbaijan Standard Time": "Asia/Baku",
    "Russia Time Zone 3": "Europe/Samara",
    "Mauritius Standard Time": "Indian/Mauritius",
    "Saratov Standard Time": "Europe/Saratov",
    "Georgian Standard Time": "Asia/Tbilisi",
    "Caucasus Standard Time": "Asia/Yerevan",
    "Afghanistan Standard Time": "Asia/Kabul",
    "West Asia Standard Time": "Asia/Tashkent",
    "Qyzylorda Standard Time": "Asia/Qyzylorda",
    "Ekaterinburg Standard Time": "Asia/Yekaterinburg",
    "Pakistan Standard Time": "Asia/Karachi",
    "India Standard Time": "Asia/Kolkata",
    "Sri Lanka Standard Time": "Asia/Colombo",
    "Nepal Standard Time": "Asia/Kathmandu",
    "Central Asia Standard Time": "Asia/Almaty",
    "Bangladesh Standard Time": "Asia/Dhaka",
    "Omsk Standard Time": "Asia/Omsk",
    "Myanmar Standard Time": "Asia/Yangon",
    "SE Asia Standard Time": "Asia/Bangkok",
    "Altai Standard Time": "Asia/Barnaul",
    "W. Mongolia Standard Time": "Asia/Hovd",
    "North Asia Standard Time": "Asia/Krasnoyarsk",
    "N. Central Asia Standard Time": "Asia/Novosibirsk",
    "Tomsk Standard Time": "Asia/Tomsk",
    "China Standard Time": "Asia/Shanghai",
    "North Asia East Standard Time": "Asia/Irkutsk",
    "Singapore Standard Time": "Asia/Singapore",
    "W. Australia Standard Time": "Australia/Perth",
    "Taipei Standard Time": "Asia/Taipei",
    "Ulaanbaatar Standard Time": "Asia/Ulaanbaatar",
    "Aus Central W. Standard Time": "Australia/Eucla",
    "Transbaikal Standard Time": "Asia/Chita",
    "Tokyo Standard Time": "Asia/Tokyo",
    "North Korea Standard Time": "Asia/Pyongyang",
    "Korea Standard Time": "Asia/Seoul",
    "Yakutsk Standard Time": "Asia/Yakutsk",
    "Cen. Australia Standard Time": "Australia/Adelaide",
    "AUS Central Standard Time": "Australia/Darwin",
    "E. Australia Standard Time": "Australia/Brisbane",
    "AUS Eastern Standard Time": "Australia/Sydney",
    "West Pacific Standard Time": "Pacific/Port_Moresby",
    "Tasmania Standard Time": "Australia/Hobart",
    "Vladivostok Standard Time": "Asia/Vladivostok",
    "Lord Howe Standard Time": "Australia/Lord_Howe",
    "Bougainville Standard Time": "Pacific/Bougainville",
    "Russia Time Zone 10": "Asia/Srednekolymsk",
    "Magadan Standard Time": "Asia/Magadan",
    "Norfolk Standard Time": "Pacific/Norfolk",
    "Sakhalin Standard Time": "Asia/Sakhalin",
    "Central Pacific Standard Time": "Pacific/Guadalcanal",
    "Russia Time Zone 11": "Asia/Kamchatka",
    "New Zealand Standard Time": "Pacific/Auckland",
    "UTC+12": "Etc/GMT-12",
    "Fiji Standard Time": "Pacific/Fiji",
    "Kamchatka Standard Time": "Asia/Kamchatka",
    "Chatham Islands Standard Time": "Pacific/Chatham",
    "UTC+13": "Etc/GMT-13",
    "Tonga Standard Time": "Pacific/Tongatapu",
    "Samoa Standard Time": "Pacific/Apia",
    "Line Islands Standard Time": "Pacific/Kiritimati"
  },
  resolveTimeZone(timeZone) {
    return this.timeZoneMap[timeZone] || timeZone;
  },
  applyMask: function (input, mask) {
    if (!mask || !input) return "";
    let maskedValue = "";
    let maskIndex = 0;
    for (let i = 0; i < input.length; i++) {
      if (maskIndex >= mask.length) break;
      const maskChar = mask[maskIndex];
      if (maskChar === "0") {
        if (/\d/.test(input[i])) {
          maskedValue += input[i];
          maskIndex++;
        }
      } else if (maskChar === "9") {
        if (/\d/.test(input[i])) {
          maskedValue += input[i];
          maskIndex++;
        }
      } else if (maskChar === "A") {
        if (/[a-zA-Z0-9]/.test(input[i])) {
          maskedValue += input[i];
          maskIndex++;
        }
      } else if (maskChar === "S") {
        if (/[a-zA-Z]/.test(input[i])) {
          maskedValue += input[i];
          maskIndex++;
        }
      } else {
        maskedValue += maskChar;
        maskIndex++;
        if (input[i] !== maskChar) {
          i--;
        }
      }
    }
    return maskedValue;
  },
  getScreenSize: () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 576) {
      return "xs";
    } else if (windowWidth < 768) {
      return "sm";
    } else if (windowWidth < 992) {
      return "md";
    } else if (windowWidth < 1200) {
      return "lg";
    } else if (windowWidth < 1400) {
      return "xl";
    } else {
      return "xxl";
    }
  },
  mapToCssModules: function (className = "") {
    return className.split(" ").map(c => c).join(" ");
  },
  formatDate: function (date, culture, formatOptions = {}, timeZone) {
    const ianaTimeZone = timeZoneMap[timeZone] || timeZone;
    const utcDateString = typeof date === "string" && date.length > 10 && !date.endsWith("Z") ? `${date}Z` : date;
    return new Intl.DateTimeFormat(culture, {
      ...formatOptions,
      timeZone: ianaTimeZone
    }).format(new Date(utcDateString));
  },
  getAlignClassName: function (type, defaultValue = AlignType.START) {
    const align = type ?? defaultValue;
    switch (align) {
      case AlignType.START:
        return "text-start";
      case AlignType.CENTER:
        return "text-center";
      case AlignType.END:
        return "text-end";
      default:
        return null;
    }
  },
  getDefaultValue: function (type) {
    if (type) {
      switch (type) {
        case ColumnType.FLOAT:
        case ColumnType.INT:
          return 0;
        case ColumnType.DATE:
          return "0001-01-01";
      }
    }
    return "";
  },
  isMinOrDefaultValue: function (value, type) {
    if (type) {
      switch (type) {
        case ColumnType.FLOAT:
        case ColumnType.INT:
          return parseInt(value) === 0;
        case ColumnType.DATE:
          return value === "0001-01-01" || value instanceof Date && value.toISOString().startsWith("0001-01-01");
      }
    }
    return false;
  },
  getColumnValue: function (column, record) {
    let value = column.accessor ? record[column.accessor] : null;
    if (value === null || value === undefined) {
      value = Util.getDefaultValue(column.type);
    }
    return value;
  },
  getFormattedDate(dateString, timeZone, culture) {
    if (!dateString || dateString.startsWith("0001-01-01")) return "";
    // Adiciona uma hora fixa para evitar deslocamentos de data
    const adjustedDateString = dateString.length === 10 ? `${dateString}T12:00:00Z` : dateString;
    const date = new Date(adjustedDateString); // Cria a data como UTC
    if (isNaN(date.getTime())) return "";
    const ianaTimeZone = this.resolveTimeZone(timeZone);
    const options = {
      timeZone: ianaTimeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    };
    return new Intl.DateTimeFormat(culture, options).format(date);
  },
  getFormattedDateTime(dateString, timeZone, culture) {
    if (!dateString || dateString === "0001-01-01T00:00:00") return "";
    const date = new Date(dateString.length === 10 ? dateString : `${dateString}Z`);
    if (isNaN(date.getTime())) return "";
    const ianaTimeZone = this.resolveTimeZone(timeZone);
    const options = {
      timeZone: ianaTimeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    };
    return new Intl.DateTimeFormat(culture, options).format(date);
  }
};

function TablePagination({
  currentPage,
  totalPages,
  totalRecords,
  pageSize,
  onPageChange,
  loading = false,
  customTexts = {},
  customClasses = {},
  customIcons = {}
}) {
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
    ...customTexts
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
    ...customClasses
  };
  // Get icons from config
  const icons = {
    firstPage: config.icons.table.firstPage,
    previousPage: config.icons.table.previousPage,
    nextPage: config.icons.table.nextPage,
    lastPage: config.icons.table.lastPage,
    ...customIcons
  };
  // Safe calculations to prevent NaN and invalid values
  const safeTotalPages = Math.max(Number(totalPages) || 1, 1);
  const safeCurrentPage = Math.max(1, Math.min(Number(currentPage) || 1, safeTotalPages));
  const safeTotalRecords = Math.max(Number(totalRecords) || 0, 0);
  const startItem = safeTotalRecords === 0 ? 0 : (safeCurrentPage - 1) * pageSize + 1;
  const endItem = Math.min(safeCurrentPage * pageSize, safeTotalRecords);
  // Don't show pagination if there's only one page
  if (safeTotalPages <= 1) {
    return null;
  }
  const isFirstPage = safeCurrentPage <= 1;
  const isLastPage = safeCurrentPage >= safeTotalPages;
  function getPageItemClass(isDisabled) {
    return `${classes.pageItem} ${isDisabled ? classes.disabledPage : ""}`.trim();
  }
  function handlePageClick(page, isDisabled, event) {
    event.preventDefault();
    if (isDisabled || loading) return;
    onPageChange(page);
  }
  return jsxs("div", {
    className: `${classes.container} d-flex justify-content-between align-items-center flex-wrap`,
    children: [jsx("div", {
      className: classes.info,
      children: jsxs("span", {
        children: [texts.showing, " ", jsx("strong", {
          children: startItem
        }), " ", texts.to, " ", jsx("strong", {
          children: endItem
        }), " ", texts.of, " ", jsx("strong", {
          children: safeTotalRecords
        }), " ", texts.records]
      })
    }), jsx("div", {
      className: classes.controls,
      children: jsxs("ul", {
        className: `${classes.pagination} mb-0`,
        children: [jsx("li", {
          className: getPageItemClass(isFirstPage),
          children: jsx(Tooltip, {
            position: TooltipPosition.Top,
            text: texts.firstPage,
            children: jsx("a", {
              href: "#",
              className: classes.pageLink,
              onClick: e => handlePageClick(1, isFirstPage, e),
              "aria-label": texts.firstPage,
              children: jsx("i", {
                className: icons.firstPage
              })
            })
          })
        }), jsx("li", {
          className: getPageItemClass(isFirstPage),
          children: jsx(Tooltip, {
            position: TooltipPosition.Top,
            text: texts.previousPage,
            children: jsx("a", {
              href: "#",
              className: classes.pageLink,
              onClick: e => handlePageClick(safeCurrentPage - 1, isFirstPage, e),
              "aria-label": texts.previousPage,
              children: jsx("i", {
                className: icons.previousPage
              })
            })
          })
        }), jsx("li", {
          className: `${classes.pageItem}  bg-light border mx-1 px-3`,
          children: jsxs("span", {
            className: `${classes.pageLink} ${classes.pageInfo} bg-transparent border-0 text-dark fw-semibold`,
            children: [texts.page, " ", safeCurrentPage, " ", texts.of, " ", safeTotalPages]
          })
        }), jsx("li", {
          className: getPageItemClass(isLastPage),
          children: jsx(Tooltip, {
            position: TooltipPosition.Top,
            text: texts.nextPage,
            children: jsx("a", {
              href: "#",
              className: classes.pageLink,
              onClick: e => handlePageClick(safeCurrentPage + 1, isLastPage, e),
              "aria-label": texts.nextPage,
              children: jsx("i", {
                className: icons.nextPage
              })
            })
          })
        }), jsx("li", {
          className: getPageItemClass(isLastPage),
          children: jsx(Tooltip, {
            position: TooltipPosition.Top,
            text: texts.lastPage,
            children: jsx("a", {
              href: "#",
              className: classes.pageLink,
              onClick: e => handlePageClick(safeTotalPages, isLastPage, e),
              "aria-label": texts.lastPage,
              children: jsx("i", {
                className: icons.lastPage
              })
            })
          })
        })]
      })
    })]
  });
}

const Loading = ({
  text,
  size = "md",
  className = ""
}) => {
  const config = useSmartConfig();
  const loadingText = text || config.messages.table.loadingText;
  return jsxs("div", {
    className: `smart-loading smart-loading-${size} ${className}`,
    children: [jsx("div", {
      className: "smart-loading-spinner"
    }), loadingText && jsx("div", {
      className: "smart-loading-text",
      children: loadingText
    })]
  });
};

// Determine the default view mode based on screen size
const getDefaultViewMode = defaultCardBelow => {
  const screenSize = Util.getScreenSize();
  const order = ["xs", "sm", "md", "lg", "xl", "xxl"];
  return order.indexOf(screenSize) < order.indexOf(defaultCardBelow) ? TableViewMode.CARD : TableViewMode.TABLE;
};
const Table = /*#__PURE__*/forwardRef(({
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
  cardViewModeBelow = "md",
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
  // New pagination props
  totalRecords,
  currentPage = 1,
  pageSize = 10,
  totalPages,
  showPagination = false,
  paginationPosition = "bottom",
  customPaginationRender,
  onPageChange,
  // New data management props
  enableDataManagement = false,
  onFetchData,
  loading: externalLoading = false,
  loadingText,
  autoLoad = true,
  onDataLoaded,
  onLoadingStateChange,
  onError
}, ref) => {
  const config = useSmartConfig();
  const [sortedColumn, setSortedColumn] = useState(null);
  const [isSortedDesc, setIsSortedDesc] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  // Internal state for data management
  const [internalData, setInternalData] = useState([]);
  const [internalLoading, setInternalLoading] = useState(false);
  const [internalCurrentPage, setInternalCurrentPage] = useState(1);
  const [internalTotalRecords, setInternalTotalRecords] = useState(0);
  const [internalTotalPages, setInternalTotalPages] = useState(0);
  const screenSize = Util.getScreenSize();
  const order = ["xs", "sm", "md", "lg", "xl", "xxl"];
  const screenIdx = order.indexOf(screenSize);
  const finalTimeZone = timeZone ?? config.table.timeZone;
  const finalCulture = culture ?? config.table.culture;
  const finalNoRecordMessage = noRecordMessage ?? config.messages.table.noRecordMessage;
  const finalLoadingText = loadingText ?? config.messages.table.loadingText;
  const finalSortAscendingIcon = sortAscendingIcon ?? config.icons.table?.sortAscending ?? "fas fa-sort-up";
  const finalSortDescendingIcon = sortDescendingIcon ?? config.icons.table?.sortDescending ?? "fas fa-sort-down";
  const finalSortDefaultIcon = sortDefaultIcon ?? config.icons.table?.sortDefault ?? "fas fa-sort";
  // Determine data source and states
  const isManaged = enableDataManagement && onFetchData;
  const displayData = isManaged ? internalData : data;
  const loading = isManaged ? internalLoading : externalLoading;
  const displayCurrentPage = isManaged ? internalCurrentPage : currentPage;
  const displayTotalRecords = isManaged ? internalTotalRecords : totalRecords;
  const displayTotalPages = isManaged ? internalTotalPages : totalPages || Math.ceil((totalRecords || 0) / pageSize);
  // Fetch data when enableDataManagement is true
  useEffect(() => {
    if (isManaged && autoLoad) {
      fetchData(internalCurrentPage);
    }
  }, [isManaged, autoLoad, internalCurrentPage]);
  // No Table/index.tsx, ADICIONE estes debug:
  // 1. Debug no fetchData
  const fetchData = async page => {
    if (!onFetchData) return;
    const loadingState = true;
    setInternalLoading(loadingState);
    onLoadingStateChange?.(loadingState);
    try {
      const result = await onFetchData({
        page,
        pageSize
      });
      setInternalData(result.data || []);
      setInternalTotalRecords(result.totalRecords || 0);
      setInternalTotalPages(result.totalPages || Math.ceil((result.totalRecords || 0) / pageSize));
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
  const handlePageChange = page => {
    if (isManaged) {
      setInternalCurrentPage(page);
    } else {
      onPageChange?.(page);
    }
  };
  // Filter visible columns based on responsive rules
  const visibleColumns = columns.filter(c => {
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
      return selectedRows.map(index => displayData[index]);
    },
    selectRow: rowIndex => {
      if (!selectedRows.includes(rowIndex)) {
        setSelectedRows(prevSelected => [...prevSelected, rowIndex]);
      }
    },
    deselectRow: rowIndex => {
      setSelectedRows(prevSelected => prevSelected.filter(index => index !== rowIndex));
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
    exportData: format => {
      // Get rows to be exported
      const rows = selection !== SelectionType.CHECKBOX && selection !== SelectionType.MULTIPLE ? displayData : selectedRows.map(index => displayData[index]);
      if (rows.length === 0) {
        console.warn("No rows selected for export.");
        return;
      }
      // Create headers based on columns
      const headers = columns.map(col => col.header || col.accessor || "");
      // Process cell values for export
      const processedRows = rows.map(record => columns.map(column => renderCellValueForExport(record, column)));
      if (format === "csv") {
        // Generate CSV content
        const csvContent = [headers.join(","), ...processedRows.map(row => row.map(value => `"${value}"`) // Escape values
        .join(","))].join("\n");
        // Create and download CSV file
        const blob = new Blob([csvContent], {
          type: "text/csv;charset=utf-8;"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "export.csv";
        a.click();
        URL.revokeObjectURL(url);
      }
      // Future implementations for Excel and PDF can be added here
    }
  }));
  const handleSelectAll = event => {
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
        setSelectedRows(prevSelected => [...prevSelected, rowIndex]);
      });
      if (onCheckedChange) {
        onCheckedChange(displayData[rowIndex], rowIndex, true); // Trigger event when selecting
      }
    } else {
      flushSync(() => {
        setSelectedRows(prevSelected => prevSelected.filter(index => index !== rowIndex));
      });
      if (onCheckedChange) {
        onCheckedChange(displayData[rowIndex], rowIndex, false); // Trigger event when unchecking
      }
    }
  };
  const generateSortingIndicator = column => {
    // ✅ Só mostra indicador se a coluna for ordenável
    if (column.enableSort !== true) {
      return finalSortDefaultIcon ? jsx("i", {
        className: finalSortDefaultIcon,
        style: {
          opacity: 0,
          visibility: "hidden",
          marginLeft: "5px"
        }
      }) : null;
    }
    if (sortedColumn && sortedColumn.accessor === column.accessor) {
      return jsx("i", {
        className: isSortedDesc ? finalSortDescendingIcon : finalSortAscendingIcon,
        style: {
          marginLeft: "5px"
        }
      });
    }
    return finalSortDefaultIcon ? jsx("i", {
      className: finalSortDefaultIcon,
      style: {
        opacity: 0.3,
        marginLeft: "5px"
      }
    }) : null;
  };
  const handleSort = column => {
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
    const valueA = a.hasOwnProperty(sortedColumn.accessor) ? a[sortedColumn.accessor] : Util.getDefaultValue(sortedColumn.type);
    const valueB = b.hasOwnProperty(sortedColumn.accessor) ? b[sortedColumn.accessor] : Util.getDefaultValue(sortedColumn.type);
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
  const renderCellValue = (record, column, row, parent = null, parentRow) => {
    let value = Util.getColumnValue(column, record);
    if (column.hideMinOrDefaultValue && Util.isMinOrDefaultValue(value, column.type)) {
      value = null;
    }
    if (column.renderCell) {
      return column.renderCell({
        record,
        value,
        row,
        parent,
        parentRow
      });
    }
    if (value !== undefined && value !== null) {
      if (column.sourceList && Array.isArray(column.sourceList)) {
        const sourceValueProperty = column.sourceValueProperty ?? config.table.sourceValueProperty;
        const sourceDescriptionProperty = column.sourceDescriptionProperty ?? config.table.sourceDescriptionProperty;
        if (sourceValueProperty && sourceDescriptionProperty) {
          const foundItem = column.sourceList.find(item => item[sourceValueProperty] === value);
          if (foundItem) {
            value = foundItem[sourceDescriptionProperty];
            if (column.displayBadge) {
              const sourceBadgeProperty = column.sourceBadgeProperty ?? config.table.sourceBadgeProperty;
              if (sourceBadgeProperty) {
                const badgeClasses = Util.mapToCssModules(classNames(config.classes.table.badge, foundItem[sourceBadgeProperty]));
                return jsx("div", {
                  className: badgeClasses,
                  children: value
                });
              }
            }
            return value;
          }
        }
      }
      if (column.format) {
        const formatOptions = {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        };
        if (column.format.match(/[cdfnp]/i)) {
          const decimalPlaces = column.format.length > 1 ? parseInt(column.format.substring(1)) : 0;
          formatOptions.minimumFractionDigits = decimalPlaces;
          formatOptions.maximumFractionDigits = decimalPlaces;
        }
        switch (column.format.charAt(0)) {
          case "d":
            return Util.formatDate(value, finalCulture, {
              year: "numeric",
              month: "numeric",
              day: "numeric"
            }, finalTimeZone);
          case "D":
            return Util.formatDate(value, finalCulture, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            }, finalTimeZone);
          case "t":
            return Util.formatDate(value, finalCulture, {
              hour: "2-digit",
              minute: "2-digit"
            }, finalTimeZone);
          case "T":
            return Util.formatDate(value, finalCulture, {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true
            }, finalTimeZone);
          case "c":
          case "C":
            return parseFloat(value).toLocaleString(finalCulture, {
              style: "currency",
              currency: "BRL",
              ...formatOptions
            });
          case "f":
          case "F":
            return parseFloat(value).toLocaleString(finalCulture, formatOptions);
          case "n":
          case "N":
            return parseInt(value, 10).toLocaleString(finalCulture, formatOptions);
          case "p":
          case "P":
            return `${parseFloat(value).toFixed(2)}%`;
          default:
            return value;
        }
      }
      if (column.mask) {
        return typeof column.mask === "string" ? Util.applyMask(value, column.mask) : column.mask(record);
      }
      switch (column.type) {
        case ColumnType.FLOAT:
          return parseFloat(value).toLocaleString(finalCulture, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          });
        case ColumnType.DATE:
          return Util.getFormattedDate(value, finalTimeZone, finalCulture);
        case ColumnType.DATETIME:
          return Util.getFormattedDateTime(value, finalTimeZone, finalCulture);
        case ColumnType.INT:
          return parseInt(value, 10);
        default:
          {
            return value;
          }
      }
    }
  };
  const renderCellValueForExport = (record, column) => {
    let value = Util.getColumnValue(column, record);
    if (value !== undefined && value !== null) {
      if (column.format) {
        const formatOptions = {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        };
        if (column.format.match(/[cdfnp]/i)) {
          const decimalPlaces = column.format.length > 1 ? parseInt(column.format.substring(1)) : 0;
          formatOptions.minimumFractionDigits = decimalPlaces;
          formatOptions.maximumFractionDigits = decimalPlaces;
        }
        switch (column.format.charAt(0)) {
          case "d":
            return Util.formatDate(value, finalCulture, {
              year: "numeric",
              month: "numeric",
              day: "numeric"
            }, finalTimeZone);
          case "D":
            return Util.formatDate(value, finalCulture, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            }, finalTimeZone);
          case "t":
            return Util.formatDate(value, finalCulture, {
              hour: "2-digit",
              minute: "2-digit"
            }, finalTimeZone);
          case "T":
            return Util.formatDate(value, finalCulture, {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true
            }, finalTimeZone);
          case "c":
          case "C":
            return parseFloat(value).toLocaleString(finalCulture, {
              style: "currency",
              currency: "BRL",
              ...formatOptions
            });
          case "f":
          case "F":
            return parseFloat(value).toLocaleString(finalCulture, formatOptions);
          case "n":
          case "N":
            return parseInt(value, 10).toLocaleString(finalCulture, formatOptions);
          case "p":
          case "P":
            return `${parseFloat(value).toFixed(2)}%`;
          default:
            return value;
        }
      }
      if (column.mask) {
        return typeof column.mask === "string" ? Util.applyMask(value, column.mask) : column.mask(record);
      }
      switch (column.type) {
        case ColumnType.FLOAT:
          return parseFloat(value).toLocaleString(finalCulture, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          });
        case ColumnType.DATE:
          return Util.getFormattedDate(value, finalTimeZone, finalCulture);
        case ColumnType.DATETIME:
          return Util.getFormattedDateTime(value, finalTimeZone, finalCulture);
        case ColumnType.INT:
          return parseInt(value, 10);
        default:
          return value;
      }
    }
    return value || "";
  };
  const classes = Util.mapToCssModules(classNames(className, "table table-bordered", enableHoverEffect ? "table-hover" : ""));
  const classesDetail = Util.mapToCssModules(classNames(classNameDetail, "table table-bordered", enableHoverEffectDetail ? "table-hover" : ""));
  const renderHeader = () => {
    return jsx(Fragment, {
      children: jsx("thead", {
        className: "table-light table-nowrap",
        children: jsxs("tr", {
          role: "row",
          children: [selection === SelectionType.CHECKBOX && jsx("th", {
            role: "columnheader",
            className: `header-checkbox text-center`,
            children: enableSelectAll && jsx("input", {
              type: "checkbox",
              onChange: handleSelectAll,
              "aria-label": "Select All"
            })
          }), visibleColumns.map((column, index) => jsxs("th", {
            role: "columnheader",
            className: classNames(column.headerClassName, Util.getAlignClassName(column.headerAlign), {
              "header-filter": !column.disableFilters
            }),
            style: {
              ...(column.width ? {
                width: column.width
              } : {})
            },
            onClick: !singleRecordTable && column.enableSort === true ? () => handleSort(column) : null,
            children: [column.header, !singleRecordTable && generateSortingIndicator(column)]
          }, `th-header-${index}`))]
        })
      })
    });
  };
  const renderTableHeader = () => {
    return jsx(Fragment, {
      children: jsx("div", {
        className: "table-responsive react-table",
        children: jsx("table", {
          role: "table",
          className: classes,
          children: renderHeader()
        })
      })
    });
  };
  const renderPagination = () => {
    if (!showPagination) {
      return null;
    }
    // Safe calculations to ensure valid numbers
    const safeCurrentPage = Number(displayCurrentPage) || 1;
    const safeTotalRecords = Number(displayTotalRecords) || 0;
    const safeTotalPages = Number(displayTotalPages) || Math.ceil(safeTotalRecords / pageSize) || 1;
    if (customPaginationRender) {
      return customPaginationRender({
        currentPage: safeCurrentPage,
        totalPages: safeTotalPages,
        totalRecords: safeTotalRecords,
        pageSize: pageSize,
        onPageChange: handlePageChange,
        loading
      });
    }
    return jsx(TablePagination, {
      currentPage: safeCurrentPage,
      totalPages: safeTotalPages,
      totalRecords: safeTotalRecords,
      pageSize: pageSize,
      onPageChange: handlePageChange,
      loading: loading
    });
  };
  const renderTable = data => {
    const handleRowDoubleClick = (event, rowData, rowIndex) => {
      if (onDoubleClick) {
        onDoubleClick(rowData, rowIndex);
      }
    };
    const handleRowDoubleClickDetail = (event, rowData, rowDataParent, rowIndex, rowIndexParent) => {
      if (onDoubleClickDetail) {
        onDoubleClickDetail(rowData, rowDataParent, rowIndex, rowIndexParent);
      }
    };
    const handleCellDoubleClick = (rowIndex, colIndex, rowData, column) => {
      if (column.onDoubleClick) {
        column.onDoubleClick(rowIndex, colIndex, Util.getColumnValue(column, rowData), rowData);
      }
    };
    const resolveRowClassName = record => {
      if (!rowClassName) return "";
      return typeof rowClassName === "function" ? rowClassName(record) : rowClassName;
    };
    const resolveDetailRowClassName = (detail, parent) => {
      if (!rowDetailClassName) return "";
      return typeof rowDetailClassName === "function" ? rowDetailClassName(detail, parent) : rowDetailClassName;
    };
    return jsx(Fragment, {
      children: data.length > 0 ? jsx("div", {
        className: "table-responsive react-table",
        children: jsxs("table", {
          role: "table",
          className: classes,
          children: [showHeader && !uniqueHeaderSingleRecordTable && renderHeader(), jsx("tbody", {
            children: data.map((record, rowIndex) => jsxs(Fragment$1, {
              children: [jsxs("tr", {
                role: "row",
                className: classNames(resolveRowClassName(record)),
                onDoubleClick: event => handleRowDoubleClick(event, record, rowIndex),
                children: [selection === SelectionType.CHECKBOX && jsx("td", {
                  role: "cell",
                  className: "cell-checkbox text-center",
                  children: jsx("input", {
                    type: "checkbox",
                    checked: selectedRows.includes(rowIndex),
                    onChange: event => handleSelect(event, rowIndex),
                    "aria-label": "Select"
                  })
                }), visibleColumns.map((column, colIndex) => jsx("td", {
                  role: "cell",
                  className: classNames(column.contentClassName, Util.getAlignClassName(column.contentAlign)),
                  style: {
                    ...((!showHeader || showHeader && uniqueHeaderSingleRecordTable) && column.width ? {
                      width: column.width
                    } : {})
                  },
                  onDoubleClick: event => handleCellDoubleClick(rowIndex, colIndex, record, column),
                  children: renderCellValue(record, column, rowIndex)
                }, `td-${colIndex}`))]
              }, `tr-${rowIndex}`), typeof rowFooterRender === "function" && jsx("tr", {
                className: "tr-row-footer",
                children: jsx("td", {
                  role: "cell",
                  className: "td-row-footer",
                  colSpan: (selection === SelectionType.CHECKBOX ? 1 : 0) + visibleColumns.length,
                  children: rowFooterRender(record, rowIndex)
                })
              }, `tr-footer-${rowIndex}`), columnsDetail && columnsDetail.length > 0 && jsx("tr", {
                role: "row",
                className: "tr-detail",
                children: jsx("td", {
                  colSpan: visibleColumns.length + (selection === SelectionType.CHECKBOX ? 1 : 0),
                  children: jsxs("table", {
                    role: "table",
                    className: classesDetail,
                    children: [showDetailHeader && jsx("thead", {
                      className: "table-light table-nowrap",
                      children: jsx("tr", {
                        role: "row",
                        children: columnsDetail.map((columnDetail, index) => jsxs("th", {
                          role: "columnheader",
                          className: classNames(columnDetail.headerClassName, Util.getAlignClassName(columnDetail.headerAlign), {
                            "header-filter": !columnDetail.disableFilters
                          }),
                          style: {
                            ...(columnDetail.width ? {
                              width: columnDetail.width
                            } : {})
                          },
                          onClick: () => handleSort(columnDetail),
                          children: [columnDetail.header, generateSortingIndicator(columnDetail)]
                        }, `td-detail-${index}`))
                      }, `tr-detail-${rowIndex}`)
                    }), jsx("tbody", {
                      children: record[dataDetailProperty].map((recordDetail, rowDetailIndex) => jsxs(Fragment$1, {
                        children: [jsx("tr", {
                          role: "row",
                          className: classNames(resolveDetailRowClassName(recordDetail, record)),
                          onDoubleClick: event => handleRowDoubleClickDetail(event, recordDetail, record, rowDetailIndex, rowIndex),
                          children: columnsDetail.map((columnDetail, colDetailIndex) => jsx("td", {
                            role: "cell",
                            className: classNames(columnDetail.contentClassName, Util.getAlignClassName(columnDetail.contentAlign)),
                            style: {
                              ...((!showHeader || showHeader && uniqueHeaderSingleRecordTable) && columnDetail.width ? {
                                width: columnDetail.width
                              } : {})
                            },
                            children: renderCellValue(recordDetail, columnDetail, rowDetailIndex, record, rowIndex)
                          }, colDetailIndex))
                        }), typeof rowDetailFooterRender === "function" && jsx("tr", {
                          className: "tr-row-detail-footer",
                          children: jsx("td", {
                            role: "cell",
                            className: "td-row-detail-footer",
                            colSpan: columnsDetail.length,
                            children: rowDetailFooterRender(recordDetail, record, rowDetailIndex, rowIndex)
                          })
                        })]
                      }, rowDetailIndex))
                    })]
                  })
                })
              }, `tr-detail-${rowIndex}`)]
            }, `fragement-${rowIndex}`))
          })]
        })
      }) : jsx("div", {
        className: `alert alert-info text-center`,
        role: "alert",
        children: finalNoRecordMessage
      })
    });
  };
  const renderCards = data => {
    const idx = s => order.indexOf(s);
    const hasValue = (record, column) => {
      let value = Util.getColumnValue(column, record);
      if (Util.isMinOrDefaultValue(value, column.type)) {
        value = null;
      }
      return value ? true : false;
    };
    // filter detail columns by responsive rules
    const visibleDetailColumns = (columnsDetail ?? []).filter(c => {
      if (c.showOn?.length) return c.showOn.includes(screenSize);
      if (c.hiddenOn?.includes(screenSize)) return false;
      if (c.hideBelow && idx(screenSize) < idx(c.hideBelow)) return false;
      if (c.hideAbove && idx(screenSize) > idx(c.hideAbove)) return false;
      return true;
    });
    const resolveRowClassName = record => {
      if (!rowClassName) return "";
      return typeof rowClassName === "function" ? rowClassName(record) : rowClassName;
    };
    const resolveDetailRowClassName = (detail, parent) => {
      if (!rowDetailClassName) return "";
      return typeof rowDetailClassName === "function" ? rowDetailClassName(detail, parent) : rowDetailClassName;
    };
    // ➜ No records: show alert
    if (!data || data.length === 0) {
      return jsx("div", {
        className: `alert alert-info text-center my-3`,
        role: "alert",
        children: finalNoRecordMessage
      });
    }
    return jsx("div", {
      className: "card-list",
      children: data.map((record, rowIndex) => jsxs("div", {
        /* <-- apply "tr" main class to card wrapper */
        className: classNames("card mb-3 p-3 shadow-sm", resolveRowClassName(record)),
        onDoubleClick: e => onDoubleClick?.(record, rowIndex),
        children: [visibleColumns.map((column, colIndex) => {
          // content already processed (includes hideMinOrDefaultValue, mask, format, etc.)
          const cellContent = renderCellValue(record, column, rowIndex);
          const coi = column.cardOnlyIfValue;
          if (typeof coi === "function" && !coi(record) ||
          // function: decides based on record
          coi === true && !hasValue(record, column) // boolean true: only renders if has value
          ) {
            return null;
          }
          const showHeader = column.cardHeaderVisible !== false;
          return jsxs("div", {
            className: "row gx-2 border-bottom py-2",
            children: [showHeader && jsx("div", {
              className: classNames("col-4", column.headerClassName, Util.getAlignClassName(column.headerAlignCard)),
              children: jsx("strong", {
                children: column.header
              })
            }), jsx("div", {
              className: classNames(showHeader ? "col-8" : "col-12", column.contentClassName, Util.getAlignClassName(column.contentAlignCard, AlignType.END)),
              children: cellContent
            })]
          }, colIndex);
        }), typeof rowFooterRender === "function" && jsx("div", {
          className: "card-row-footer pt-2",
          children: rowFooterRender(record, rowIndex)
        }), columnsDetail && columnsDetail.length > 0 && dataDetailProperty && Array.isArray(record[dataDetailProperty]) && record[dataDetailProperty].length > 0 && jsx("div", {
          className: "mt-3",
          children: record[dataDetailProperty].map((recordDetail, rowDetailIndex) => jsxs("div", {
            className: classNames("card mb-2 p-2 bg-light-subtle", resolveDetailRowClassName(recordDetail, record)),
            onDoubleClick: () => onDoubleClickDetail?.(recordDetail, record, rowDetailIndex, rowIndex),
            children: [visibleDetailColumns.map((columnDetail, colDetailIndex) => {
              const cellDetail = renderCellValue(recordDetail, columnDetail, rowDetailIndex, record, rowIndex);
              const coi = columnDetail.cardOnlyIfValue;
              if (typeof coi === "function" && !coi(recordDetail) ||
              // function: decides based on record
              coi === true && !hasValue(recordDetail, columnDetail) // boolean true: only renders if has value
              ) {
                return null;
              }
              // in CARD, label depends only on cardHeaderVisible
              const showHeaderDetail = columnDetail.cardHeaderVisible !== false;
              return jsxs("div", {
                className: "row gx-2 border-bottom py-2",
                children: [showHeaderDetail && jsx("div", {
                  className: classNames("col-4", columnDetail.headerClassName, Util.getAlignClassName(columnDetail.headerAlignCard ?? columnDetail.headerAlign)),
                  children: jsx("strong", {
                    children: columnDetail.header
                  })
                }), jsx("div", {
                  className: classNames(showHeaderDetail ? "col-8" : "col-12", columnDetail.contentClassName, Util.getAlignClassName(columnDetail.contentAlignCard ?? columnDetail.contentAlign, AlignType.END)),
                  children: cellDetail
                })]
              }, colDetailIndex);
            }), typeof rowDetailFooterRender === "function" && jsx("div", {
              className: "card-row-detail-footer pt-2",
              children: rowDetailFooterRender(recordDetail, record, rowDetailIndex, rowIndex)
            })]
          }, rowDetailIndex))
        })]
      }, rowIndex))
    });
  };
  const renderContent = rows => viewMode === TableViewMode.CARD ? renderCards(rows) : renderTable(rows);
  // Show loading state
  if (loading) {
    return jsx(Loading, {
      text: finalLoadingText
    });
  }
  // No Table/index.tsx, MODIFIQUE o return final:
  // Table/index.tsx - RETURN SECTION ONLY
  return jsxs("div", {
    className: "smart-table-container",
    children: [(paginationPosition === "top" || paginationPosition === "both") && renderPagination(), !singleRecordTable ? jsx(Fragment$1, {
      children: renderContent(sortedData)
    }) : jsxs(Fragment$1, {
      children: [uniqueHeaderSingleRecordTable && viewMode === TableViewMode.TABLE && renderTableHeader(), sortedData.map((record, index) => jsx(Fragment$1, {
        children: renderContent([record])
      }, `fra-${index}`))]
    }), (paginationPosition === "bottom" || paginationPosition === "both") && renderPagination()]
  });
});

var AlertType;
(function (AlertType) {
  AlertType[AlertType["Success"] = 1] = "Success";
  AlertType[AlertType["Warning"] = 2] = "Warning";
  AlertType[AlertType["Danger"] = 3] = "Danger";
  AlertType[AlertType["Info"] = 4] = "Info";
})(AlertType || (AlertType = {}));
function Alert(props) {
  const {
    type,
    children,
    className
  } = props;
  let classes = "";
  switch (type) {
    case AlertType.Danger:
      {
        classes = "alert-danger";
      }
      break;
    case AlertType.Warning:
      {
        classes = "alert-warning";
      }
      break;
    case AlertType.Success:
      {
        classes = "alert-success";
      }
      break;
    case AlertType.Info:
      {
        classes = "alert-info";
      }
      break;
  }
  classes = mapToCssModules(classNames(classes, className));
  return jsx(Fragment, {
    children: jsx("div", {
      className: `alert ${classes} text-center`,
      role: "alert",
      children: children
    })
  });
}

export { Alert, CharacterCasing, Column, ColumnSize, Container, Editor, Hidden, IconPosition, Input, LabelMode, Loading, MonthDay, Note, OptionsSource, Row, ScreenSize, Table, TextInput, TooltipPosition, ValidationMessage, ValidationResult, ValueType, YesNo, configManager, useSmartConfig };
//# sourceMappingURL=index.esm.js.map
