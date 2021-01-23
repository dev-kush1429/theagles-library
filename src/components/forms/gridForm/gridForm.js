import React, { useState } from "react";
import { Container, Form, Col } from "react-bootstrap";
import { StyledInput, FormWrapper, Button, TextArea } from "../styled.form";
import defaultProps from "./gridFormProps";
import baseHelper from "../../../helper/baseHelper";
import InlineDiv from "../../../inlineDiv";

const { getPropValue } = baseHelper;

const GetInlineInput = (inputProp) => {
  return (
    <Col md={6}>
      <Form.Group>
        <StyledInput
          type={inputProp.type}
          name={inputProp.name}
          {...inputProp.inputStyleProps}
          onChange={(e) => {
            const value = e.target.value;
            inputProp.setState(value);
          }}
          value={inputProp.value}
          placeholder={inputProp.placeholder}
          required
        />
      </Form.Group>
    </Col>
  );
};

const Inline = (inline) => {
  return (
    <InlineDiv
      isEditMode={inline.isEditMode}
      keyProperty={inline.keyProperty}
      property="content"
      setData={inline.setData}
      updateProps={inline.updateProps}
      value={inline.value}
    />
  );
};

const GridForm = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const newProps = { ...defaultProps.props, ...props };
  const {
    style,
    content,
    isEditMode,
    setData,
    updateProps,
    onSubmitCallback,
  } = newProps;

  const formWrapperProps = {
    color: getPropValue("text", "bodyColor", style.bodyColor, "style"),
    formBg: getPropValue("text", "background", style.background, "style"),
  };

  const inputStyleProps = {
    background: getPropValue("text", "inputBg", style.inputBg, "style"),
    borderColor: getPropValue(
      "text",
      "borderColor",
      style.borderColor,
      "style"
    ),
    inputColor: getPropValue("text", "inputColor", style.inputColor, "style"),
    inputRadius: getPropValue(
      "text",
      "inputRadius",
      style.inputRadius,
      "style"
    ),
    fontSize: getPropValue(
      "text",
      "inputFontSize",
      style.inputFontSize,
      "style"
    ),
    placeholderFontSize: getPropValue(
      "text",
      "placeholderFontSize",
      style.placeholderFontSize,
      "style"
    ),
    placeholderColor: getPropValue(
      "text",
      "placeholderColor",
      style.placeholderColor,
      "style"
    ),
  };

  const fullNamePlaceholder = getPropValue(
    "text",
    "fullName",
    content.fullName,
    "content"
  );
  const emailPlaceholder = getPropValue(
    "text",
    "email",
    content.email,
    "content"
  );
  const phonePlaceholder = getPropValue(
    "text",
    "number",
    content.number,
    "content"
  );
  const cityPlaceholder = getPropValue("text", "city", content.city, "content");
  const messagePlaceholder = getPropValue(
    "text",
    "message",
    content.message,
    "content"
  );

  const buttonProps = {
    buttonBg: getPropValue("text", "buttonBg", style.buttonBg, "style"),
    hoverBg: getPropValue(
      "text",
      "buttonHoverBg",
      style.buttonHoverBg,
      "style"
    ),
    color: getPropValue("text", "buttonColor", style.buttonColor, "style"),
    hoverColor: getPropValue(
      "text",
      "buttonHoverColor",
      style.buttonHoverColor,
      "style"
    ),
    btnRadius: getPropValue(
      "text",
      "buttonRadius",
      style.buttonRadius,
      "style"
    ),
    borderColor: getPropValue(
      "text",
      "buttonBorderColor",
      style.buttonBorderColor,
      "style"
    ),
    hoverBorderColor: getPropValue(
      "text",
      "buttonHoverBorderColor",
      style.buttonHoverBorderColor,
      "style"
    ),
    fontSize: getPropValue("text", "buttonFont", style.buttonFont, "style"),
  };
  const formTitle = getPropValue(
    "text",
    "formTitle",
    content.formTitle,
    "content"
  );
  const buttonText = getPropValue("text", "button", content.button, "content");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      city,
      email: newProps.media.email,
      fullName,
      message,
      number: phone,
      senderEmail: email,
    };
    onSubmitCallback(data);
  };

  const inputs = [
    {
      type: "text",
      name: "fullName",
      setState: setFullName,
      value: fullName,
      placeholder: fullNamePlaceholder,
    },
    {
      type: "email",
      name: "email",
      setState: setEmail,
      value: email,
      placeholder: emailPlaceholder,
    },
    {
      type: "number",
      name: "number",
      setState: setPhone,
      value: phone,
      placeholder: phonePlaceholder,
    },
    {
      type: "text",
      name: "city",
      setState: setCity,
      value: city,
      placeholder: cityPlaceholder,
    },
  ];

  return (
    <Container className="mb-4">
      <FormWrapper className="form-wrapper p-4 py-lg-5" {...formWrapperProps}>
        <div className="p-sm-4">
          {formTitle && (
            <Inline
              className="mb-4 mb-md-5"
              value={formTitle}
              isEditMode={isEditMode}
              setData={setData}
              updateProps={updateProps}
              keyProperty="formTitle"
            />
          )}

          <div className="form-wrapper">
            <Form>
              <Form.Row className="justify-content-between">
                {inputs.map((input) => (
                  <GetInlineInput
                    type={input.type}
                    name={input.name}
                    inputStyleProps={inputStyleProps}
                    setState={input.setState}
                    value={input.value}
                    placeholder={input.placeholder}
                  />
                ))}
              </Form.Row>
              <Form.Group controlId="formBlog" className="w-100">
                <TextArea
                  rows="3"
                  type="text"
                  name="message"
                  {...inputStyleProps}
                  value={message}
                  placeholder={messagePlaceholder}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>
            </Form>
            <Button {...buttonProps} onClick={onSubmit}>
              {buttonText}
            </Button>
          </div>
        </div>
      </FormWrapper>
    </Container>
  );
};
export default React.memo(GridForm);
