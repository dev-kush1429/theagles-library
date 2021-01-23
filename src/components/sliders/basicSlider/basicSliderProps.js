import { transform, position } from "./sliderStyleTypes";
const defaultProps = {
  componentName: "basicSlider",
  cms: {
    style: {
      // titleColor: "Title color",
      textTransform: "Text transform",
      contentWidth: "Content width",
      contentPosition: "Position",
    },
    links: {
      slideOneLinkTitle: "Slide one link",
      slideOneUrl: "slide one url",
      slideTwoLinkTitle: "Slide two link",
      slideTwoUrl: "slide two url",
      slideThreeLinkTitle: "Slide three link ",
      slideThreeUrl: "Slide three url",
    },
    content: {
      slideOne: "Slide one quote",
      slideOneSubTitle: " Slide one title",
      slideOneLinkTitle: "Slide one link text",
      slideOneUrl: "Slide one link url",

      slideTwo: "Slide two quote",
      slideTwoSubTitle: "Slide two subtitle",
      slideTwoLinkTitle: "Slide two link text",
      slideTwoUrl: "Slide two url",

      slideThree: "Slide three quote",
      slideThreeSubTitle: "Slide three subtitle",
      slideThreeLinkTitle: "Slide three link text",
      slideThreeUrl: "Slide three url",
    },
    media: {
      oneImage: "Slide image one url",
      altOne: "Slide image one alt text",
      twoImage: "Slide image two",
      altTwo: "Slide image two alt text",
      threeImage: "Slide image three",
      altThree: "Slide image three alt text",
      slideOneUrl: "Slide one refer link",
      slideTwoUrl: "Slide two refer link",
      slideThreeUrl: "Slide three refer link",
    },
  },
  styleType: {
    style: {
      // titleColor: { type: "color" },
      textTransform: { ...transform },
      contentWidth: { type: "textField" },
      contentPosition: { ...position },
    },
    content: {
      media: {
        logo: "input",
        logoAlt: "input",
        slideOneUrl: "input",
        slideTwoUrl: "input",
        slideThreeUrl: "input",
      },
    },
  },
  props: {
    style: {
      // titleColor: "#fff",
      textTransform: "uppercase",
      contentWidth: "600",
      contentPosition: "left",
    },
    links: {
      slideOneLinkTitle: "learn more",
      slideOneUrl: "",
      slideTwoLinkTitle: "learn more",
      slideTwoUrl: "",
      slideThreeLinkTitle: "learn more",
      slideThreeUrl: "",
    },
    content: {
      slideOne: "<span>Limits are Exist Only in the Mind</span>",
      slideOneSubTitle:
        "<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>",

      slideTwo: "<span>Limits are Exist Only in the Mind</span>",
      slideTwoSubTitle:
        "<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>",

      slideThree: "<span>Limits are Exist Only in the Mind</span>",
      slideThreeSubTitle:
        "<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>",
    },
    media: {
      oneImage: "/assets/images/eagle-power.jpg",
      altOne: "alt text",
      twoImage: "/assets/images/eagle-power.jpg",
      altTwo: "alt text",
      threeImage: "/assets/images/eagle-power.jpg",
      altThree: "alt text",
    },
    media: {
      oneImage: "/assets/images/eagle-power.jpg",
      altOne: "alt text",
      twoImage: "/assets/images/eagle-power.jpg",
      altTwo: "alt text",
      threeImage: "/assets/images/eagle-power.jpg",
      altThree: "alt text",
    },
  },
};
export default defaultProps;
