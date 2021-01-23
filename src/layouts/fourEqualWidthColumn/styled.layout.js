import styled from "styled-components";
import * as variable from "../../styles/globalCss";
import * as colors from "../../styles/colors";

export const StyledCard = styled.div`
  .card-title {
    color: ${(props) => props.titleColor || colors.blackColor};
    font-size: ${(props) => props.titleFontSize || variable.H4};
  }
  .card-text {
    color: ${(props) => props.textColor || colors.blackColor};
    font-size: ${(props) => props.textFontSize || variable.baseFont};
  }
`;
