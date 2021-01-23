import styled from "styled-components";
import * as variable from "../../../styles/globalCss";
import * as colors from "../../../styles/colors";

export const StyledCard = styled.a`
  max-width: ${(props) => props.maxWidth};
  width: 100%;
  color: ${(props) => props.color || colors.blackColor};
  font-size: ${(props) => props.fontSize || variable.baseFont};
  text-transform: ${(props) => props.textTransform};
  padding-top: 100%;

  img {
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
  }

  &:hover {
    color: ${(props) => props.hoverColor || colors.redColor};
  }
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
`;
export const Info = styled.span`
  font-size: 16px;
  .product-title {
    color: #212529;
    &:hover {
      text-decoration: underline;
    }
  }
  .price {
    color: #8c8c8c;
  }
`;
