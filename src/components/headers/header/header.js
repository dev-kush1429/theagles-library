import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import MobileNavbar from "./mobileNavbar";
import { BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import {
  StyledHeader,
  StyledLi,
  Overlay,
  MenuIcon,
  LogoImg,
} from "./styled.Header";
import defaultProps from "./defaultProps";

import InlineDiv from "../../../inlineDiv";

import baseHelper from "../../../helper/baseHelper";

const { getPropValue } = baseHelper;

const Header = (props) => {
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

  return (
    <Router>
      <Switch>
        <StyledHeader
          stickyHeader={false}
          className="header"
          headerBg={style.background}
        >
          <Container>
            <Navbar collapseOnSelect expand="lg" variant="dark">
              <span to="/" className="logo p-0">
                <LogoImg src={logo} alt={logoAlt} />
              </span>
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
                        {/* <InlineDiv
                          isEditMode={isEditMode}
                          keyProperty="link1"
                          property="content"
                          setData={setData}
                          updateProps={updateProps}
                          value={link1}
                        /> */}
                        {link1}
                      </NavLink>
                    )}
                  </StyledLi>
                  <StyledLi {...linksStyleProps}>
                    {!!link2 && (
                      <NavLink className="nav-link" to="/enterprise">
                        {/* <InlineDiv
                        isEditMode={isEditMode}
                        keyProperty="link2"
                        property="content"
                        setData={setData}
                        updateProps={updateProps}
                        value={link2}
                      /> */}
                        {link2}
                      </NavLink>
                    )}
                  </StyledLi>
                  <StyledLi {...linksStyleProps}>
                    {!!link3 && (
                      <NavLink className="nav-link" to="/pricing">
                        {/* <InlineDiv
                        isEditMode={isEditMode}
                        keyProperty="link3"
                        property="content"
                        setData={setData}
                        updateProps={updateProps}
                        value={link3}
                      /> */}
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
  );
};

export default Header;
