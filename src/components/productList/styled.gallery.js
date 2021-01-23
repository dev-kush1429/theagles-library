import styled from "styled-components";
import * as colors from "../../styles/colors";
import * as variable from "../../styles/globalCss";
import { ListGroup } from "react-bootstrap";

export const FilterToolbar = styled.div`
  padding: 10px 0;
`;

export const SearchBar = styled.div`
  background: ${(props) => props.searchBackground || colors.whiteColor};
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.borderColor || "#ddd"};
  border-radius: ${(props) => props.borderRadius || "5px"};
  color: ${(props) => props.iconColor || "#999"};
  padding-left: 35px;
  .search-icon {
    left: 10px;
    top: 10px;
    font-size: 16px;
  }
  .form-control {
    border-color: transparent;
  }
`;

export const StyledListGroup = styled(ListGroup)`
  button.btn.btn-primary {
    color: #6b747c !important;
    background-color: transparent !important;
    border-color: transparent !important;
    font-size: 14px;
    padding: 6px 12px;
    &:after {
      margin-left: 10px;
    }
  }

  button.btn.btn-primary:focus {
    outline: 0;
    box-shadow: none !important;
    border-color: #dae0e5;
  }

  .social {
    display: flex;
    justify-content: flex-end;
  }

  .dropdown-item {
    color: #6b747c;
    padding: 0.15rem 1rem;
    font-size: 13.9px;
    transition: all 0.3s ease-in-out;
  }

  .active,
  .dropdown-item:hover {
    background-color: transparent;
    color: #000;
    outline: 0;
  }
`;

export const StyledRow = styled.div`
  background: ${(props) => props.background || colors.whiteColor};
  display: flex;
`;
export const PaginationItem = styled.li`
  button {
    background: transparent;
    border: 1px solid #ccc;
    height: 45px;
    width: 70px;
    text-align: center;
    line-height: 42px;
    margin: 0 5px;
    transition: all 0.3s ease-in-out;
    &:not([disabled]):hover {
      background: #ccc;
    }
  }
`;

export const Wrapper = styled.div`
  .productPageSpinner {
    margin: auto;
  }
`;

export const StyledInput = styled.input`
  color: ${(props) => props.inputColor || colors.inputColor}!important;
  font-size: ${(props) => props.inputFontSize || variable.inputFontSize};
  padding: ${(props) => props.innerSpace || "6px 14px 6px 0"};
  height: auto;
  width: 100%;
  line-height: 1.5;
  padding: 6px 1px;
  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${(props) => props.placeholderColor || colors.placeholderColor};
    font-size: ${(props) => props.placeholderFontSize || variable.placeFont};
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    color: ${(props) => props.placeholderColor || colors.placeholderColor};
    font-size: ${(props) => props.placeholderFontSize || variable.placeFont};
  }
  &:-ms-input-placeholder {
    color: ${(props) => props.placeholderColor || colors.placeholderColor};
    font-size: ${(props) => props.placeholderFontSize || variable.placeFont};
  }
  &:-moz-placeholder {
    /* Firefox 18- */
    color: ${(props) => props.placeholderColor || colors.placeholderColor};
    font-size: ${(props) => props.placeholderFontSize || variable.placeFont};
  }
`;
