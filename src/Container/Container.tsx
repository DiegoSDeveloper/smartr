import React, {
  ReactNode,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";
import { Editor, EditorRef } from "../Editor/Editor";
import { ValidationResult } from "../ValidationResult";

export interface ContainerProps {
  children?: ReactNode;
}
export interface ContainerRef {
  validate: () => Promise<ValidationResult[]>;
  getEditors: () => EditorRef[];
}
export const Container = forwardRef<ContainerRef, ContainerProps>(
  (props, ref) => {
    const inputRefs = useRef<EditorRef[]>([]);

    const { children } = props;

    inputRefs.current = [];
    async function validate(): Promise<ValidationResult[]> {
      const validationPromises = inputRefs.current.map(async (ref) => {
        return await ref.validate();
      });

      const validationResults = await Promise.all(validationPromises);
      const list = validationResults.flat();
      return list;
    }
    function getEditors(): EditorRef[] {
      return inputRefs.current;
    }
    useImperativeHandle(ref, () => ({
      validate,
      getEditors,
    }));
    const handleEditorRef = useCallback(
      (ref: EditorRef | null) => {
        if (ref) {
          const exists = inputRefs.current.some(
            (existingRef) =>
              existingRef.getName() === ref.getName() &&
              existingRef.getId() === ref.getId()
          );
          if (!exists) {
            inputRefs.current.push(ref);
          }
          if (ref.forwardRef) {
            ref.forwardRef(ref);
          }
        }
      },
      [children]
    );

    const mapEditorsRecursively = (children: React.ReactNode) => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === Editor) {
            return React.cloneElement(child, {
              ...child.props,
              ref: (ref: EditorRef) => handleEditorRef(ref),
            });
          } else if (child.props.children) {
            const newChildren = mapEditorsRecursively(child.props.children);
            return React.cloneElement(child, {
              ...child.props,
              children: newChildren,
            });
          }
        }
        return child;
      });
    };
    return <>{mapEditorsRecursively(children)}</>;
  }
);
