import styled, { css } from "styled-components";

import * as variable from "../../../styles/globalCss";
import * as colors from "../../../styles/colors";
import device from "../../../styles/breakpoints";

export const LogoImg = styled.img`
  max-width: 200px;
  /* @media ${device.mobile} {
    max-width: 265px;
  } */
`;
export const StyledHeader = styled.header`
  background: ${(props) => props.headerBg || {}};
  ${(props) =>
    props.stickyHeader
      ? css`
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          width: 100%;
          z-index: 500;
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
    position: relative;

    @media ${device.tablet} {
      color: ${(props) => props.navColor || colors.whiteColor} !important;
      font-size: ${(props) => props.navFont || variable.inputFontSize};
      text-transform: ${(props) => props.textTransform};
      font-weight: ${(props) => props.fontWeight || variable.fontSemiBold};
      &:hover {
        color: ${(props) =>
          props.navHoverColor || colors.whiteColor} !important;
      }
    }
    @media ${device.tabletL} {
      &:after {
        content: "";
        height: 2px;
        width: 0;
        background: ${(props) => props.navHoverColor || colors.whiteColor};
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0%;
        margin: 0 auto;
        transition: all 0.4s ease-in-out;
      }
      &:hover:after {
        border-radius: 5px;
        width: 100%;
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

export const Banner = styled.div`
  position: relative;
  background: ${(props) => (props.bgImage ? `url(${props.bgImage})` : {})}
    no-repeat center center;
  &:after {
    background: rgba(0, 0, 0, 0.4);
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  /* .banner {
    position: relative;
    z-index: 2;
  } */
`;
export const BannerContent = styled.div`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  padding: 116px 15px;
  width: 100%;
  color: #fff;
  text-align: center;
  z-index: 2;
`;

export const BannerLink = styled.a`
  color: ${(props) => props.buttonColor || colors.whiteColor};
  font-size: ${(props) => props.buttonFontSize || variable.inputFontSize};
  border: 1px solid ${(props) => props.borderColor || colors.whiteColor};
  border-radius: ${(props) => props.buttonRadius || {}};
  padding: 10px 15px;
  display: inline-block;
  transition: all 0.4s ease-in-out;
  &:hover {
    color: ${(props) => props.buttonHoverColor || colors.whiteColor};
    border: 1px solid ${(props) => props.borderHoverColor || colors.whiteColor};
  }
`;
export const Title = styled.h2`
  color: ${(props) => props.titleColor || colors.whiteColor};
  font-size: ${(props) => props.titleFontSize || variable.H2};
  margin-bottom: ${(props) => props.bottomSpace || {}};
  font-weight: 600;
`;
export const Paragraph = styled.div`
  margin-bottom: ${(props) => props.contentSpace || {}};
`;
