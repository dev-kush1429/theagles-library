import React from "react";
import { Container, Col } from "react-bootstrap";
import { StyledRow, Title, Info, Image, Paragraph } from "./styled.infoCard";
import baseHelper from "../../../helper/baseHelper";
import defaultProps from "./defaultProps";
import InlineDiv from "../../../inlineDiv";

const { getPropValue } = baseHelper;

const InformationCard = (props) => {
  const newProps = { ...defaultProps.props, ...props };
  const { style, content, media, updateProps, setData, isEditMode } = newProps;
  const styledRowProps = {
    columnPosition: getPropValue(
      "text",
      "columnPosition",
      style.columnPosition,
      "style"
    ),
  };

  const imageProps = {
    src: getPropValue("text", "imageUrl", media.imageUrl, "media"),
    alt: getPropValue("text", "alt", media.alt, "media"),
  };

  const titleProps = {
    titleColor: getPropValue("text", "titleColor", style.titleColor, "style"),
    titleFontSize: getPropValue(
      "text",
      "titleFontSize",
      style.titleFontSize,
      "style"
    ),
    titleText: getPropValue("text", "titleText", style.titleText, "style"),
    bottomSpace: getPropValue(
      "text",
      "bottomSpace",
      style.bottomSpace,
      "style"
    ),
  };

  const infoProps = {
    topBorderColor: getPropValue(
      "text",
      "topBorderColor",
      style.borderColor,
      "style"
    ),
    bottomBorderColor: getPropValue(
      "text",
      "bottomBorderColor",
      style.borderColor,
      "style"
    ),
    contentSpace: getPropValue(
      "text",
      "contentSpace",
      style.contentSpace,
      "style"
    ),
  };
  const paragraphProps = {
    textFontSize: getPropValue(
      "text",
      "textFontSize",
      style.textFontSize,
      "style"
    ),
    textColor: getPropValue("text", "textColor", style.textColor, "style"),
  };
  const titleHeading = getPropValue(
    "text",
    "heading",
    content.title,
    "content"
  );
  const para1 = getPropValue(
    "text",
    "paragraph1",
    content.paragraph1,
    "content"
  );

  const para2 = getPropValue(
    "text",
    "paragraph2",
    content.paragraph2,
    "content"
  );

  return (
    <Container>
      <StyledRow {...styledRowProps} className="row">
        <Col md={6}>
          <div className="draggable">
            <figure>
              <Image {...imageProps} />
            </figure>
          </div>
        </Col>
        <Col md={6} className="pl-lg-5">
          {titleHeading && (
            <Title {...titleProps}>
              <InlineDiv
                isEditMode={isEditMode}
                keyProperty="title"
                property="content"
                setData={setData}
                updateProps={updateProps}
                value={titleHeading}
              />
            </Title>
          )}
          {(!!para1 || para2) && (
            <Info className="vendor-description" {...infoProps}>
              {para1 && (
                <Paragraph {...paragraphProps}>
                  <InlineDiv
                    isEditMode={isEditMode}
                    keyProperty="paragraph1"
                    property="content"
                    setData={setData}
                    updateProps={updateProps}
                    value={para1}
                  />
                </Paragraph>
              )}
              {para2 && (
                <Paragraph {...paragraphProps}>
                  <InlineDiv
                    isEditMode={isEditMode}
                    keyProperty="paragraph2"
                    property="content"
                    setData={setData}
                    updateProps={updateProps}
                    value={para2}
                  />
                </Paragraph>
              )}
            </Info>
          )}
        </Col>
      </StyledRow>
    </Container>
  );
};
export default InformationCard;
