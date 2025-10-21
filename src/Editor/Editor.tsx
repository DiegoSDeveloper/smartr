import React, {
  useState,
  useRef,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import { classNames } from "../Utils/utils";

import {
  CharacterCasing,
  IconPosition,
  Input,
  TextInput,
  TooltipPosition,
  ValidationMessage,
} from "../types";
import { ValidationResult } from "../ValidationResult";
import {
  applyMask,
  getDefaultHasIcon,
  getDefaultIcon,
  getDefaultIconPosition,
  getEditorAttributes,
  getValueAsType,
  getValueType,
  mapToCssModules,
  removeMask,
  validateEditorInputValue,
} from "../Utils/utils";
import { Column } from "../Column/Column";
import { Row } from "../Row/Row";
import { EditorPropType } from "./EditorPropType";
import { Label } from "../Label/Label";
import { CheckboxGroup } from "../CheckboxGroup/CheckboxGroup";
import { EditorInput } from "../EditorInput/EditorInput";
import { Radio } from "../Radio/Radio";
import Select from "../Select/Select";
import { File } from "../File/File";
import { EditorButton } from "../EditorButton/EditorButton";
import { useSmartConfig } from "../hook/useSmartConfig";

export interface EditorRef {
  validate: () => Promise<ValidationResult[]>;
  getId: () => string;
  getName: () => string;
  getTitle: () => string;
  getValue: () => any;
  getSubmit: () => boolean;
  setErrorList: (list: ValidationResult[]) => void;
  forwardRef?: (ref: EditorRef | null) => void;
}

export const Editor = forwardRef<EditorRef, EditorPropType>((props, ref) => {
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
  const inputRef = useRef<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >(null);
  const [validationList, setValidationList] = useState<ValidationResult[]>();
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
      } else if (
        listFormState &&
        listFormIndex !== undefined &&
        listFormIndex < listFormState.length
      ) {
        value = listFormState[listFormIndex][editorName];
      }
    } else if (state && state !== null && state !== undefined) {
      value = state;
    }
    return value;
  }
  function setStateValue(inputName: string, value: any) {
    // Atualização de um único formulário
    if (inputName && formState && dispatchFormState) {
      dispatchFormState((prevState) => {
        const newState = {
          ...prevState,
          [inputName]: value,
        };
        return newState;
      });
    }
    // Atualização de uma lista de formulários
    else if (
      listFormState &&
      dispatchListFormState &&
      listFormIndex !== undefined &&
      listFormIndex < listFormState.length
    ) {
      const newState = listFormState.map((item, index) => {
        if (index === listFormIndex) {
          const updatedItem = {
            ...item,
            [inputName]: value,
          };
          return updatedItem;
        }
        return item;
      });
      dispatchListFormState(newState);
    }
    // Atualização de estado genérico
    else if (dispatchState) {
      dispatchState((prevState) => {
        return value;
      });
    }
  }

  function validateInput(currentValue: any) {
    let list: ValidationResult[] = validateEditorInputValue(
      currentValue,
      props,
      editorMask
    );
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

  function setErrorList(list: ValidationResult[]) {
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

    if (
      (editorMask ||
        type === Input.Money ||
        type === Input.Decimal ||
        type === Input.Percent) &&
      currentValue &&
      !getMaskedValue
    ) {
      currentValue = removeMask(
        type,
        editorMask,
        currentValue,
        thousandsSeparator,
        decimalSeparator
      );
    }

    return getValueAsType(
      valueType,
      currentValue,
      optionsMultipleSeparatorValue
    );
  }
  async function validate(): Promise<ValidationResult[]> {
    let list: ValidationResult[] = [];
    const currentValue = getValue();
    if (validateDefaultOnSubmit) {
      list = validateInput(currentValue);
    }
    if (customValidationOnSubmit) {
      const customValidationResults = await customValidationOnSubmit(
        currentValue
      );
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
    setErrorList,
  }));

  const handleInputChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        name,
        value,
        files,
        type: inputCheckedType,
        checked,
      } = event.target;

      let newValue: any = files ?? value;
      // Se o tipo for checkbox ou radio, usa o valor de "checked"
      if (inputCheckedType === "checkbox") {
        newValue = checked;
      }

      // Aplica máscara se for necessário e o tipo for diferente de file, checkbox ou radio
      if (
        (editorMask ||
          type === Input.Money ||
          type === Input.Decimal ||
          type === Input.Percent) &&
        type !== Input.File &&
        type !== Input.CheckBox &&
        type !== Input.Radio
      ) {
        newValue = applyMask(
          type,
          editorMask,
          newValue,
          thousandsSeparator,
          decimalSeparator,
          decimalPlaces
        );
      }

      // Seta o valor no input ref, exceto se for file, checkbox ou radio
      if (
        inputRef.current &&
        type !== Input.File &&
        type !== Input.CheckBox &&
        type !== Input.Radio
      ) {
        inputRef.current.value = newValue || "";
      }

      // Conversão de valor conforme o tipo
      const changedValueType = getValueAsType(
        valueType,
        newValue,
        optionsMultipleSeparatorValue
      );

      // Validação, se necessário
      if (validateOnChange) {
        let list: ValidationResult[] = [];
        if (validateDefaultOnChange) {
          list = validateInput(changedValueType);
        }
        if (customValidationOnChange) {
          const customValidationResults = await customValidationOnChange(
            changedValueType
          );
          list = [...list, ...customValidationResults];
        }
        setValidationList(list);
        setIsInvalid(list.length > 0);
      }

      // Remove a máscara se necessário
      if (
        editorMask &&
        newValue &&
        !getMaskedValue &&
        type !== Input.File &&
        type !== Input.CheckBox &&
        type !== Input.Radio
      ) {
        newValue = removeMask(
          type,
          editorMask,
          newValue,
          thousandsSeparator,
          decimalSeparator
        );
      }

      const stateValue = getValueAsType(
        valueType,
        newValue,
        optionsMultipleSeparatorValue
      );
      setStateValue(name, stateValue);

      if (onChange) {
        onChange(
          event,
          getValueAsType(valueType, newValue, optionsMultipleSeparatorValue),
          id,
          name,
          type
        );
      }
    },
    [
      validateOnChange,
      onChange,
      customValidationOnChange,
      validateDefaultOnChange,
      editorMask,
      formState,
      state,
      listFormState,
    ]
  );

  const handleInputBlur = useCallback(
    async (event: React.FocusEvent<HTMLInputElement>) => {
      const { name, value, files } = event.target;
      let newValue: any = files ?? value;
      let validationValue = newValue;
      let isValid = true;
      if (validateOnBlur) {
        if (editorMask && validationValue && !getMaskedValue) {
          validationValue = removeMask(
            type,
            editorMask,
            validationValue,
            thousandsSeparator,
            decimalSeparator
          );
        }
        validationValue = getValueAsType(
          valueType,
          validationValue,
          optionsMultipleSeparatorValue
        );
        let list: ValidationResult[] = [];
        if (validateDefaultOnBlur) {
          list = validateInput(validationValue);
        }
        if (customValidationOnBlur) {
          const customValidationResults = await customValidationOnBlur(
            validationValue
          );
          list = [...list, ...customValidationResults];
        }
        setValidationList(list);
        setIsInvalid(list.length > 0);
        isValid = list.length === 0;
      }
      if (onBlur) {
        onBlur(event, validationValue, id, name, type);
      }
    },
    [
      validateOnBlur,
      editorMask,
      customValidationOnBlur,
      validateDefaultOnBlur,
      formState,
      state,
      listFormState,
      onBlur,
    ]
  );

  // Callback for handling key down events on text inputs.
  // This method validates the key pressed based on the expected input type.
  const handleInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      // Only process if the input is of type 'Input.Text' and a specific text input type is defined.
      if (type !== Input.Text || input === undefined) return;

      // Define allowed control keys that should always be permitted (e.g., navigation and editing keys).
      const allowedControlKeys = [
        "Backspace",
        "ArrowLeft",
        "ArrowRight",
        "Delete",
        "Tab",
        "Enter",
        "Escape",
        "Home",
        "End",
      ];

      // If CTRL is pressed, allow the key combination (this enables CTRL+V, CTRL+C, etc.)
      if (event.ctrlKey) return;

      // Switch based on the specific text input type to enforce different validation rules.
      switch (input) {
        case TextInput.Integer: {
          // For Integer input: allow only digits (0-9).
          if (allowedControlKeys.includes(event.key)) return;
          if (!/^[0-9]$/.test(event.key)) {
            event.preventDefault();
          }
          break;
        }
        case TextInput.Decimal: {
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
        case TextInput.Letter: {
          // For Letter input: allow only alphabet characters (A-Z and a-z).
          if (allowedControlKeys.includes(event.key)) return;
          if (!/^[a-zA-Z]$/.test(event.key)) {
            event.preventDefault();
          }
          break;
        }
        case TextInput.AlphaNumeric: {
          // For AlphaNumeric input: allow only letters and digits.
          if (allowedControlKeys.includes(event.key)) return;
          if (!/^[a-zA-Z0-9]$/.test(event.key)) {
            event.preventDefault();
          }
          break;
        }
        default:
          break;
      }
    },
    [type, input]
  );

  // Callback for handling paste events on text inputs.
  // This method validates the pasted text based on the expected input type before it is inserted.
  const handleInputPaste = useCallback(
    (event: React.ClipboardEvent<HTMLInputElement>) => {
      // Only process if the input is of type 'Input.Text' and a specific text input type is defined.
      if (type !== Input.Text || input === undefined) return;

      // Retrieve the text being pasted from the clipboard.
      const pastedText = event.clipboardData.getData("text");

      // Switch based on the specific text input type to enforce different validation rules for pasted content.
      switch (input) {
        case TextInput.Integer: {
          // For Integer input: allow only pasted text containing digits (0-9).
          if (!/^[0-9]+$/.test(pastedText)) {
            event.preventDefault();
          }
          break;
        }
        case TextInput.Decimal: {
          // For Decimal input: allow only pasted text that is a valid decimal number.
          // This regex allows an optional sequence of digits, an optional decimal point, and one or more digits.
          if (!/^(?:[0-9]*\.?[0-9]+)$/.test(pastedText)) {
            event.preventDefault();
          }
          break;
        }
        case TextInput.Letter: {
          // For Letter input: allow only pasted text containing alphabet characters.
          if (!/^[a-zA-Z]+$/.test(pastedText)) {
            event.preventDefault();
          }
          break;
        }
        case TextInput.AlphaNumeric: {
          // For AlphaNumeric input: allow only pasted text containing letters and digits.
          if (!/^[a-zA-Z0-9]+$/.test(pastedText)) {
            event.preventDefault();
          }
          break;
        }
        default:
          break;
      }
    },
    [type, input]
  );

  const onShowPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  let editorInput = null;
  let titleLabel = null;
  let noteLabel = null;

  let inputType = "input";
  let classes = config.classes.input;

  if (hasTitle && title) {
    titleLabel = (
      <Label
        id={id}
        htmlFor={id}
        title={title}
        titleBold={titleBold}
        required={required}
        tooltip={tooltip}
        toolTipPosition={toolTipPosition}
        horizontal={horizontal}
        size={horizontal ? labelSize : null}
        sm={horizontal ? labelSm : null}
        md={horizontal ? labelMd : null}
        lg={horizontal ? labelLg : null}
        xl={horizontal ? labelXl : null}
        xxl={horizontal ? labelXxl : null}
      ></Label>
    );
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
        if (
          editorValue &&
          (editorMask ||
            type === Input.Money ||
            type === Input.Decimal ||
            type === Input.Percent)
        ) {
          editorValue = applyMask(
            type,
            editorMask,
            editorValue,
            thousandsSeparator,
            decimalSeparator,
            decimalPlaces
          );
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
    dataSource =
      options && typeof options[Symbol.iterator] === "function"
        ? [...options]
        : [];

    if (
      dataSource.every((element) => {
        const type = typeof element;
        return type !== "object" && type !== "function";
      })
    ) {
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
      const groupedOptions = new Map<string, any[]>();

      // Agrupar as opções
      dataSource.forEach((option) => {
        const group = optionsGroup
          ? option[optionsGroup]
          : optionGetGroup
          ? optionGetGroup(option)
          : "Sem Grupo";

        if (!groupedOptions.has(group)) {
          groupedOptions.set(group, []);
        }
        groupedOptions.get(group)!.push(option);
      });

      // Criar elementos React agrupados
      innerChildren = Array.from(groupedOptions.entries()).map(
        ([groupName, groupOptions], groupIndex) => {
          const optionElements = groupOptions.map((option, optionIndex) => {
            return React.createElement(
              "option",
              {
                value: option[optionsId],
                key: `group-${groupIndex}-option-${optionIndex}`,
              },
              !optionGetDescription
                ? option[optionsDescription]
                : optionGetDescription(option)
            );
          });

          return React.createElement(
            "optgroup",
            {
              label: groupName,
              key: `group-${groupIndex}`,
            },
            optionElements
          );
        }
      );
    } else {
      // Lógica original para opções não agrupadas
      innerChildren = dataSource.map((option, index) => {
        return React.createElement(
          "option",
          { value: option[optionsId], key: index },
          !optionGetDescription ||
            (index === 0 && optionGetDescription && !optionsFirstSelected)
            ? option[optionsDescription]
            : optionGetDescription(option)
        );
      });
    }
  }

  classes = mapToCssModules(
    classNames(
      className,
      classes,
      isInvalid ? config.classes.invalid : null
    )
  );

  const editorAttributes = getEditorAttributes(
    props,
    isInvalid,
    editorValue,
    showPassword
  );

  switch (type) {
    case Input.CheckBox:
      {
        editorInput = (
          <CheckboxGroup
            id={id}
            checkBoxText={checkBoxText}
            required={required}
            titleBold={titleBold}
            tooltip={tooltip}
            toolTipPosition={toolTipPosition}
            children={
              <EditorInput
                type={type}
                inputType={inputType}
                editorAttributes={editorAttributes}
                checked={editorValue}
                onBlurEvent={handleInputBlur}
                onChangeEvent={handleInputChange}
                inputRef={inputRef}
                children={innerChildren}
                className={classes}
              ></EditorInput>
            }
          ></CheckboxGroup>
        );
      }
      break;
    case Input.Radio:
      {
        editorInput = (
          <Radio
            inline={inline}
            id={id}
            editorAttributes={editorAttributes}
            inputRadioRefs={inputRadioRefs}
            onBlurEvent={handleInputBlur}
            onChangeEvent={handleInputChange}
            options={options}
            optionsDescription={optionsDescription}
            optionsTooltip={optionsToolTip}
            optionsFirstSelected={optionsFirstSelected}
            optionsId={optionsId}
            optionsNoneSelectedValue={optionsNoneSelectedValue}
            value={editorValue}
            optionsNoneSelectedText={optionsNoneSelectedText}
            className={classes}
            inputRef={inputRef}
          ></Radio>
        );
      }
      break;
    case Input.Select:
      {
        editorInput = (
          <Select
            placeholder={placeholder}
            searchPlaceholder={optionsFilterPlaceholder}
            editorAttributes={editorAttributes}
            onBlurEvent={handleInputBlur}
            onChangeEvent={handleInputChange}
            options={options}
            optionsGrouped={optionsGrouped}
            optionsDescription={optionsDescription}
            optionGetDescription={optionGetDescription}
            optionGetGroup={optionGetGroup}
            optionsGroup={optionsGroup}
            optionsFirstSelected={optionsFirstSelected}
            optionsFilter={optionsFilter}
            optionsMultiple={optionsMultiple}
            enabled={enabled}
            readOnly={readOnly}
            optionsMultipleSeparatorValue={optionsMultipleSeparatorValue}
            optionsMultipleSeparatorDescription={
              optionsMultipleSeparatorDescription
            }
            children={innerChildren}
            optionsLimiteDescriptionSelected={optionsLimiteDescriptionSelected}
            optionsId={optionsId}
            optionsNoneSelectedValue={optionsNoneSelectedValue}
            value={editorValue}
            optionRenderer={optionRenderer}
            optionsNoneSelectedText={optionsNoneSelectedText}
            className={classes}
            inputRef={inputRef}
          />
        );
      }
      break;
    case Input.File:
      {
        editorInput = (
          <File
            id={id}
            name={editorName}
            editorAttributes={editorAttributes}
            onDownloadFileClick={onDownloadFileClick}
            onDeleteFileClick={onDeleteFileClick}
            fileUrlDownload={fileUrlDownload}
            fileDownloadName={fileDownloadName}
            placeholder={placeholder}
            maxFilesPlaceholder={maxFilesPlaceholder}
            onBlurEvent={handleInputBlur}
            onChangeEvent={handleInputChange}
            inputRef={inputRef}
            className={classes}
          ></File>
        );
      }
      break;

    default:
      {
        editorInput = (
          <EditorInput
            type={type}
            inputType={inputType}
            editorAttributes={editorAttributes}
            onBlurEvent={handleInputBlur}
            onChangeEvent={handleInputChange}
            onKeyDownEvent={type === Input.Text ? handleInputKeyDown : null}
            onPasteEvent={type === Input.Text ? handleInputPaste : null}
            inputRef={inputRef}
            children={innerChildren}
            className={classes}
            {...attributes}
          ></EditorInput>
        );
      }
      break;
  }

  if (type === Input.Hidden) {
    return editorInput;
  }

  if (note) {
    const noteClasses = mapToCssModules(
      classNames(config.classes.labelNote, noteClassName)
    );
    noteLabel = <label className={noteClasses}>{note}</label>;
  }

  let invalidElementList = [];
  if (
    (invalid && invalidMessage) ||
    (validationList && validationList.length > 0)
  ) {
    if (invalidMessage) {
      invalidElementList.push(
        React.createElement(
          config.invalidFeedbackTag,
          {
            key: 0,
            className: config.classes.validationMessageError,
          },
          String(invalidMessage)
        )
      );
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
      invalidElementList.push(
        React.createElement(
          config.invalidFeedbackTag,
          {
            key: index + 1,
            className: messageClassName,
          },
          String(item.Message)
        )
      );
    });
  }
  const prependIconComponent =
    hasIcon &&
    (iconPosition === IconPosition.Both ||
      iconPosition === IconPosition.Start) ? (
      <div className={config.classes.inputGroupPrependIcon}>
        <span className={config.classes.inputGroupIcon}>
          <i className={prependIcon}></i>
        </span>
      </div>
    ) : null;

  const appendIconComponent =
    hasIcon &&
    (iconPosition === IconPosition.Both ||
      iconPosition === IconPosition.End) ? (
      <div className={config.classes.inputGroupAppendIcon}>
        <span className={config.classes.inputGroupIcon}>
          <i className={appendIcon}></i>
        </span>
      </div>
    ) : null;

  const showPasswordIconComponent =
    type === Input.Password && enableShowPassword ? (
      <div
        className={
          showPasswordIconPosition === IconPosition.Start
            ? config.classes.inputGroupPrependIcon
            : config.classes.inputGroupAppendIcon
        }
      >
        <span
          className={config.classes.inputGroupShowPasswordIcon}
          onClick={onShowPasswordHandler}
        >
          <i className={showPassword ? hidePasswordIcon : showPasswordIcon}></i>
        </span>
      </div>
    ) : null;

  const prependButtonElements = prependButtons?.map((button, index) => (
    <EditorButton key={index} {...button} />
  ));

  const appendButtonElements = appendButtons?.map((button, index) => (
    <EditorButton key={index} {...button} />
  ));

  let inputGroup = (
    <div className={config.classes.inputGroup}>
      {prependButtonElements}
      {config.prependIconAfterInput && prependIconComponent}
      {(showPasswordIconPosition === IconPosition.Start ||
        showPasswordIconPosition === IconPosition.Both) &&
        showPasswordIconComponent}
      {editorInput}
      {!config.prependIconAfterInput && prependIconComponent}
      {(showPasswordIconPosition === IconPosition.End ||
        showPasswordIconPosition === IconPosition.Both) &&
        showPasswordIconComponent}
      {appendIconComponent}
      {appendButtonElements}
    </div>
  );

  if (!hasIcon && !(prependButtonElements || appendButtonElements)) {
    inputGroup = editorInput;
  }

  const classControlGroup = mapToCssModules(
    classNames(
      config.classes.controlGroup,
      isInvalid ? config.classes.invalid : "",
      enabled && type !== Input.File
        ? ""
        : config.classes.controlGroupDisabledControl
    )
  );
  if (!horizontal) {
    let section = React.createElement(
      "div",
      { className: classControlGroup },
      titleLabel,
      inputGroup,
      noteLabel,
      invalidElementList
    );
    let column = (
      <Column size={size} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
        {section}
      </Column>
    );

    if (createRow) {
      return <Row>{column}</Row>;
    } else if (createColumn) {
      return column;
    } else {
      return section;
    }
  } else {
    inputGroup = (
      <Column size={size} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
        {inputGroup}
      </Column>
    );
    return (
      <Row className={config.classes.horizontalFormRow}>
        {titleLabel} {inputGroup} {noteLabel} {invalidElementList}
      </Row>
    );
  }
});
