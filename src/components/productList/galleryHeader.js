import React from "react";
import {
  Container,
  Col,
  DropdownButton,
  Dropdown,
  ListGroup,
} from "react-bootstrap";

import {
  SearchBar,
  FilterToolbar,
  StyledListGroup,
  StyledInput,
} from "./styled.gallery";
import baseHelper from "../../helper/baseHelper";
import defaultProps from "./defaultProps";

const { getPropValue } = baseHelper;

const GalleryHeader = (props) => {
  const {
    handleSortValueChange,
    handleSearchChange,
    searchValue,
    productCount = 0,
  } = props;

  const newProps = { ...defaultProps.props };

  const { style } = newProps;

  return (
    <Container className="px-lg-4">
      <h5 className="text-uppercase text-left mb-4">{`Products (${productCount})`}</h5>

      <FilterToolbar
        // {...filterToolbarProps}
        className="filter-toolbar row align-items-center mb-4"
      >
        <Col md={3} xs={8}>
          <SearchBar
            // {...searchProps}
            className="form-group has-search w-100 mb-0 position-relative"
          >
            <i
              className="fa fa-search search-icon position-absolute"
              aria-hidden="true"
            ></i>
            <StyledInput
              // {...inputStyleProps}
              type="text"
              className="form-control"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search"
            />
          </SearchBar>
        </Col>
        <Col md={4} xs={4} className="offset-md-5">
          <StyledListGroup horizontal className="social gallery-icons p-0">
            <ListGroup.Item className="sort-drop p-0 ml-auto border-0">
              <DropdownButton
                alignRight
                title="Sort By"
                id="dropdown-menu-align-right"
                className="dropdown-margin"
              >
                <Dropdown.Item
                  eventKey="1"
                  onSelect={() => handleSortValueChange("createdAt", "asc")}
                >
                  Date (Asc)
                </Dropdown.Item>

                <Dropdown.Item
                  eventKey="2"
                  onSelect={() => handleSortValueChange("createdAt", "desc")}
                >
                  Date (Desc)
                </Dropdown.Item>

                <Dropdown.Item
                  eventKey="3"
                  onSelect={() => handleSortValueChange("title", "asc")}
                >
                  Product Title (Asc)
                </Dropdown.Item>

                <Dropdown.Item
                  eventKey="4"
                  onSelect={() => handleSortValueChange("title", "desc")}
                >
                  Product Title (Desc)
                </Dropdown.Item>
              </DropdownButton>
            </ListGroup.Item>
          </StyledListGroup>
        </Col>
      </FilterToolbar>
    </Container>
  );
};
export default GalleryHeader;
