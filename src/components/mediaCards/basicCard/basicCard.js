import React from "react";
import { Container, Col } from "react-bootstrap";
import {
  Link,
  Title,
  StyledWrapper,
  Image,
  StyledRow,
  Paragraph,
} from "./styled.basicCard";
import defaultProps from "./basicCardProps";
import baseHelper from "../../../helper/baseHelper";
import InlineDiv from "../../../inlineDiv";

const { getPropValue } = baseHelper;

const BasicCard = (props) => {
  const newProps = { ...defaultProps.props, ...props };
  const {
    content,
    style,
    media,
    updateProps,
    setData,
    isEditMode,
    links,
  } = newProps;

  const imageProps = {
    imageRadius: getPropValue(
      "text",
      "imageRadius",
      style.imageRadius,
      "style"
    ),
    src: getPropValue("text", "imgUrl", media.imgUrl, "media"),
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
    bottomSpace: getPropValue(
      "text",
      "bottomSpace",
      style.bottomSpace,
      "style"
    ),
  };

  const columnPosition = {
    contentAlign: getPropValue(
      "text",
      "contentAlign",
      style.contentAlign,
      "style"
    ),
  };

  const styledWrapperProps = {
    textFontSize: getPropValue(
      "text",
      "textFontSize",
      style.textFontSize,
      "style"
    ),
    textColor: getPropValue("text", "textColor", style.textColor, "style"),
  };

  const title = getPropValue("text", "title", content.title, "content");
  const paragraph = getPropValue(
    "text",
    "paragraph",
    content.paragraph,
    "content"
  );

  const link1 = getPropValue("text", "link1", links.link1, "content");
  const url1 = getPropValue("text", "url1", links.url1, "content");

  const link2 = getPropValue("text", "link2", links.link2, "content");
  const url2 = getPropValue("text", "url2", links.url2, "content");

  const paragraphStyle = {
    contentSpace: getPropValue(
      "text",
      "contentSpace",
      style.contentSpace,
      "style"
    ),
  };

  return (
    <StyledWrapper {...styledWrapperProps}>
      <Container className="mb-4 BasicCard">
        <StyledRow {...columnPosition} className="row">
          <Col md="6" className="mb-4 mb-md-0">
            <Image {...imageProps} className="w-100" />
          </Col>
          <Col md="6" className={style.contentAlign !== "center" ? "pt-4" : ""}>
            {title && (
              <Title {...titleProps}>
                <InlineDiv
                  isEditMode={isEditMode}
                  keyProperty="title"
                  property="content"
                  setData={setData}
                  updateProps={updateProps}
                  value={title}
                />
              </Title>
            )}
            {paragraph && (
              <Paragraph {...paragraphStyle}>
                <InlineDiv
                  isEditMode={isEditMode}
                  keyProperty="paragraph"
                  property="content"
                  setData={setData}
                  updateProps={updateProps}
                  value={paragraph}
                />
              </Paragraph>
            )}
            {/* <Link className="global-button" href={url1} {...buttonLink}>
              {link1}
            </Link>
            <Link className="global-link" {...linkProps} href={url2}>
              {link2}
            </Link> */}
          </Col>
        </StyledRow>
      </Container>
    </StyledWrapper>
  );
};
export default BasicCard;
