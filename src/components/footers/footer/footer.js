import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import {
  StyledFooter,
  StyledLink,
  StyledCol,
  FooterBottom,
  SocialIcons,
} from "./styled.footer";
import { BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import InlineDiv from "../../../inlineDiv";
import defaultProps from "./defaultProps";
import baseHelper from "../../../helper/baseHelper";

const { getPropValue } = baseHelper;

const Footer = (props) => {
  const newProps = { ...defaultProps.props, ...props };
  const { content, isEditMode, media, setData, style, updateProps } = newProps;

  const socialIconsURL = {
    facebookURL: media.facebookURL,
    youTubeURL: media.youTubeURL,
    twitterURL: media.twitterURL,
    googleURL: media.googleURL,
  };

  const column_1_title = {
    column_1_title_1: content.column_1_title_1,
    column_1_title_2: content.column_1_title_2,
    column_1_title_3: content.column_1_title_3,
    column_1_title_4: content.column_1_title_4,
  };
  const column_1_url = {
    column_1_url_1: media.column_1_url_1,
    column_1_url_2: media.column_1_url_2,
    column_1_url_3: media.column_1_url_3,
    column_1_url_4: media.column_1_url_4,
  };
  const column_2_title = {
    column_2_title_1: content.column_2_title_1,
    column_2_title_2: content.column_2_title_2,
    column_2_title_3: content.column_2_title_3,
    column_2_title_4: content.column_2_title_4,
  };
  const column_2_url = {
    column_2_url_1: media.column_2_url_1,
    column_2_url_2: media.column_2_url_2,
    column_2_url_3: media.column_2_url_3,
    column_2_url_4: media.column_2_url_4,
  };
  const column_3_title = {
    column_3_title_1: content.column_3_title_1,
    column_3_title_2: content.column_3_title_2,
    column_3_title_3: content.column_3_title_3,
    column_3_title_4: content.column_3_title_4,
  };
  const column_3_url = {
    column_3_url_1: media.column_3_url_1,
    column_3_url_2: media.column_3_url_2,
    column_3_url_3: media.column_3_url_3,
    column_3_url_4: media.column_3_url_4,
  };

  const getLineComponent = (prefix, column_n_title, column_n_url) => {
    const linksStyle = {
      hoverColor: getPropValue("text", "hoverColor", style.hoverColor, "style"),
      fontSize: getPropValue("text", "fontSize", style.fontSize, "style"),
      textTransform: getPropValue(
        "text",
        "textTransform",
        style.textTransform,
        "style"
      ),
      linkColor: getPropValue("text", "linkColor", style.linkColor, "style"),
      fontWeight: getPropValue("text", "fontWeight", style.fontWeight, "style"),
    };

    const lineComponents = [];
    const limit = Object.keys(column_n_title).length + 1;
    for (let index = 1; index < limit; index++) {
      const title = getPropValue(
        "text",
        `${prefix}_title_${index}`,
        column_n_title[`${prefix}_title_${index}`]
      );
      const url = getPropValue(
        "text",
        `${prefix}_url_${index}`,
        column_n_url[`${prefix}_url_${index}`]
      );
      lineComponents.push(
        <StyledLink className="mb-1" {...linksStyle}>
          <span key={index}>
            <InlineDiv
              isEditMode={isEditMode}
              keyProperty={`${prefix}_title_${index}`}
              property="content"
              setData={setData}
              updateProps={updateProps}
              value={title}
            />
          </span>
        </StyledLink>
      );
    }
    return lineComponents;
  };

  const getSocialLinks = () => {
    const iconColor = getPropValue(
      "text",
      "iconColor",
      style.iconColor,
      "style"
    );
    const radius = getPropValue("text", "radius", style.radius, "style");
    const fontSize = getPropValue("text", "fontSize", style.fontSize, "style");
    const borderColor = getPropValue(
      "text",
      "borderColor",
      style.borderColor,
      "style"
    );
    const iconHoverColor = getPropValue(
      "text",
      "iconHoverColor",
      style.iconHoverColor,
      "style"
    );
    const hoverBorderColor = getPropValue(
      "text",
      "hoverBorderColor",
      style.hoverBorderColor,
      "style"
    );
    const socialIconsTitle = {
      facebookTitle: "F",
      youTubeTitle: "Y",
      twitterTitle: "T",
      googleTitle: "G+",
    };
    const returnElement = [];
    for (const item in socialIconsTitle) {
      const key = item.substring(item.length - 5, 0);
      const title = getPropValue("text", item, socialIconsTitle[item]);
      const url = socialIconsURL[key + "URL"];
      returnElement.push(
        <SocialIcons
          key={Math.random() + "socialIcons"}
          target="_blank"
          href={url}
          iconColor={iconColor}
          radius={radius}
          fontSize={fontSize}
          borderColor={borderColor}
          iconHoverColor={iconHoverColor}
          hoverBorderColor={hoverBorderColor}
        >
          {title}
        </SocialIcons>
      );
    }
    return returnElement;
  };

  const column1 = getLineComponent("column_1", column_1_title, column_1_url);
  const column2 = getLineComponent("column_2", column_2_title, column_2_url);
  const column3 = getLineComponent("column_3", column_3_title, column_3_url);
  const socialLinks = getSocialLinks();

  const brandName = getPropValue(
    "text",
    "brandName",
    content.brandName,
    "content"
  );
  const copyRight = getPropValue(
    "text",
    "copyRight",
    content.copyRight,
    "content"
  );
  const footerStyle = {
    footerBgColor: getPropValue(
      "text",
      "footerBgColor",
      style.footerBgColor,
      "style"
    ),
  };
  // const textAlign = getPropValue("text", "textAlign", style.textAlign, "style");

  return (
    <StyledFooter className="footer" {...footerStyle}>
      <Container className="footer-container">
        <Router>
          <Switch>
            <React.Fragment>
              <Row>
                <Col
                  sm={3}
                  className="pt-2 text-center text-md-left mb-4 mb-sm-0"
                >
                  <h4 className="footer-logo font-weight-bold text-uppercase d-block">
                    <InlineDiv
                      isEditMode={isEditMode}
                      keyProperty="brandName"
                      property="content"
                      setData={setData}
                      updateProps={updateProps}
                      value={brandName}
                    />
                  </h4>
                  <span>Designed by Theagles</span>
                </Col>
                <StyledCol className="footer-box col-sm-3">{column1}</StyledCol>
                <StyledCol className="footer-box col-sm-3">{column2}</StyledCol>
                <StyledCol className="footer-box col-sm-3">{column3}</StyledCol>
              </Row>
            </React.Fragment>
          </Switch>
        </Router>
        <FooterBottom>
          {socialLinks}
          <div className="text-center copyright mt-3">
            {" "}
            <InlineDiv
              isEditMode={isEditMode}
              keyProperty="copyRight"
              property="content"
              setData={setData}
              updateProps={updateProps}
              value={copyRight}
            />
          </div>
        </FooterBottom>
      </Container>
    </StyledFooter>
  );
};
export default Footer;
