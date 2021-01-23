import styled from "styled-components";
import * as variable from "../../styles/globalCss";
import * as colors from "../../styles/colors";
import device from "../../styles/breakpoints";

export const StyledInput = styled.input`
  color: ${(props) => props.inputColor || colors.inputColor};
  font-size: ${(props) => props.fontSize || "16"}px;
  border: 1px solid ${(props) => props.borderColor || colors.borderColor};
  background: ${(props) => props.background || colors.inputBg};
  padding: ${(props) => props.innerSpace || "14px 14px"};
  height: auto;
  width: 100%;
  line-height: 1.5;
  border-radius: ${(props) => props.inputRadius || "3"}px;

  &:focus {
    outline: none;
  }
  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${(props) => props.placeholderColor || colors.placeholderColor};
    font-size: ${(props) => props.placeholderFontSize || "13"}px;
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    color: ${(props) => props.placeholderColor || colors.placeholderColor};
    font-size: ${(props) => props.placeholderFontSize || "13"}px;
  }
  &:-ms-input-placeholder {
    color: ${(props) => props.placeholderColor || colors.placeholderColor};
    font-size: ${(props) => props.placeholderFontSize || "13"}px;
  }
  &:-moz-placeholder {
    /* Firefox 18- */
    color: ${(props) => props.placeholderColor || colors.placeholderColor};
    font-size: ${(props) => props.placeholderFontSize || "13"}px;
  }
`;

export const TextArea = styled(StyledInput).attrs({
  as: "textarea",
})`
  margin-bottom: 1rem;
`;

export const FormWrapper = styled.div`
  background: ${(props) => props.formBg || colors.formBg};
  text-align: ${(props) => props.textAlign || "center"};
  color: ${(props) => props.color || colors.blackColor};
  border-radius: ${(props) => props.formRadius || "4"}px;
  h2 {
    margin-bottom: 35px;
    @media ${device.tabletL} {
      margin-bottom: 50px;
    }
  }
`;

export const Button = styled.button`
  background: ${(props) => props.buttonBg || colors.formBg};
  color: ${(props) => props.color || colors.blackColor};
  border-radius: ${(props) => props.btnRadius || "3"}px;
  border: 1px solid ${(props) => props.borderColor || colors.blackColor};
  font-size: ${(props) => props.fontSize || "16"}px;
  min-width: 155px;
  padding: 16px 25px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${(props) => props.hoverBg || colors.blackColor};
    color: ${(props) => props.hoverColor || colors.whiteColor};
    border-color: ${(props) => props.hoverBorderColor};
  }
`;
