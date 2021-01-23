import React, { useState } from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import MobileNavbar from "./mobileNavbar";
import { BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import {
  StyledHeader,
  StyledLi,
  Overlay,
  MenuIcon,
  LogoImg,
  Banner,
  BannerContent,
  BannerLink,
  Title,
  Paragraph,
} from "./styled.Header";
import defaultProps from "./defaultProps";
import InlineDiv from "../../../inlineDiv";
import baseHelper from "../../../helper/baseHelper";

const { getPropValue } = baseHelper;

const SmartHeader = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const newProps = { ...defaultProps.props, ...props };
  const {
    style,
    content,
    media,
    updateProps,
    setData,
    isEditMode,
    links,
  } = newProps;

  const linksStyleProps = {
    navColor: getPropValue("text", "navColor", style.navColor, "style"),
    navFont: getPropValue("text", "navFont", style.navFont, "style"),
    fontWeight: getPropValue("text", "fontWeight", style.fontWeight, "style"),
    navHoverColor: getPropValue(
      "text",
      "navHoverColor",
      style.navHoverColor,
      "style"
    ),
    textTransform: getPropValue(
      "text",
      "textTransform",
      style.textTransform,
      "style"
    ),
  };

  const link1 = getPropValue("text", "link1", links.link1, "content");
  const url1 = getPropValue("text", "url1", links.url1, "content");
  const link2 = getPropValue("text", "link2", links.link2, "content");
  const url2 = getPropValue("text", "url2", links.url2, "content");
  const link3 = getPropValue("text", "link3", links.link3, "content");
  const url3 = getPropValue("text", "url3", links.url3, "content");
  const logo = getPropValue("text", "logo", media.logo, "media");
  const logoAlt = getPropValue("text", "logoAlt", media.logoAlt, "media");

  const title = getPropValue("text", "title", content.title, "content");
  const bannerContent = getPropValue(
    "text",
    "content",
    content.content,
    "content"
  );
  const buttonTitle = getPropValue(
    "text",
    "buttonTitle",
    links.buttonTitle,
    "content"
  );
  const buttonUrl = getPropValue(
    "text",
    "buttonUrl",
    links.buttonUrl,
    "content"
  );

  const titleStyle = {
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
  const buttonStyle = {
    buttonColor: getPropValue(
      "text",
      "buttonColor",
      style.buttonColor,
      "style"
    ),
    buttonFontSize: getPropValue(
      "text",
      "buttonFontSize",
      style.buttonFontSize,
      "style"
    ),
    borderColor: getPropValue(
      "text",
      "borderColor",
      style.borderColor,
      "style"
    ),
    buttonHoverColor: getPropValue(
      "text",
      "buttonHoverColor",
      style.buttonHoverColor,
      "style"
    ),
    borderHoverColor: getPropValue(
      "text",
      "borderHoverColor",
      style.borderHoverColor,
      "style"
    ),
    buttonRadius: getPropValue(
      "text",
      "buttonRadius",
      style.buttonRadius,
      "style"
    ),
  };
  const paragraphStyle = {
    contentSpace: getPropValue(
      "text",
      "contentSpace",
      style.contentSpace,
      "style"
    ),
  };
  const bannerProps = {
    bgImage: getPropValue("text", "bgImage", media.bgImage, "style"),
  };
  return (
    <Banner {...bannerProps}>
      <Router>
        <Switch>
          <StyledHeader
            stickyHeader
            className="header"
            headerBg={style.background}
          >
            <Container>
              <Navbar collapseOnSelect expand="lg" variant="dark">
                <NavLink to="/" className="logo p-0">
                  <LogoImg src={logo} alt={logoAlt} />
                </NavLink>
                <MenuIcon
                  onClick={() => setMenuOpen(!isMenuOpen)}
                  className="d-flex flex-column justify-content-between d-lg-none"
                >
                  <i className="menu-line d-block w-100"></i>
                  <i className="menu-line d-block w-100"></i>
                  <i className="menu-line d-block w-75 ml-auto"></i>
                </MenuIcon>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <span className="close-menu position-absolute  d-lg-none">
                    <i className="fa fa-times-circle" aria-hidden="true"></i>
                    close
                  </span>
                  <Nav as="ul" className="ml-auto">
                    <StyledLi {...linksStyleProps}>
                      {!!link1 && (
                        <NavLink className="nav-link" to="/home">
                          {link1}
                        </NavLink>
                      )}
                    </StyledLi>
                    <StyledLi {...linksStyleProps}>
                      {!!link2 && (
                        <NavLink className="nav-link" to="/enterprise">
                          {link2}
                        </NavLink>
                      )}
                    </StyledLi>
                    <StyledLi {...linksStyleProps}>
                      {!!link3 && (
                        <NavLink className="nav-link" to="/pricing">
                          {link3}
                        </NavLink>
                      )}
                    </StyledLi>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              {/* Mobile Navbar */}
              {isMenuOpen ? (
                <Overlay onClick={() => setMenuOpen(false)}></Overlay>
              ) : (
                isMenuOpen
              )}
              <MobileNavbar navbarShow={isMenuOpen}>
                <span
                  className="close-menu position-absolute  d-lg-none"
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                </span>
              </MobileNavbar>
            </Container>
          </StyledHeader>
        </Switch>
      </Router>
      <div className="banner">
        <BannerContent className="content">
          <Title {...titleStyle}>
            <InlineDiv
              isEditMode={isEditMode}
              keyProperty="title"
              property="content"
              setData={setData}
              updateProps={updateProps}
              value={title}
            />
          </Title>
          <Paragraph {...paragraphStyle}>
            <InlineDiv
              isEditMode={isEditMode}
              keyProperty="content"
              property="content"
              setData={setData}
              updateProps={updateProps}
              value={bannerContent}
            />
          </Paragraph>
          {!!buttonTitle && (
            <BannerLink {...buttonStyle} href={buttonUrl}>
              {buttonTitle}
            </BannerLink>
          )}
        </BannerContent>
      </div>
    </Banner>
  );
};

export default SmartHeader;
