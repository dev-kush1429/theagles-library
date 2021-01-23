import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

import {
  BasicForm,
  BasicBanner,
  BannerWithCard,
  BasicSlider,
  BasicCard,
  Footer,
  FancyFooter,
  GridForm,
  Header,
  InformationCard,
  PortraitVideo,
  ProductList,
  SmartHeader,
  VideoCard,
} from "./components";
// import { ThreeEqualWidthColumn } from "./layouts";

import baseHelper from "./helper/baseHelper";

const { getDefaultProps } = baseHelper;

const thumbnailImage = `/assets/images/eagle-power.jpg`;

export {
  BasicForm,
  BasicBanner,
  BannerWithCard,
  BasicSlider,
  BasicCard,
  Footer,
  FancyFooter,
  GridForm,
  Header,
  // ThreeEqualWidthColumn,
  InformationCard,
  PortraitVideo,
  ProductList,
  SmartHeader,
  VideoCard,
};
const exportOBJ = {
  // Headers
  header: {
    name: "header",
    props: getDefaultProps("header"),
    thumbnail: `${thumbnailImage}/header.png`,
    groupId: "headers",
  },
  smartHeader: {
    name: "smartHeader",
    props: getDefaultProps("smartHeader"),
    thumbnail: `${thumbnailImage}/smart-header.png`,
    groupId: "headers",
  },
  //-----------------------------------------------------
  //                     Banners
  //-----------------------------------------------------
  basicBanner: {
    name: "basicBanner",
    props: getDefaultProps("basicBanner"),
    thumbnail: `${thumbnailImage}/banner.png`,
    groupId: "banners",
  },
  bannerWithCard: {
    name: "bannerWithCard",
    props: getDefaultProps("bannerWithCard"),
    thumbnail: `${thumbnailImage}/banner-card.png`,
    groupId: "banners",
  },

  //-----------------------------------------------------
  //                    Media Cards
  //-----------------------------------------------------
  basicCard: {
    name: "basicCard",
    props: getDefaultProps("basicCard"),
    thumbnail: `${thumbnailImage}/basic-media-card.png`,
    groupId: "media cards",
  },
  informationCard: {
    name: "informationCard",
    props: getDefaultProps("informationCard"),
    thumbnail: `${thumbnailImage}/product-detail.png`,
    groupId: "media cards",
  },
  portraitVideo: {
    name: "portraitVideo",
    props: getDefaultProps("portraitVideo"),
    thumbnail: `${thumbnailImage}/portrait-video.png`,
    groupId: "media cards",
  },

  videoCard: {
    name: "videoCard",
    props: getDefaultProps("videoCard"),
    thumbnail: `${thumbnailImage}/video-card.png`,
    groupId: "media cards",
  },
  //-----------------------------------------------------
  //                     Sliders
  //-----------------------------------------------------
  basicSlider: {
    name: "basicSlider",
    props: getDefaultProps("basicSlider"),
    thumbnail: `${thumbnailImage}/slider.png`,
    groupId: "slider",
  },
  //-----------------------------------------------------
  //                     product List
  //-----------------------------------------------------
  productList: {
    name: "productList",
    props: getDefaultProps("productList"),
    thumbnail: `${thumbnailImage}/product-listing.png`,
    groupId: "productList",
  },
  //-----------------------------------------------------
  //                        Forms
  //-----------------------------------------------------
  basicForm: {
    name: "basicForm",
    props: getDefaultProps("basicForm"),
    thumbnail: `${thumbnailImage}/basic-form.png`,
    groupId: "forms",
  },
  gridForm: {
    name: "gridForm",
    props: getDefaultProps("gridForm"),
    thumbnail: `${thumbnailImage}/grid-form.png`,
    groupId: "forms",
  },
  //-----------------------------------------------------
  //                       Footer
  //-----------------------------------------------------
  footer: {
    name: "footer",
    props: getDefaultProps("footer"),
    thumbnail: `${thumbnailImage}/footer.png`,
    groupId: "footers",
  },
  // Fancy footer
  fancyFooter: {
    name: "fancyFooter",
    props: getDefaultProps("fancyFooter"),
    thumbnail: `${thumbnailImage}/fancy-foote.png`,
    groupId: "footers",
  },

  // Layouts
  // threeEqualWidthColumn: {
  //   name: "threeEqualWidthColumn",
  //   props: getDefaultProps("threeEqualWidthColumn"),
  //   thumbnail: `${thumbnailImage}/3-col.png`,
  //   groupId: "layout",
  // },
};

if (process.env.REACT_APP_TEST_MODE) {
  try {
    import("./App.js")
      .then((module) => {
        const App = module.default;
        ReactDOM.render(<App />, document.getElementById("root"));
      })
      .catch((err) => {});
  } catch (error) {}
}

export default exportOBJ;
