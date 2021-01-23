import { navFontSize, linkTextTransform, linkFontWeight } from "./styleTypes";

export default {
  componentName: "header",
  cms: {
    style: {
      background: "Background",
      navColor: "Nav link color",
      navHoverColor: "Hover color",
      navFont: "Font size",
      textTransform: "Text transform",
      fontWeight: "Font weight",
    },
    links: {
      link1: "Link 1",
      // url1: "Url",
      link2: "Link 2",
      // url2: "Url",
      link3: "Link 3",
      // url3: "Url ",
    },
    media: {
      logo: "Logo url",
      logoAlt: "Brand image alt",
    },
  },
  styleType: {
    style: {
      background: { type: "color" },
      navColor: { type: "color" },
      navHoverColor: { type: "color" },
      navFont: {
        ...navFontSize,
      },
      textTransform: {
        ...linkTextTransform,
      },
      fontWeight: {
        ...linkFontWeight,
      },
    },
    content: {},
    media: {
      logo: "Logo url",
      logoAlt: "Brand image alt",
    },
  },
  props: {
    //editable part
    style: {
      background: "#36444f",
      navColor: "#fff",
      navHoverColor: "red",
      navFont: "16px",
      textTransform: "capitalize",
      fontWeight: "500",
    },
    links: {
      link1: "Home",
      // url1: "",
      link2: "About",
      // url2: "",
      link3: "join Us",
      // url3: "",
    },
    media: {
      logo: "/assets/images/eagle-power.jpg",
      logoAlt: "logo",
    },
  },
};
