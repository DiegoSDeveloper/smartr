import React, { createContext, useContext, useRef, useCallback } from "react";
import { EditorRef } from "../Editor/Editor";

interface ContainerContextType {
  registerEditor: (editor: EditorRef) => void;
  unregisterEditor: (editor: EditorRef) => void;
}

const ContainerContext = createContext<ContainerContextType>({
  registerEditor: () => {},
  unregisterEditor: () => {},
});

export const useContainerContext = () => useContext(ContainerContext);

export const useContainer = () => {
  const editorsRef = useRef<EditorRef[]>([]);

  const registerEditor = useCallback((editor: EditorRef) => {
    const editorId = editor.getId();
    const editorName = editor.getName();

    const alreadyExists = editorsRef.current.some(
      (existingEditor) => existingEditor.getId() === editorId
    );

    if (!alreadyExists) {
      editorsRef.current.push(editor);
    }
  }, []);

  const unregisterEditor = useCallback((editor: EditorRef) => {
    const editorId = editor.getId();

    editorsRef.current = editorsRef.current.filter(
      (e) => e.getId() !== editorId
    );
  }, []);

  const getEditors = useCallback((): EditorRef[] => {
    return [...editorsRef.current];
  }, []);

  return {
    registerEditor,
    unregisterEditor,
    getEditors,
    contextValue: {
      registerEditor,
      unregisterEditor,
    },
  };
};
export default ContainerContext;
