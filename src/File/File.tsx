import React, { useRef, useState } from "react";

import { EditorInput } from "../EditorInput/EditorInput";
import { Input, TooltipPosition } from "../types";
import { Tooltip } from "../Tooltip/Tooltip";
import { useSmartConfig } from "../hook/useSmartConfig";

interface FilePropTypes {
  id?: string;
  name?: string;
  placeholder?: string;
  maxFilesPlaceholder?: number;
  fileUrlDownload?: string;
  fileDownloadName?: string;
  editorAttributes: Record<string, any>;
  onDownloadFileClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onDeleteFileClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onBlurEvent?: (event: React.FocusEvent<HTMLInputElement>) => Promise<void>;
  onChangeEvent?: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  inputRef: React.MutableRefObject<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  className?: string;
}

export function File(props: FilePropTypes) {
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
  const [fileName, setFileName] = useState<string>();
  const inputUploadRef = useRef<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >(null);

  const finalInputRef = inputRef || inputUploadRef;
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
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

  const handleBlurEvent = async (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlurEvent) {
      let files: FileList | null;
      if (
        finalInputRef &&
        finalInputRef.current &&
        finalInputRef.current instanceof HTMLInputElement
      ) {
        files = finalInputRef.current.files;
      }
      const event = {
        target: {
          name: name,
          files: files as unknown as FileList,
        },
      };
      onBlurEvent(event as React.FocusEvent<HTMLInputElement>);
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
        files: [] as unknown as FileList,
      },
    };
    handleFileChange(event as React.ChangeEvent<HTMLInputElement>);
  };
  const inputAttributes: Record<string, string> = {};
  inputAttributes["type"] = "text";
  inputAttributes["readOnly"] = "readOnly";
  if (placeholder) {
    inputAttributes["placeholder"] = placeholder;
  }
  inputAttributes["defaultValue"] = fileName;

  const input = (
    <EditorInput
      type={Input.Text}
      inputType="input"
      editorAttributes={inputAttributes}
      onBlurEvent={handleBlurEvent}
      className={className}
    ></EditorInput>
  );
  const { value, ...restEditorAttributes } = editorAttributes;

  const inputUpload = (
    <EditorInput
      type={Input.File}
      inputType="input"
      editorAttributes={restEditorAttributes}
      inputRef={finalInputRef}
      onChangeEvent={handleFileChange}
      style={{ display: "none" }}
    ></EditorInput>
  );

  const deleteIconComponent =
    onDeleteFileClick || fileName ? (
      <Tooltip
        position={TooltipPosition.Top}
        text={config.texts.deleteFileTooltip}
      >
        <div
          className={config.classes.inputGroupAppendFile}
          onClick={fileName ? handleDeleteClick : onDeleteFileClick}
        >
          <span className={config.classes.inputGroupFileDeleteIcon}>
            <i className={config.icons.delete}></i>
          </span>
        </div>
      </Tooltip>
    ) : null;
  const downloadIconComponent =
    fileUrlDownload || onDownloadFileClick ? (
      <Tooltip
        position={TooltipPosition.Top}
        text={config.texts.downloadFileTooltip}
      >
        <div
          className={config.classes.inputGroupAppendFile}
          onClick={onDownloadFileClick ?? handleDownloadClick}
        >
          <span className={config.classes.inputGroupFileDownloadIcon}>
            <i className={config.icons.download}></i>
          </span>
        </div>
      </Tooltip>
    ) : null;
  const uploadIconComponent = (
    <Tooltip
      position={TooltipPosition.Top}
      text={config.texts.uploadFileTooltip}
    >
      <div
        className={config.classes.inputGroupAppendFile}
        onClick={handleUploadClick}
      >
        <span className={config.classes.inputGroupFileUploadIcon}>
          <i className={config.icons.upload}></i>
        </span>
      </div>
    </Tooltip>
  );
  const optionsGroup = React.createElement(
    "div",
    {
      className: config.classes.inputGroup,
    },
    input,
    deleteIconComponent,
    downloadIconComponent,
    uploadIconComponent,
    inputUpload,
  );

  return optionsGroup;
}
