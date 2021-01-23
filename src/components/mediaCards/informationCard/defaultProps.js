import { transform, contentAlign } from "./styleTypes";

const defaultProps = {
  componentName: "informationCard",
  cms: {
    style: {
      columnPosition: "Content position",
      titleText: "Text Transform",
      bottomSpace: "Title bottom space",
      contentSpace: "Inner space",
      borderColor: "Border color",
    },
    content: {
      title: "Title",
      paragraph1: "Content",
      paragraph2: "Content",
    },
    media: {
      imageUrl: "Image url",
      alt: "Alt text *",
    },
  },

  styleType: {
    style: {
      columnPosition: { ...contentAlign },
      titleText: { ...transform },
      bottomSpace: { type: "textField" },
      contentSpace: { type: "textField" },
      borderColor: { type: "color" },
    },
    content: {},
    media: {},
  },
  props: {
    //editable part
    style: {
      columnPosition: "center",
      bottomSpace: "20",
      contentSpace: "20",
      titleText: "uppercase",
      borderColor: "#ccc",
    },
    content: {
      title: "<span>alpha</span>",
      paragraph1:
        "<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall</span>",
      paragraph2:
        "<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall</span>",
    },
    media: {
      imageUrl: "/assets/images/eagle-power.jpg",
      alt: "alt text",
    },
  },
};

export default defaultProps;
