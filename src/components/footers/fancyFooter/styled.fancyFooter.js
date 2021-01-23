import styled from "styled-components";
import * as variable from "../../../styles/globalCss";
import * as colors from "../../../styles/colors";
import device from "../../../styles/breakpoints";

export const Footer = styled.footer`
  background: ${(props) => props.footerBackground || "#36444f"};
  color: ${(props) => props.textColor || colors.whiteColor};
  padding: 40px 10px;
`;

export const Title = styled.h4`
  color: ${(props) => props.titleColor || colors.whiteColor};
  font-size: ${(props) => props.titleFontSize || variable.baseFont};
  text-transform: ${(props) => props.titleFont || "uppercase"};
  font-weight: 600;
`;

export const SocialIcons = styled.a`
  color: ${(props) => props.iconColor || colors.whiteColor};
  font-size: ${(props) => props.size || "25px"};
  display: inline-block;
  &:hover {
    color: ${(props) => props.iconHoverColor || {}} !important;
    /* border-color: ${(props) => props.hoverBorderColor}; */
  }
`;
