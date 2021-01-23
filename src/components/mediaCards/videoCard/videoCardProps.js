import {
  fontWeight,
  // iframeHeight,
  contentAlign,
  columnPosition,
} from "./styleTypes";

const defaultProps = {
  componentName: "videoCard",
  cms: {
    style: {
      // titleColor: "Title color",
      titleSpace: "Title bottom space",
      titleFontWeight: "Title font weight",
      // textColor: "Text color",
      iframeRadius: "Border shape",
      contentAlign: "Content position",
      columnPosition: "Column position",
    },
    links: {
      link: "Title",
      url: "Url",
    },
    content: {
      title: "Title",
      paragraph: "Content",
      link: "Button link title",
      url: "Button url",
    },
    media: {
      videoUrl: "Video url",
    },
  },

  styleType: {
    style: {
      // textColor: { type: "color" },
      titleSpace: { type: "textField" },
      // titleColor: { type: "color" },
      titleFontWeight: { ...fontWeight },
      iframeRadius: { type: "textField" },
      contentAlign: { ...contentAlign },
      columnPosition: { ...columnPosition },
    },
    content: {
      title: "input",
      paragraph: "input",
    },
    media: {},
  },
  props: {
    style: {
      // titleColor: "#212529",
      titleSpace: "20",
      titleFontWeight: "400",
      // textColor: "#212529",
      iframeRadius: "5",
      contentAlign: "center",
      columnPosition: "row",
    },
    links: {
      link: "learn more",
      url: "",
    },
    content: {
      title: "<p>Title</p>",
      paragraph: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
       text of the printing and typesetting industry typesetting industry text of the printing and typesetting industry.</p>`,
    },
    media: {
      videoUrl:
        "https://www.youtube.com/embed/jJJX1Yrp4_Y?version=3&loop=1&playlist=jJJX1Yrp4_Y",
    },
  },
};
export default defaultProps;
