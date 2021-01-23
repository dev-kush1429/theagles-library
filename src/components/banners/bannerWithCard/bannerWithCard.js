import React from "react";
import { Col, ListGroup, Image, Button, Tab, Tabs } from "react-bootstrap";

import baseHelper from "../../../helper/baseHelper";
import defaultProps from "./defaultProps";
import {
  ContactInfo,
  BrandLogo,
  MainWrapper,
  PosterImage,
  BannerCard,
  TabHeader,
  BrandTitle,
  TabBody,
} from "./styled";

const { getPropValue } = baseHelper;

const BannerWithCard = (props) => {
  const {
    config,
    vendorInfo,
    brandDetail = {},
    url,
    shop,
    style,
    media,
    content,
  } = {
    ...defaultProps.props,
    ...props,
  };

  const { socialLink = {}, brand = {}, brandCover = {} } = brandDetail || {};

  if (!vendorInfo) {
    return "No User Found";
  }
  const email = content.email || {};

  const defaultCoverImage = "/assets/images/eagle-power.jpg";
  const defaultBrandLogo = "/assets/images/eagle-power.jpg";

  const bannerImage = !!brandCover.imageUrl
    ? brandCover.imageUrl
    : defaultCoverImage;

  const brandImage = !!brand.imageUrl ? brand.imageUrl : defaultBrandLogo;

  const description = getPropValue(
    "text",
    "description",
    content.description,
    "brandDetail"
  );

  // Claim Button
  const buttonText = getPropValue(
    "text",
    "buttonText",
    content.buttonText,
    "buttonText"
  );

  const contactInfoLabel = getPropValue(
    "text",
    "contactInfoLabel",
    content.contactInfoLabel,
    "content"
  );

  // Tabs
  const aboutTab = getPropValue(
    "text",
    "aboutTab",
    content.aboutTab,
    "brandDetail"
  );
  const contactTab = getPropValue(
    "text",
    "contactTab",
    content.contactTab,
    "brandDetail"
  );

  const tabStyle = {
    tabBodyColor: getPropValue(
      "text",
      "tabBodyColor",
      style.tabBodyColor,
      "style"
    ),
    tabBodyFontSize: getPropValue(
      "text",
      "tabBodyFontSize",
      style.tabBodyFontSize,
      "style"
    ),
  };
  // Address

  const address = getPropValue("text", "address", content.address, "address");
  // const vendorEmail = getPropValue("text", "email", vendorInfo.email, "address")
  const city = getPropValue("text", "city", content.city, "address");
  const country = getPropValue("text", "country", content.country, "address");

  const firstName = getPropValue(
    "text",
    "firstName",
    content.firstName,
    "address"
  );
  const lastName = getPropValue(
    "text",
    "lastName",
    content.lastName,
    "address"
  );
  const phoneNumber = getPropValue(
    "text",
    "phoneNumber",
    content.phoneNumber,
    "address"
  );
  const pinCode = getPropValue("text", "pinCode", content.pinCode, "address");

  // Brand Title
  const brandTitleText = getPropValue(
    "text",
    "vendorInfo",
    content.brandName,
    "content"
  );
  const brandTitle = {
    titleColor: getPropValue("text", "titleColor", style.titleColor, "style"),
    titleFontSize: getPropValue(
      "text",
      "titleFontSize",
      style.titleFontSize,
      "style"
    ),
  };

  // Main card
  const bannerCard = {
    radius: getPropValue("text", "radius", style.radius, "style"),
  };

  // Brand logo style
  const brandLogo = {
    logoMaxWidth: getPropValue(
      "text",
      "logoMaxWidth",
      style.logoMaxWidth,
      "style"
    ),
    logoMaxHeight: getPropValue(
      "text",
      "logoMaxHeight",
      style.logoMaxHeight,
      "style"
    ),
  };
  return (
    <MainWrapper>
      <PosterImage>
        <Image src={bannerImage} alt={brandTitleText} />
      </PosterImage>
      <BannerCard {...bannerCard} className="container p-0">
        <Col md={8} className="p-4 order-2 order-md-1">
          <TabHeader className="d-flex flex-wrap flex-column flex-md-row">
            <div className="brand-name mb-2 mb-lg-4 order-2 order-md-1">
              {/* <h3 className="mr-2">vendorInfo.vendor</h3> */}
              <BrandTitle {...brandTitle} className="mr-2 text-capitalize">
                {brandTitleText}
              </BrandTitle>
              {/* <span className="text-left d-block mb-0">{vendorInfo.city}</span> */}
            </div>

            <div className="claim-btn ml-md-auto text-md-right order-1 order-md-2">
              {!(email || vendorInfo.isInactive) && (
                <Button
                  href={`${url || config.clientURL}/claim/${shop}/${
                    vendorInfo._id
                  }`}
                  type="button"
                  className="btn btn-warning"
                >
                  {buttonText}
                </Button>
              )}
            </div>
          </TabHeader>
          <Tabs
            defaultActiveKey="about"
            transition={false}
            id="noanim-tab-example"
            className="brand-info border-0"
          >
            <Tab eventKey="about" title={aboutTab} className="border-0">
              <TabBody {...tabStyle}>
                <p>{description}</p>
              </TabBody>
            </Tab>
            <Tab eventKey="contact" title={contactTab}>
              <TabBody {...tabStyle} className="address mb-0 text-left">
                {/* <h4
                        style={{ color: style.titleColor }}
                        className="font-weight-bold mb-4"
                      >
                        {contactInfoLabel}
                      </h4> */}

                <span>{` ${firstName} ${lastName} `}</span>
                <br />
                {email && <a href={`mailto:${email}`}>{email}</a>}
                <br />
                <span>{phoneNumber}</span>
                <br />
                <span>{address}</span>
                <br />
                <span> {`${city}, ${country}`}</span>
              </TabBody>
            </Tab>
          </Tabs>

          <Col className="about-des">
            <div className="social-info">
              <ListGroup horizontal className="info"></ListGroup>
              {socialLink && (
                <ListGroup horizontal className="social">
                  {socialLink.facebook && (
                    <ListGroup.Item
                      action
                      active={false}
                      href={socialLink.facebook}
                      target="_blank"
                    >
                      {/* <Image
                        src={`${imagePath}shape_3.svg`}
                        alt="facebook"
                        fluid
                      /> */}
                    </ListGroup.Item>
                  )}
                  {socialLink.linkedin && (
                    <ListGroup.Item
                      action
                      href={socialLink.linkedin}
                      target="_blank"
                    >
                      {/*  <Image
                        src={`${imagePath}shape_4.svg`}
                        alt="linkedin"
                        fluid
                      /> */}
                    </ListGroup.Item>
                  )}
                  {socialLink.instagram && (
                    <ListGroup.Item
                      action
                      href={socialLink.instagram}
                      target="_blank"
                    >
                      {/* <Image
                        src={`${imagePath}shape_5.svg`}
                        alt="instagram"
                        fluid
                      /> */}
                    </ListGroup.Item>
                  )}
                  {socialLink.youtube && (
                    <ListGroup.Item
                      action
                      href={socialLink.youtube}
                      target="_blank"
                    >
                      {/* <Image
                        src={`${imagePath}shape_6.svg`}
                        alt="youtube"
                        fluid
                      /> */}
                    </ListGroup.Item>
                  )}
                  {socialLink.twitter && (
                    <ListGroup.Item
                      action
                      action
                      href={socialLink.twitter}
                      target="_blank"
                    >
                      {/*   <Image
                        src={`${imagePath}shape_7.svg`}
                        alt="twitter"
                        fluid
                      /> */}
                    </ListGroup.Item>
                  )}
                </ListGroup>
              )}
            </div>
          </Col>
        </Col>
        <ContactInfo className="col-md-4 logo-desc p-4 order-1 order-md-2 text-md-right">
          <BrandLogo {...brandLogo} src={brandImage} alt="logo" />
        </ContactInfo>
      </BannerCard>
    </MainWrapper>
  );
};

export default BannerWithCard;
