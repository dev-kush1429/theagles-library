import React from "react";
import { Container, Row, CardDeck, Card } from "react-bootstrap";
import { StyledCard } from "./styled.layout";
import defaultProps from "./defaultProps";
import { boolean, text } from "@storybook/addon-knobs";
import baseHelper from "../../helper/baseHelper";
const { getPropValue } = baseHelper;

const FourEqualWidthColumn = (props) => {
  const newProps = { ...defaultProps.props, ...props };
  const { text, style } = newProps;

  const styledCardProps = {
    titleColor: getPropValue("text", "titleColor", style.titleColor, "style"),
    titleFontSize: getPropValue(
      "text",
      "titleFontSize",
      style.titleFontSize,
      "style"
    ),
    textColor: getPropValue("text", "textColor", style.textColor, "style"),
    textFontSize: getPropValue(
      "text",
      "textFontSize",
      style.textFontSize,
      "style"
    ),
  };

  // Card one body

  const cardOneTitle = getPropValue(
    "text",
    "cardOneTitle",
    text.cardOneTitle,
    "text"
  );
  const cardOneBody = getPropValue(
    "text",
    "cardOneBody",
    text.cardOneBody,
    "text"
  );
  const cardOneSrc = getPropValue(
    "text",
    "cardOneSrc",
    text.cardOneSrc,
    "text"
  );
  const cardOneAlt = getPropValue(
    "text",
    "cardOneAlt",
    text.cardOneAlt,
    "text"
  );

  //  Card Two body

  const cardTwoTitle = getPropValue(
    "text",
    "cardTwoTitle",
    text.cardTwoTitle,
    "text"
  );
  const cardTwoBody = getPropValue(
    "text",
    "cardTwoBody",
    text.cardTwoBody,
    "text"
  );
  const cardTwoSrc = getPropValue(
    "text",
    "cardTwoSrc",
    text.cardTwoSrc,
    "text"
  );
  const cardTwoAlt = getPropValue(
    "text",
    "cardTwoAlt",
    text.cardTwoAlt,
    "text"
  );

  // Card Three body

  const cardThreeTitle = getPropValue(
    "text",
    "cardThreeTitle",
    text.cardThreeTitle,
    "text"
  );
  const cardThreeBody = getPropValue(
    "text",
    "cardThreeBody",
    text.cardThreeBody,
    "text"
  );
  const cardThreeSrc = getPropValue(
    "text",
    "cardThreeSrc",
    text.cardThreeSrc,
    "text"
  );
  const cardThreeAlt = getPropValue("text", "alt", text.cardThreeAlt, "text");

  return (
    <Container>
      <Row>
        <CardDeck>
          <StyledCard className="card" {...styledCardProps}>
            <Card.Img variant="top" src={cardOneSrc} alt={cardOneAlt} />
            <Card.Body>
              <Card.Title>{cardOneTitle}</Card.Title>
              <Card.Text>{cardOneBody}</Card.Text>
            </Card.Body>
          </StyledCard>
          <StyledCard className="card" {...styledCardProps}>
            <Card.Img variant="top" src={cardTwoSrc} alt={cardTwoAlt} />
            <Card.Body>
              <Card.Title>{cardTwoTitle}</Card.Title>
              <Card.Text>{cardTwoBody}</Card.Text>
            </Card.Body>
          </StyledCard>
          <StyledCard className="card" {...styledCardProps}>
            <Card.Img variant="top" src={cardThreeSrc} alt={cardThreeAlt} />
            <Card.Body>
              <Card.Title>{cardThreeTitle}</Card.Title>
              <Card.Text>{cardThreeBody}</Card.Text>
            </Card.Body>
          </StyledCard>
          <StyledCard className="card" {...styledCardProps}>
            <Card.Img variant="top" src={cardThreeSrc} alt={cardThreeAlt} />
            <Card.Body>
              <Card.Title>{cardThreeTitle}</Card.Title>
              <Card.Text>{cardThreeBody}</Card.Text>
            </Card.Body>
          </StyledCard>
        </CardDeck>
      </Row>
    </Container>
  );
};
export default FourEqualWidthColumn;
