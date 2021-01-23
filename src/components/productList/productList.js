import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import baseHelper from "../../helper/baseHelper";
import Gallery from "./gallery";
import GalleryHeader from "./galleryHeader";
import { Wrapper } from "./styled.gallery";

const ProductList = (props) => {
  const { config = {}, match = {}, history = {}, style = {}, role } =
    props || {};
  const { apiURL } = config;

  let queryParams = (history.location && history.location.search) || "";

  const { url, params } = match;
  const { brandName, shop } = params.brandName && params.shop ? params : props;

  const urlString = window.name;
  const parentURL = baseHelper.isValidURL(urlString) ? urlString : "";

  let uri = `${apiURL}/user/brand/${shop}/${brandName}`;

  const [state, setState] = useState({});

  const [productsList, setProductList] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState({
    sort_name: "",
    sort_order: "",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const [productLoading, setProductLoading] = useState(false);
  const [error, setError] = useState(false);

  const setQueryParams = (params) => {
    const { location } = history;
    const search = baseHelper.getQueryParams(location, params);
    history.push(`${location.pathname}?${search}`);
  };

  const unsetQueryParams = (key) => {
    const { location } = history;
    const { search } = location;
    const paramSearch = search.indexOf(key);

    if (paramSearch > -1) {
      const updateUrl = baseHelper.removeQueryParams(location, key);
      history.push(`${updateUrl}`);
    }

    setCurrentPage(1);
  };

  const handleSortValueChange = (name, order) => {
    setSortValue({ sort_name: name, sort_order: order });
    const sortQueryParams = { sort_name: name, sort_order: order };
    setQueryParams(sortQueryParams);
  };

  const handleSearchChange = (e) => {
    const searchedValue = e.target.value;
    setSearchValue(searchedValue);
    const searchQueryParams = { search: searchedValue };
    unsetQueryParams("page");
    setQueryParams(searchQueryParams);
  };

  const handleCurrentPageValue = (key) => {
    let pageValue = currentPage;
    if (key === "previous") {
      pageValue -= 1;
    }

    if (key === "next") {
      pageValue += 1;
    }
    setCurrentPage(pageValue);
    const pageQueryParams = { page: pageValue };
    if (pageValue === 1) {
      history.push(`${url}`);
      return;
    }
    setQueryParams(pageQueryParams);
  };

  const fetchProductDetails = async () => {
    setProductLoading(true);
    try {
      const getProductUrl = `${apiURL}/public/brand/product/${shop}/${brandName}${queryParams}`;
      const requestParams = { uri: getProductUrl };
      const options = baseHelper.getRequestOptions(requestParams, config);

      const response = await axios(options);
      if (response.data && response.data.status === "ok") {
        const { products = [], productCount } =
          response.data.data || response.data;
        setProductList({
          ...productsList,
          products,
          search: productCount,
          productCount,
        });
      }
      setProductLoading(false);
    } catch (err) {
      console.error("Error is:", err.message);
      setProductLoading(false);
    }
  };
  const getUserDetails = async (updateUrl) => {
    try {
      const requestParams = { uri: updateUrl };
      const options = baseHelper.getRequestOptions(requestParams, config);
      const response = await axios(options);

      if (response.data && response.data.status === "ok") {
        const { user, productCount, orderCount, brandDetail = {}, url } =
          response.data.data || response.data;
        const temp = {
          ...state,
          user,
          productCount,
          orderCount,
          brandDetail,
          url,
        };

        setState(temp);
        fetchProductDetails();
      }
    } catch (err) {
      console.error("Error is: ", err.message);
      setError(true);
    }
  };

  const getQueryParamsArray = (params) => {
    const paramObj = baseHelper.splitQueryParams(params);
    if (paramObj && paramObj.search) {
      setSearchValue(paramObj.search);
    }
  };

  useEffect(() => {
    if (brandName) {
      getUserDetails(uri);
    }
  }, [brandName]);

  useEffect(() => {
    if (sortValue || searchValue || currentPage) {
      fetchProductDetails();
    }
    if (queryParams) {
      getQueryParamsArray(queryParams);
    }
  }, [sortValue, searchValue, currentPage, queryParams]);

  const productSpinner = () => (
    <ReactLoading className="productPageSpinner" type="spin" color="#999" />
  );

  const barCSS = {
    style: {
      barBackground: style.barBackground,
      searchBackground: style.searchBackground,
      searchBorderRadius: style.searchBorderRadius,
    },
  };

  const galleryCSS = {
    style: {
      background: style.background,
    },
  };

  return (
    <Wrapper className="gallery-bg">
      <GalleryHeader
        className="margin-top"
        handleSortValueChange={handleSortValueChange}
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
        productCount={productsList.productCount}
        barCSS={barCSS}
      />
      {(productLoading && productSpinner()) || (
        <Gallery
          galleryCSS={galleryCSS}
          parentURL={parentURL}
          products={productsList.products}
          productCount={productsList.search}
          currentPage={currentPage}
          role={role}
          handleCurrentPageValue={handleCurrentPageValue}
          error={error}
        />
      )}
    </Wrapper>
  );
};

export default ProductList;
