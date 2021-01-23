import styled, { css } from "styled-components";
import * as variable from "../../../styles/globalCss";
import * as colors from "../../../styles/colors";
import device from "../../../styles/breakpoints";

export const LogoImg = styled.img`
  max-width: 200px;
  max-height: 45px;
`;
export const StyledHeader = styled.header`
  background: ${(props) => props.headerBg || colors.headerColor};
  ${(props) =>
    props.stickyHeader
      ? css`
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          width: 100%;
          z-index: 999;
        `
      : ""};

  ${(props) =>
    props.navColor
      ? css`
          color: red;
        `
      : ""}

  .navbar {
    padding: 15px 0;
  }
  .navbar-dark .navbar-nav li + li {
    margin-left: 15px;
  }
`;

export const StyledLi = styled.li`
  a,
  span {
    color: ${colors.darkBg};
    @media ${device.tablet} {
      color: ${(props) => props.navColor || colors.whiteColor} !important;
      font-size: ${(props) => props.navFont || variable.inputFontSize};
      text-transform: ${(props) => props.textTransform};
      font-weight: ${(props) => props.fontWeight || variable.fontRegular};
      &:hover {
        color: ${(props) =>
          props.navHoverColor || colors.whiteColor} !important;
      }
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
`;

export const MobileMenu = styled.div`
  @media screen and (max-width: 991px) {
    position: fixed;
    bottom: 0;
    top: 0;
    background: rgba(555, 555, 555, 0.95);
    width: 85%;
    max-width: 400px;
    padding: 50px 15px;
    right: -400px;
    z-index: 400;
    transition: all 0.4s ease-in-out;
    &.show {
      right: 0;
    }

    .navbar-collapse {
      display: block;
    }

    .navbar-collapse .navbar-nav li + li {
      margin-left: 0;
    }
    .xs-menu .nav-link {
      color: rgb(255, 66, 101);
    }
    .nav-link {
      font-size: 17px;
      color: #000;
    }
    .close-menu {
      right: 14px;
      top: 10px;
      font-size: 25px;
    }
  }
`;

export const MenuIcon = styled.span`
  width: 35px;
  height: 21px;
  .menu-line {
    height: 2px;
    background: #fff;
  }
`;
