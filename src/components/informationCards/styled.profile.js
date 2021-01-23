import styled from "styled-components";
import { Row } from "react-bootstrap";
import * as variable from "../../styles/globalCss";
import * as colors from "../../styles/colors";

export const StyledRow = styled.div`
  align-items: ${(props) => props.contentPosition || "center"};
`;

export const Title = styled.h2`
  color: ${(props) => props.titleColor || colors.blackColor};
  font-size: ${(props) => props.titleFontSize || "30px"};
  text-transform: ${(props) => props.textTransform};
`;
export const Info = styled.div`
  border-top: 1px solid ${(props) => props.topBorderColor || "#ccc"};
  border-bottom: 1px solid ${(props) => props.bottomBorderColor || "#ccc"};
  padding: 35px 0px 20px;
`;
export const Paragraph = styled.p`
  font-size: ${(props) => props.textFontSize};
  color: ${(props) => props.textColor};
`;
export const Image = styled.img`
  max-height: 600px;
  object-fit: cover;
  width: 100%;
`;
