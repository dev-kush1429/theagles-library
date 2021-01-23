import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import defaultProps from "./defaultProps";
import { text } from "@storybook/addon-knobs";
import baseHelper from "../../../helper/baseHelper";
import { StyledLi, MobileMenu } from "./styled.Header";

const { getPropValue } = baseHelper;

const MobileNavbar = (props) => {
  const newProps = { ...defaultProps.props, ...props };
  const { style, content, media, links } = newProps;

  const link1 = getPropValue("text", "link1", links.link1, "content");
  const link2 = getPropValue("text", "link2", links.link2, "content");
  const link3 = getPropValue("text", "link3", links.link3, "content");

  let classes = "mobile-menu ";
  if (props.navbarShow) {
    classes += "show";
  }

  return (
    <MobileMenu className={classes}>
      <Navbar.Collapse>
        {props.children}
        <Nav as="ul" className="d-block">
          <StyledLi>
            {!!link1 && (
              <NavLink className="nav-link" to="/home">
                {link1}
              </NavLink>
            )}
          </StyledLi>
          <StyledLi>
            {!!link2 && (
              <NavLink className="nav-link" to="/enterprise">
                {link2}
              </NavLink>
            )}
          </StyledLi>
          <StyledLi>
            {!!link3 && (
              <NavLink className="nav-link" to="/pricing">
                {link3}
              </NavLink>
            )}
          </StyledLi>
        </Nav>
      </Navbar.Collapse>
    </MobileMenu>
  );
};
export default MobileNavbar;
