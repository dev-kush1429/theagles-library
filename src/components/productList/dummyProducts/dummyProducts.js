import React, { useState, Fragment } from "react";
import { StyledCard, Info } from "../card/styled.card";
import { Col } from "react-bootstrap";
import data from "./data";

const DummyProducts = () => {
  const [state, setState] = useState(data);
  return (
    <Fragment>
      {state.map(({ id, title, price, image }) => (
        <Col xs={6} lg={3} key={id}>
          <StyledCard
            className="d-block position-relative product-image"
            href={title}
          >
            <img className="d-block" src={image} alt={title} />
          </StyledCard>
          <Info className="info d-block p-3">
            <a href={title} className="d-block mb-1 product-title">
              {title}
            </a>
            <span className="d-block price">{price} </span>
          </Info>
        </Col>
      ))}
    </Fragment>
  );
};
export default DummyProducts;
