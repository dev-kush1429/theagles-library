import React from "react";
import InlineEditableDiv from "./inlineEditableDiv";
import InlineReadOnlyDiv from "./inlineReadOnlyDiv";

const InlineDiv = (props) => {
  const {
    isEditMode,
    className,
    keyProperty,
    property,
    setData,
    updateProps,
    value,
  } = props;

  if (isEditMode)
    return (
      <InlineEditableDiv
        value={value}
        className={className}
        updateProps={updateProps}
        property={property}
        keyProperty={keyProperty}
        setData={setData}
        isEditMode={isEditMode}
      />
    );

  return <InlineReadOnlyDiv value={value} className={className} />;
};

export default InlineDiv;
