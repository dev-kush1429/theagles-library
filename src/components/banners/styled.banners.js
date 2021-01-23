import styled, { css } from "styled-components";
import * as variable from "../../styles/globalCss";
import * as colors from "../../styles/colors";
import device from "../../styles/breakpoints";

export const Section = styled.section`
  text-align: ${(props) => props.contentPosition || "center"};
  font-size: ${(props) => props.contentFontSize || "16"}px;
  color: ${(props) => props.contentColor || colors.whiteColor};
  padding: 40px 0;
  background: ${(props) =>
    props.background
      ? `url(${props.background}) no-repeat center top/cover`
      : colors.darkBg};
  @media ${device.tablet} {
    padding: 100px 0;
  }
`;

export const StyledContainer = styled.div`
  max-width: ${(props) => props.maxWidth || "700"}px;
`;

// Inline content banner

export const StyledSection = styled(Section)`
  padding: 40px 0 !important;
  background: ${(props) =>
    props.background
      ? `url(${props.background}) no-repeat center top/cover`
      : colors.darkBg};
`;

export const Title = styled.h2`
  font-size: ${(props) => props.headingFontSize || variable.H2};
  color: ${(props) => props.headingColor || colors.whiteColor};
  margin-bottom: ${(props) => props.bottomSpace || "15"}px;
`;

export const StyledLink = styled.a`
  padding: 10px 15px;
  margin-right: 10px;
  display: inline-block;
  color: ${(props) => props.contentColor || colors.whiteColor};
  font-size: ${(props) => props.buttonFontSize || variable.baseFont};
  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.btnType
      ? css`
          border: 1px solid
            ${(props) => props.buttonBorderColor || colors.whiteColor};
          background: ${(props) => props.buttonBg || {}};
          border-radius: ${(props) => props.buttonRadius || {}};
          color: ${(props) => props.buttonColor || colors.whiteColor};
        `
      : ""};
  &:hover {
    background: ${(props) => props.buttonHoverBg || {}};
    color: ${(props) => props.buttonHoverColor || colors.whiteColor};
    border-color: ${(props) => props.hoverBorderColor || {}};
    text-decoration: none;
  }
`;
export const Paragraph = styled.div`
  margin-bottom: ${(props) => props.contentSpace || {}};
`;
