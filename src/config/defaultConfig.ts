// defaultConfig.ts - Clean version for NPM package
export const defaultConfig = {
  // ============================================================================
  // CORE BEHAVIOR CONFIGURATION
  // ============================================================================
  behavior: {
    validation: {
      validateOnBlur: true,
      validateOnSubmit: true,
    },
    input: {
      hasInputGroup: true,
      prependIconAfterInput: true,
      showPasswordIcon: true,
      thousandsSeparator: ".",
      decimalSeparator: ",",
      decimalPlaces: 2,
    },
    file: {
      maxFiles: 10,
      maxFilesPlaceholder: 5,
      maxFileSize: 300, // in KB
      filePlaceholderText: "Select a file...",
    },
    select: {
      optionsId: "id",
      optionsDescription: "description",
      optionsToolTip: "tooltip",
      optionsGroup: "group",
      optionsNoneSelectedValue: "",
      optionsFirstSelected: false,

      optionsLimiteDescriptionSelected: 3,
      optionsMultipleSeparatorValue: ",",
      optionsMultipleSeparatorDescription: ", ",
    },
    internationalization: {
      translateToken: "SmartRTranslationKey",
      translateText: false,
    },
  },

  // ============================================================================
  // COMPONENT-SPECIFIC CONFIGURATION
  // ============================================================================
  components: {
    // TABLE COMPONENT
    table: {
      behavior: {
        timeZone: "UTC",
        culture: "en-US",
        sourceValueProperty: "id",
        sourceDescriptionProperty: "description",
        sourceBadgeProperty: "badge",
        pageSize: 10,
        pageSizes: [10, 25, 50, 100],
      },
      classes: {
        badge: "badge bg-link rounded-pill font-size-12",
        // Table Pagination specific classes
        pagination: {
          container:
            "table-pagination d-flex justify-content-between align-items-center flex-wrap",
          info: "pagination-info",
          controls: "pagination-controls",
          pagination: "pagination pagination-rounded mb-sm-0 mb-0",
          pageItem: "page-item",
          pageLink: "page-link",
          pageInfo: "page-info bg-transparent border-0 text-dark fw-semibold",
          pageIndicatorBadge: "page-indicator-badge",
          activePage: "active",
          disabledPage: "disabled",
        },
      },
      icons: {
        sortAscending: "fas fa-sort-up",
        sortDescending: "fas fa-sort-down",
        sortDefault: "fas fa-sort",
        firstPage: "mdi mdi-chevron-double-left",
        previousPage: "mdi mdi-chevron-left",
        nextPage: "mdi mdi-chevron-right",
        lastPage: "mdi mdi-chevron-double-right",
      },
      texts: {
        showing: "Showing from",
        to: "to",
        of: "of",
        records: "records",
        firstPage: "Go to first page",
        previousPage: "Go to previous page",
        nextPage: "Go to next page",
        lastPage: "Go to last page",
        page: "Page",
        noRecordMessage: "No records to display.",
        loadingText: "Loading...",
        searchPlaceholder: "Search...",
        paginationText: "Showing {0} to {1} of {2} entries",
      },
    },

    // LOADING COMPONENT
    loading: {
      classes: {
        container: "smart-loading",
        containerSm: "smart-loading-sm",
        containerMd: "smart-loading-md",
        containerLg: "smart-loading-lg",
        spinner: "smart-loading-spinner",
        text: "smart-loading-text",
      },
    },

    // SELECT COMPONENT
    select: {
      classes: {
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
      texts: {
        filterPlaceholder: "type to search...",
        multipleSelectAll: "Select all",
        multipleSelectNone: "Select none",
        multipleSelected: "Selected",
        multipleNoneSelected: "None selected",
        optionsNoneSelectedText: "None selected",
        optionsNoGroup: "Others",
      },
    },

    // EDITOR COMPONENT (Main form component)
    editor: {
      classes: {
        controlGroup: "form-group",
        controlGroupDisabledControl: "disabled",
        horizontalFormRow: "mb-1",
        horizontalLabel: "col-form-label",
        input: "form-control",
        label: "form-label float-label",
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
        inputGroupShowPasswordIcon:
          "input-group-text inside-input show-password",
        labelNote: "form-text text-muted note",
        invalid: "is-invalid",
      },
      placeHolders: {
        phone: "(000) 000-0000",
      },
    },

    // RADIO & CHECKBOX COMPONENTS
    radio: {
      classes: {
        groupList: "radio-group",
        group: "form-check",
        groupInLine: "form-check form-check-inline",
        input: "form-check-input",
        label: "form-check-label",
        optionsGroup: "radio-options-group",
      },
    },

    checkbox: {
      classes: {
        group: "form-check",
        input: "form-check-input",
        label: "form-check-label",
      },
    },

    // VALIDATION COMPONENTS
    validation: {
      classes: {
        messageError: "error-validation-message",
        messageSuccess: "success-validation-message",
        messageWarning: "warning-validation-message",
      },
    },

    // TOOLTIP COMPONENT
    tooltip: {
      width: 250,
      classes: {
        top: "smart-tooltip top",
        bottom: "smart-tooltip bottom",
        left: "smart-tooltip left",
        right: "smart-tooltip right",
        overlay: "tooltip-overlay",
      },
    },

    alert: {
      textAlig: "center",
      classes: {
        container: "alert",
        success: "alert-success",
        warning: "alert-warning",
        danger: "alert-danger",
        info: "alert-info",
      },
    },
  },

  // ============================================================================
  // GLOBAL RESOURCES
  // ============================================================================
  resources: {
    // ICONS LIBRARY
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
    },

    // ICONS POSITION CONFIGURATION
    iconsPosition: {
      money: "start",
      percent: "start",
      date: "start",
      email: "start",
      phone: "start",
      mobile: "start",
      fax: "start",
      password: "start",
      time: "start",
      card: "start",
      fastSearch: "start",
      note: "start",
    },

    // VALIDATION MESSAGES
    validationMessages: {
      minCharacter: "Please enter at least 1 character",
      minCharacters: "Please enter at least %s1 characters",
      maxCharacter: "Please enter at most 1 character",
      maxCharacters: "Please enter at most %s1 characters",
      minMaxCharacters:
        "This value must be between %s1 and %s2 characters long",
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
    },

    // FILE MANAGEMENT TEXTS
    fileTexts: {
      downloadTooltip: "Click here to download the file",
      deleteTooltip: "Click here to delete the file",
      uploadTooltip: "Click here to choose a file",
      totalSelectedFiles: "Selected files",
    },

    // MASKS AND FORMATS
    masks: {
      phone: "(000) 000-0000",
      phonePlaceholder: "(000) 000-0000",
    },
  },

  // ============================================================================
  // HTML TAGS CONFIGURATION (Legacy - consider moving to components)
  // ============================================================================
  tags: {
    columnTag: "div",
    invalidFeedbackTag: "div",
    editorButtonTag: "span",
  },
};

export type SmartRConfig = typeof defaultConfig;

// Deep partial type for nested configuration objects
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type PartialSmartRConfig = DeepPartial<SmartRConfig>;
