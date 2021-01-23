import { contentAlign } from "./basicCardStyleTypes";

const defaultProps = {
  componentName: "basicCard",
  cms: {
    style: {
      bottomSpace: "Title bottom space",
      imageRadius: "Image Shape",
      contentAlign: "Content position",
    },
    links: {
      link1: "Title",
      url1: "url 1",
      link2: "Title",
      url2: "Url 2",
    },
    content: {
      title: "Title",
      paragraph: `Content`,
      link1: "Button link title",
      url1: "Button url",
      link2: "Link title",
      url2: "link url",
    },
    media: {
      imgUrl: "Image url",
      alt: "Atl text *",
    },
  },

  styleType: {
    style: {
      bottomSpace: { type: "textField" },
      imageRadius: { type: "textField" },
      contentAlign: { ...contentAlign },
    },
  },
  props: {
    style: {
      bottomSpace: "20",
      imageRadius: "5",
      contentAlign: "center",
    },
    links: {
      link1: "Add Product",
      url1: "",
      link2: "learn more",
      url2: "/",
    },
    content: {
      title: "<span>Title</span>",
      paragraph: `<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry text of the printing and typesetting industry. </span>`,
    },
    media: {
      imgUrl: "/assets/images/eagle-power.jpg",
      alt: "alt text",
    },
  },
};
export default defaultProps;
