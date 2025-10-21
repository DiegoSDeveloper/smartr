import { ValidationMessage } from "./types";

export class ValidationResult {
  Name: string | undefined;
  Title: string | undefined;
  Type: ValidationMessage | undefined;
  Message: string | undefined;
  Value: any | undefined;
  constructor(
    name: string,
    title: string,
    type: ValidationMessage,
    message: string,
    value: any,
  ) {
    this.Type = type;
    this.Message = message;
    this.Name = name;
    this.Title = title;
    this.Value = value;
  }
}
