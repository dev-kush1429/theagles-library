import styled, { css } from "styled-components";
import * as variable from "../../../styles/globalCss";
import * as colors from "../../../styles/colors";
import device from "../../../styles/breakpoints";

export const ContactInfo = styled.div`
  background: ${(props) => props.background || "#fff"};
  color: ${(props) => props.titleColor || "white"};
  font-size: ${(props) => props.fontSize || "12"}px;
  address {
    color: ${(props) => props.titleColor || "white"};
  }
`;

export const TabBody = styled.address`
  * {
    color: ${(props) => props.tabBodyColor || "#000"};
    font-size: ${(props) => props.tabBodyFontSize || "16"}px;
  }
  a {
    word-break: break-all;
  }
`;

export const BrandLogo = styled.img`
  max-width: ${(props) => props.logoMaxWidth};
  max-height: ${(props) => props.logoMaxHeight};
`;

export const MainWrapper = styled.div``;

export const PosterImage = styled.div`
  img {
    max-height: 370px;
    object-fit: cover;
    min-height: 200px;
    width: 100%;
  }
`;
export const TabHeader = styled.div``;

export const BrandTitle = styled.h2`
  font-size: ${(props) => props.titleFontSize || "28"}px;
  color: ${(props) => props.titleColor || "#212529"};
`;
export const BannerCard = styled.div`
  margin-top: -120px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
  border-radius: ${(props) => props.radius || {}};
  transition: box-shadow 0.5s linear;
  background-color: ${colors.whiteColor};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  width: calc(100% - 20px);
  @media ${device.tablet} {
    width: 100%;
  }
  .nav-tabs {
    border-bottom: none;
    .nav-link {
      color: #6e5e5580;
      text-transform: capitalize;
      &.active {
        color: #007bff;
        background-color: initial;
        box-shadow: inset 0 -0.1rem 0 #5c6ac4;
      }
      &:focus {
        outline: none;
        border-color: none;
      }
    }
  }
  .tab-content {
    padding: 15px 0 0;
    text-align: left;
  }

  .brand-info .nav-item {
    padding: 0;
    margin-right: 15px;
    border: 0;
  }

  .claim-btn > .btn {
    width: max-content;
  }

  .social-info {
    display: flex;
  }

  .info .list-group-item {
    border: none;
    padding: 0 30px 0;
  }

  .social .list-group-item {
    border: none;
  }
`;
