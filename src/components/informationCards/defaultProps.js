const defaultProps = {
  componentName: "informationCard",
  position: [],
  props: {
    //editable part
    style: {
      titleColor: "",
      titleFontSize: "",
      textFontSize: "",
      textFontColor: "",
      textTransform: "uppercase",
      borderColor: "",
    },
    content: {
      heading: "alpha",
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall",
      paragraph2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall",
    },
    media: {
      imageUrl: "/assets/images/eagle-power.jpg",
      alt: "alt text",
    },
  },
};

export default defaultProps;
