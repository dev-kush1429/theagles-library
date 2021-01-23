import React, { Fragment } from "react";
import { StyledCard, Info } from "./styled.card";
import defaultProps from "./defaultProps";
import baseHelper from "../../../helper/baseHelper";

const { getPropValue } = baseHelper;

const Card = (props) => {
  const newProps = { ...defaultProps.props, ...props };
  const { style, text } = newProps;

  const styleCardProps = {
    background: getPropValue(
      "text",
      "style-background",
      style.background,
      "style"
    ),
    border: getPropValue("text", "border", style.border, "style"),
    color: getPropValue("text", "color", style.color, "style"),
    hoverColor: getPropValue("text", "hoverColor", style.hoverColor, "style"),
    fontSize: getPropValue("text", "fontSize", style.fontSize, "style"),
    textTransform: getPropValue(
      "text",
      "textTransform",
      style.textTransform,
      "style"
    ),
  };

  const src = getPropValue(
    "text",
    "srcURL",
    text.srcURL ? text.srcURL : defaultProps.props.text.srcURL,
    "text"
  );
  const alt = getPropValue("text", "alt", text.alt, "text");
  const title = getPropValue("text", "title", text.title, "text");
  const price = getPropValue("text", "price", text.price, "text");
  const productURL = getPropValue(
    "text",
    "productURL",
    text.productURL,
    "text"
  );

  return (
    <Fragment>
      <StyledCard
        className="d-block position-relative product-image"
        href={title}
        {...styleCardProps}
      >
        <img className="d-block" src={src} alt={alt} />
      </StyledCard>
      <Info className="info d-block p-3">
        <a href={title} className="d-block mb-1 product-title">
          {title}
        </a>
        <span className="d-block price">{price} </span>
      </Info>
    </Fragment>
  );
};
export default Card;
