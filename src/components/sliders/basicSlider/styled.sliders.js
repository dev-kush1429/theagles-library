import styled, { css } from "styled-components";
import * as variable from "../../../styles/globalCss";
import * as colors from "../../../styles/colors";
import device from "../../../styles/breakpoints";
import { Container } from "react-bootstrap";

export const InnerContainer = styled(Container)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const SliderWrapper = styled.div`
  .carousel-control-prev {
    opacity: 0;
    width: auto;
    left: 25px;
  }
  .carousel-control-next {
    opacity: 0;
    width: auto;
    right: 25px;
  }
  @media ${device.tabletL} {
    &:hover .carousel-control-prev,
    &:hover .carousel-control-next {
      opacity: 1;
    }
  }
`;

export const SlideCaption = styled.div`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  max-width: ${(props) => props.maxWidth || "280"}px;
  width: calc(100% - 30px);
  @media ${device.tablet} {
    max-width: ${(props) => props.maxWidth || "600"}px;
  }
  ${(props) =>
    props.contentPosition === "right"
      ? css`
          right: 15px;
          left: auto;
          text-align: right;
        `
      : {}};
  ${(props) =>
    props.contentPosition === "center"
      ? css`
          left: 15px;
          right: 15px;
          max-width: none;
          text-align: center;
          margin: 0 auto;
        `
      : {}}

  .content {
    color: ${(props) => props.color || colors.whiteColor};
  }
`;

export const SlideTitle = styled.h2`
  font-size: ${(props) => props.titleFontSize || variable.H3};
  color: ${(props) => props.titleColor || colors.whiteColor};
  text-transform: ${(props) => props.textTransform || "uppercase"};
  font-weight: ${(props) => props.fontWeight || "600"};
  @media ${device.tablet} {
    font-size: ${(props) => props.titleFontSize || "35px"};
  }
`;

export const SlideImage = styled.img`
  min-height: 250px;
  max-height: 600px;
  object-fit: cover;

  @media ${device.tablet} {
    min-height: auto;
  }
`;

export const Link = styled.a`
  font-size: ${(props) => props.linkFontSize || variable.baseFont};
  color: ${(props) => props.linkColor || {}};
  font-weight: ${(props) => props.fontWeight || {}};
  position: relative;
  padding-bottom: 6px;
  transition: all 0.4s ease-in-out;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    background: #fff;
    height: 1px;
    width: 20px;
    left: 0%;
    transition: all 0.4s ease-in-out;
  }
  &:hover {
    color: ${(props) => props.linkHoverColor || colors.whiteColor};
    text-decoration: none;
  }
  &:hover:after {
    background: ${(props) => props.lineColor || colors.whiteColor};
    width: 99%;
  }
`;
