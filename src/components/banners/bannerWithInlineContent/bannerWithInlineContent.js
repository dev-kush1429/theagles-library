import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StyledLink, Title, StyledSection } from "../styled.banners";
import defaultProps from "./bannerWithInlineContentProps";

export const BannerWithInlineContent = (props) => {
  const newProps = { ...defaultProps.props, ...props };

  const { style, body } = newProps;

  return (
    <StyledSection
      className="position-relative mb-4"
      bgImage={style.backgroundImg}
      color={style.ContentColor}
      contentFontSize={style.contentFontSize}
    >
      <Container>
        <Row className="align-items-center">
          <Col md="6" className="mb-5 mb-md-0 pr-xl-5">
            <Title
              titleFontSize={style.headingFontSize}
              titleColor={style.headingColor}
              className="mb-4"
              titleAlign={style.headingAlign}
            >
              {body.title}
            </Title>
            <p className="mb-4">{body.content}</p>
            <StyledLink
              btnType={true}
              btnRadius={style.buttonRadius}
              btnColor={style.buttonColor}
              fontSize={style.buttonFontSize}
              bgColor={style.buttonBg}
              borderColor={style.buttonBorderColor}
              hoverBgColor={style.buttonHoverBg}
              hoverColor={style.buttonHoverColor}
              hoverBorderColor={style.hoverBorderColor}
              href={body.linkUrl}
            >
              {body.linkTitle}
            </StyledLink>
          </Col>
          <Col md="6">
            <img src={body.img} alt={body.alt} />
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default BannerWithInlineContent;
