import React from "react";
import uuid from "react-uuid";
import { Container, Col } from "react-bootstrap";
import Card from "./card";
import { StyledRow, PaginationItem } from "./styled.gallery";
import defaultProps from "./defaultProps";
import DummyProducts from "./dummyProducts";

const Gallery = (props) => {
  const newProps = { ...defaultProps.props, ...props.galleryCSS };
  const { style = {} } = newProps;

  const styledRowProps = {
    background: style.background,
  };

  const {
    products,
    handleCurrentPageValue,
    parentURL,
    currentPage = 1,
    productCount = 0,
    cardStyle,
    role,
  } = props;

  const productPerPage = 20;
  let totalPages = 1;

  if (productCount) {
    totalPages = Math.ceil(productCount / productPerPage);
  }

  const getRowWiseData = (list) => {
    const updatedList = [...list];
    const resultList = [];

    while (updatedList.length) {
      resultList.push(updatedList.splice(0, 4));
    }

    return resultList;
  };

  const getMappedData = (list) => {
    const mappedList = [];

    const url = parentURL ? `${parentURL}/products` : "";

    list.forEach((arr) => {
      const row = arr.map((item) => {
        const {
          _id,
          title,
          description = "",
          handle,
          price,
          primaryImageUrl,
          shopifyProductId,
        } = item; // variants

        let productURL = "";

        if (url && handle && shopifyProductId) {
          productURL = `${url}/${handle}`;
        }

        return (
          <Col
            xs={6}
            lg={3}
            key={`productParentDiv${_id}`}
            className="mb-4 position-relative"
          >
            <Card
              text={{
                alt: title,
                description,
                price: `$${price || 0.0}`,
                productURL,
                srcURL: primaryImageUrl && primaryImageUrl.trim(),
                title,
              }}
              style={{ ...cardStyle }}
            />
          </Col>
        );
      });
      mappedList.push(row);
    });

    return mappedList;
  };

  const productLists = () => {
    if (products && products.length) {
      const formattedData = getRowWiseData(products);
      const mappedData = getMappedData(formattedData);

      return mappedData.map((item) => {
        return (
          <StyledRow {...styledRowProps} className="row" key={uuid()}>
            {item}
          </StyledRow>
        );
      });
    } else if (role === "seller") {
      // role === "seller" is only for page builder seller side adding dummy products
      return (
        <StyledRow {...styledRowProps} className="row" key={uuid()}>
          <DummyProducts />
        </StyledRow>
      );
    }
    return <div className="text-center">No Products found</div>;
  };

  return (
    <Container className="px-lg-4">
      {productLists()}
      {(totalPages > 1 && (
        <ul className="pagination mb-0 justify-content-center">
          {currentPage !== 1 && (
            <PaginationItem className="page-item">
              <button
                type="button"
                onClick={() => handleCurrentPageValue("previous")}
              >
                <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                {/*  disabled={currentPage === 1} */}
              </button>
            </PaginationItem>
          )}
          {currentPage !== totalPages && (
            <PaginationItem className="page-item">
              <button
                type="button"
                onClick={() => handleCurrentPageValue("next")}
              >
                {/* disabled={currentPage === totalPages} */}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </button>
            </PaginationItem>
          )}
        </ul>
      )) ||
        ""}
    </Container>
  );
};

export default Gallery;
