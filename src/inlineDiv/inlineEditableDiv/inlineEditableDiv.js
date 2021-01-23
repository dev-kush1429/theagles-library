import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import config from "../../config";

const { tinyMCE } = config;

const InlineEditableDiv = (props) => {
  const {
    isEditMode,
    className,
    keyProperty,
    property,
    updateProps,
    value,
    setData,
  } = props;

  const handleEditorChange = (content, editor) => {
    updateProps(property, keyProperty, content, setData);
  };

  return (
    <div className={`editable-div ${className}`}>
      {isEditMode && (
        <Editor
          initialValue={value}
          inline={true}
          // fontsize_formats="8pt,10pt,12pt,14pt,16pt,18pt,20pt,22pt,24pt,26pt,28pt,30pt,32pt,34pt,36pt"
          apiKey={tinyMCE}
          init={{
            color_map: [
              "000000",
              "Black",
              "808080",
              "Gray",
              "FFFFFF",
              "White",
              "FF0000",
              "Red",
              "FFFF00",
              "Yellow",
              "008000",
              "Green",
              "0000FF",
              "Blue",
            ],
            fontsize_formats:
              "10pt 12pt 13pt 14pt 15pt 16pt 17pt 18pt 19pt 20pt 22pt 24pt 26pt 28pt 30pt 32pt 34pt 36pt 38pt 40pt 44pt 48pt",
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              " fontselect | fontsizeselect | forecolor | alignleft aligncenter alignright alignjustify | bullist numlist  ",
          }}
          onEditorChange={handleEditorChange}
        />
      )}
      {!isEditMode && value}
    </div>
  );
};

export default InlineEditableDiv;
