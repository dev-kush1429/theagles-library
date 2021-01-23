import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { Footer, Title, SocialIcons } from "./styled.fancyFooter";
import defaultProps from "./defaultProps";
import baseHelper from "../../../helper/baseHelper";
import InlineDiv from "../../../inlineDiv";
import {
  Facebook,
  Twitter,
  Youtube,
  GooglePlus,
  Linkedin,
  Instagram,
} from "@styled-icons/boxicons-logos";

const { getPropValue } = baseHelper;

const FancyFooter = (props) => {
  const newProps = { ...defaultProps.props, ...props };
  const { content, isEditMode, media, setData, style, updateProps } = newProps;

  // Knobs
  // Footer about column

  const logoImage = getPropValue("text", "logo", media.logo, "media");
  const altText = getPropValue("text", "altText", media.altText, "media");

  const aboutDescription1 = getPropValue(
    "text",
    "shortInfo1",
    content.shortInfo1,
    "shortInfo"
  );
  const aboutDescription2 = getPropValue(
    "text",
    "shortInfo2",
    content.shortInfo2,
    "shortInfo"
  );

  // Address Text column
  const addressTitle = getPropValue(
    "text",
    "title",
    content.address,
    "address"
  );
  const street = getPropValue("text", "street", content.street, "address");
  const building = getPropValue(
    "text",
    "building",
    content.building,
    "address"
  );
  const city = getPropValue("text", "city", content.city, "address");
  const country = getPropValue("text", "country", content.country, "address");

  // Social links
  const size = getPropValue("text", "size", style.iconSize, "social links");
  const iconHoverColor = getPropValue(
    "text",
    "iconHoverColor",
    style.iconHoverColor,
    "social links"
  );

  const socialLinksTitle = getPropValue(
    "text",
    "title",
    content.followUs,
    "social links"
  );

  const facebookUrl = getPropValue(
    "text",
    "facebookUrl",
    content.facebookUrl,
    "social links"
  );

  const twitterUrl = getPropValue(
    "text",
    "twitterUrl",
    content.twitterUrl,
    "social links"
  );

  const footerStyle = {
    textColor: getPropValue("text", "textColor", style.textColor, "style"),
    footerBackground: getPropValue(
      "text",
      "footerBackground",
      style.footerBackground,
      "style"
    ),
  };
  return (
    <Footer className="py-md-5" {...footerStyle}>
      <Container className="footer-container">
        <Row>
          <Col sm={4} className="pr-md-4">
            {!!logoImage && (
              <span className="footer-logo d-block mb-3" to="/">
                <img src={logoImage} alt={altText} width="260" />
              </span>
            )}
            <InlineDiv
              isEditMode={isEditMode}
              keyProperty="aboutDescription1"
              property="content"
              setData={setData}
              updateProps={updateProps}
              value={aboutDescription1}
            />
            <InlineDiv
              isEditMode={isEditMode}
              keyProperty="aboutDescription2"
              property="content"
              setData={setData}
              updateProps={updateProps}
              value={aboutDescription2}
            />
          </Col>
          <Col sm={4} className="footer-box">
            <Title className="text-upper mb-sm-4">
              {addressTitle}
              {/* <InlineDiv
                isEditMode={isEditMode}
                keyProperty="address"
                property="content"
                setData={setData}
                updateProps={updateProps}
                value={addressTitle}
              /> */}
            </Title>
            <address>
              <InlineDiv
                isEditMode={isEditMode}
                keyProperty="street"
                property="content"
                setData={setData}
                updateProps={updateProps}
                value={street}
              />
              <br />
              <InlineDiv
                isEditMode={isEditMode}
                keyProperty="building"
                property="content"
                setData={setData}
                updateProps={updateProps}
                value={building}
              />
              <br />
              <InlineDiv
                isEditMode={isEditMode}
                keyProperty="city"
                property="content"
                setData={setData}
                updateProps={updateProps}
                value={city}
              />
              <br />
              <InlineDiv
                isEditMode={isEditMode}
                keyProperty="country"
                property="content"
                setData={setData}
                updateProps={updateProps}
                value={country}
              />
            </address>
          </Col>
          <Col sm={4} className="footer-box">
            <Title className="text-upper mb-sm-4">{socialLinksTitle}</Title>

            <SocialIcons
              className="social-icons d-inline-block align-top"
              href={facebookUrl}
              {...iconHoverColor}
            >
              <Facebook size={size} />
            </SocialIcons>
            <SocialIcons
              className="social-icons d-inline-block mx-4 mx-lg-5 align-top"
              href={twitterUrl}
              {...iconHoverColor}
            >
              <Twitter size={size} />
            </SocialIcons>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
};
export default FancyFooter;
