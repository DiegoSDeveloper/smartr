/**
 * Screen size preffix
 */
export enum ScreenSize {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
  XXL = "xxl", 
}

export enum ColumnSize {
  Col1 = 1,
  Col2 = 2,
  Col3 = 3,
  Col4 = 4,
  Col5 = 5,
  Col6 = 6,
  Col7 = 7,
  Col8 = 8,
  Col9 = 9,
  Col10 = 10,
  Col11 = 11,
  Col12 = 12,
}

export enum Input {
  Text = 1,
  Money = 2,
  Date = 4,
  Email = 8,
  Select = 16,
  Phone = 32,
  Mobile = 64,
  Password = 128,
  CheckBox = 512,
  Percent = 1024,
  Search = 2048,
  LongText = 4096,
  Hidden = 8192,
  Integer = 16384,
  Time = 32768,
  Label = 65536,
  Fax = 131072,
  Card = 262144,
  Html = 524288,
  Radio = 1048576,
  FastSearch = 2097152,
  Decimal = 4194304,
  File = 8388608,
  Month = 16777216,
}
export enum YesNo {
  Yes,
  No,
}

export enum MonthDay {
  Start,
  End,
  Custom,
}

export enum Note {
  Tooltip,
  Popover,
  Label,
}

export enum CharacterCasing {
  Upper,
  Lower,
  Normal,
}
export enum OptionsSource {
  Enum,
  Values,
  DataSource,
  YesNo,
}

export enum TextInput {
  Integer,
  Decimal,
  Letter,
  AlphaNumeric,
}

export enum ValueType {
  Integer,
  Float,
  Boolean,
  String,
  Flag,
  Array,
}

export enum Hidden {
  Undefined = 0,
  XSDown = 1,
  SMDown = 2,
  MDDown = 4,
  LGDown = 8,
  XLDown = 16,

  XSUp = 32,
  SMUp = 64,
  MDUp = 128,
  LGUp = 256,
  XLUp = 512,
}
export enum IconPosition {
  Start = 1,
  End = 2,
  Both = 3,
}
export enum ValidationMessage {
  Error = 1,
  Success = 2,
  Warning = 3,
}
export enum TooltipPosition {
  Top = 1,
  Bottom = 2,
  Left = 3,
  Right = 4,
}

export enum LabelMode {
  Normal = 1,
  CheckBox = 2,
  RadioButton = 3,
}
