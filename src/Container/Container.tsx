import React, { ReactNode, forwardRef, useImperativeHandle } from "react";
import { EditorRef } from "../Editor/Editor";
import { ValidationResult } from "../ValidationResult";
import ContainerContext, { useContainer } from "./ContainerContext"; // Ajuste o caminho

export interface ContainerProps {
  children?: ReactNode;
}

export interface ContainerRef {
  validate: () => Promise<ValidationResult[]>;
  getEditors: () => EditorRef[];
}

export const Container = forwardRef<ContainerRef, ContainerProps>(
  (props, ref) => {
    const { contextValue, getEditors } = useContainer();

    async function validate(): Promise<ValidationResult[]> {
      const editors = getEditors();

      const validationPromises = editors.map(async (ref) => {
        return await ref.validate();
      });

      const validationResults = await Promise.all(validationPromises);
      const list = validationResults.flat();
      return list;
    }

    useImperativeHandle(ref, () => ({
      validate,
      getEditors,
    }));

    return (
      <ContainerContext.Provider value={contextValue}>
        {props.children}
      </ContainerContext.Provider>
    );
  }
);
