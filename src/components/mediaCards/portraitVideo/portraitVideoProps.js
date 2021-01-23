const defaultProps = {
  componentName: "portraitVideo",
  cms: {
    style: {
      // titleColor: "Title color",
      bottomSpace: "Title bottom space",
      // textColor: "Text color",
    },
    links: {
      link: "Title",
      url: "url",
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
      // titleColor: { type: "color" },
      bottomSpace: { type: "textField" },
    },
    content: {},
    media: {},
  },
  props: {
    style: {
      // titleColor: "#212529",
      bottomSpace: "20",
      // textColor: "#212529",
    },
    links: {
      link: "learn more",
      url: "",
    },
    content: {
      title: "<span>Title</span>",
      paragraph: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry text of the printing
       and typesetting industry.</p>`,
      link: "<span>learn more</span>",
      url: "<span>/</span>",
    },
    media: {
      videoUrl:
        "https://www.youtube.com/embed/jJJX1Yrp4_Y?version=3&loop=1&playlist=jJJX1Yrp4_Y",
    },
  },
};
export default defaultProps;
