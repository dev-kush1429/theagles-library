import styled from "styled-components";
import * as variable from "../../../styles/globalCss";
import * as colors from "../../../styles/colors";
import device from "../../../styles/breakpoints";

export const StyledFooter = styled.footer`
  background: ${(props) => props.footerBgColor || colors.darkBg};
  line-height: 1.5;
  padding: 70px 0px 35px;
  color: ${(props) => props.textColor || colors.whiteColor};
`;

export const StyledLink = styled.div`
  a,
  span {
    color: ${(props) => props.linkColor || colors.whiteColor};
    font-size: ${(props) => props.fontSize || variable.baseFont};
    text-transform: ${(props) => props.textTransform};
    font-weight: ${(props) => props.fontWeight || variable.fontRegular};
    &:hover {
      color: ${(props) => props.hoverColor || colors.whiteColor};
    }
  }
`;

export const StyledCol = styled.div`
  text-align: center;
  @media ${device.tablet} {
    text-align: right;
    /* text-align: ${(props) => props.textAlign || {}}; */
    
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid ${(props) => props.borderTop || colors.greyColor2};
  margin-top: 50px;
  padding: 50px 0px 20px;
  text-align: center;
  .copyright {
    font-size: 13px;
  }
`;

export const SocialIcons = styled.a`
  color: ${(props) => props.iconColor || {}};
  font-size: ${(props) => props.fontSize || variable.baseFont};
  border-radius: ${(props) => props.radius};
  border: 1px solid ${(props) => props.borderColor || colors.whiteColor};
  display: inline-block;
  margin: 0 7px;
  width: 45px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  &:hover {
    color: ${(props) => props.iconHoverColor || colors.whiteColor};
    border-color: ${(props) => props.hoverBorderColor};
  }
`;
