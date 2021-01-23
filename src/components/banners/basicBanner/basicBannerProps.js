const defaultProps = {
  componentName: "basicBanner",
  cms: {
    style: {
      bottomSpace: "Title bottom space",
      containerWidth: "Container size",
    },
    links: {
      linkTitle: "Link title",
      linkUrl: "Link url",
    },
    content: {
      title: "Title",
      content: `Content`,
      linkTitle: "Link title",
      // linkUrl: "Link url ",
    },
    media: {
      imgUrl: "Image url",
      alt: "Atl text *",
    },
  },

  styleType: {
    style: {
      bottomSpace: { type: "textField" },
      containerWidth: { type: "textField" },
    },
  },
  props: {
    style: {
      bottomSpace: "15",
      containerWidth: "700",
    },
    links: {
      linkTitle: "learn more",
      linkUrl: "",
    },
    content: {
      title: "<span>Limits Exist Only in the Mind</span>",
      content: `<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley Lorem
      Ipsum is simply dummy text of the printing and typesetting
      industry.Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley</span>
      `,
    },
    media: {
      background: "/assets/images/eagle-power.jpg",
    },
    media: {
      background: "/assets/images/eagle-power.jpg",
    },
  },
};
export default defaultProps;
