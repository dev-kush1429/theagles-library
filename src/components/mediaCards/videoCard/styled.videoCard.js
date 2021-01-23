import styled, { css } from "styled-components";
import * as variable from "../../../styles/globalCss";
import * as colors from "../../../styles/colors";

export const StyledWrapper = styled.div`
  border-radius: ${(props) => props.radius};
  color: ${(props) => props.textColor || {}};
  font-size: ${(props) => props.textFontSize || variable.baseFont};
`;
export const StyledRow = styled.div`
  align-items: ${(props) => props.contentAlign || {}};
  flex-direction: ${(props) => props.columnPosition || {}};
`;
export const Title = styled.h2`
  color: ${(props) => props.titleColor || colors.blackColor};
  font-size: ${(props) => props.titleFontSize || variable.H2};
  font-weight: ${(props) => props.titleFontWeight || {}};
  margin-bottom: ${(props) => props.titleSpace || "20"}px;
`;

export const Iframe = styled.iframe`
  border-radius: ${(props) => props.iframeRadius || "5"}px;
  width: 100%;
  height: ${(props) => props.iframeHeight || "350px"};
`;

export const Link = styled.a`
  padding: 10px 15px;
  margin-right: 10px;
  display: inline-block;
  font-size: ${(props) => props.fontSize || variable.baseFont};
  border: 1px solid ${(props) => props.borderColor || colors.blackColor};
  background: ${(props) => props.bgColor || {}};
  border-radius: ${(props) => props.buttonRadius || {}};
  color: ${(props) => props.buttonColor || colors.blackColor};
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${(props) => props.hoverBgColor || {}};
    color: ${(props) => props.buttonHoverColor || colors.blackColor};
    border-color: ${(props) => props.hoverBorderColor || {}};
    text-decoration: none;
  }
`;

export const Image = styled.img`
  border-radius: ${(props) => props.imageRadius || {}};
`;

export const Paragraph = styled.div`
  margin-bottom: ${(props) => props.bottomSpace || {}};
`;
