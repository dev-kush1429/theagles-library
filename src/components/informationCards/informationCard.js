import React from "react";
import { Container, Col } from "react-bootstrap";
import { StyledRow, Title, Info, Image, Paragraph } from "./styled.profile";
import baseHelper from "../../helper/baseHelper";
import defaultProps from "./defaultProps";

const { getPropValue } = baseHelper;

const ProductDetail = (props) => {
  const newProps = { ...defaultProps.props, ...props };
  const { style, content, media } = newProps;
  const styledRowProps = {
    contentPosition: getPropValue(
      "text",
      "contentPosition",
      style.contentPosition,
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
    textTransform: getPropValue(
      "text",
      "textTransform",
      style.textTransform,
      "style"
    ),
  };

  const infoProps = {
    topBorderColor: getPropValue(
      "text",
      "topBorderColor",
      style.topBorderColor,
      "style"
    ),
    bottomBorderColor: getPropValue(
      "text",
      "bottomBorderColor",
      style.bottomBorderColor,
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
    content.heading,
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
          <Title className="mb-5" {...titleProps}>
            {titleHeading}
          </Title>
          <Info className="vendor-description" {...infoProps}>
            <Paragraph {...paragraphProps}>{para1}</Paragraph>
            <Paragraph {...paragraphProps}>{para2}</Paragraph>
          </Info>
        </Col>
      </StyledRow>
    </Container>
  );
};
export default ProductDetail;
