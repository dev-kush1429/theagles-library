const color = { type: "color" };
const fontSelect = {
  type: "select",
  options: [
    { label: "20", value: "20px" },
    { label: "25", value: "25px" },
    { label: "30", value: "30px" },
  ],
};
const textTransform = {
  type: "select",
  options: [
    { label: "Capitalize", value: "capitalize" },
    { label: "Uppercase", value: "uppercase" },
    { label: "lowercase", value: "lowercase" },
  ],
};
const fontWeight = {
  type: "select",
  options: [
    { label: "Bold", value: "600" },
    { label: "Medium", value: "400" },
    { label: "Light", value: "200" },
  ],
};
const radius = {
  type: "select",
  options: [
    { label: "Square", value: "0%" },
    { label: "Round", value: "10%" },
    { label: "Circle", value: "50%" },
  ],
};

const defaultProps = {
  componentName: "defaultProps",
  elementType: "",
  position: [],
  cms: {
    style: {
      footerBackground: "Background",
      textColor: "Font color",
      fontSize: "Font size",
      textTransform: "Text transform",
      iconSize: "Icon size",
      iconHoverColor: "Icons hover color",
    },
    content: {
      shortInfo1: "shortInfo1",
      shortInfo2: "shortInfo2",
      address: "Address",
      street: "Street",
      building: "Building",
      city: "City",
      country: "Country",
      followUs: "Followus",
    },
    media: {
      twitterUrl: "Twitter url",
      facebookUrl: "Facebook url",
      logo: "Brand logo url",
      altText: "Fallback text",
    },
  },
  styleType: {
    //editable part
    style: {
      footerBackground: { ...color },
      textColor: { ...color },
      fontSize: { ...fontSelect },
      textTransform: { ...textTransform },
      iconSize: { ...fontSelect },
      iconHoverColor: { ...color },
    },
    content: {
      shortInfo1: "input",
      shortInfo2: "input",
      address: "input",
      street: "input",
      building: "input",
      city: "input",
      country: "input",
      followUs: "input",
    },
    media: {
      facebookUrl: "input",
      twitterUrl: "input",
      logo: "input",
      altText: "input",
    },
  },
  props: {
    //editable part
    style: {
      footerBackground: "",
      textColor: "",
      fontSize: "",
      textTransform: "",
      iconSize: "25px",
      iconHoverColor: "red",
    },
    content: {
      shortInfo1: "<p>Lorem ipsum</p>",
      shortInfo2: "<p>Lorem ipsum</p>",
      address: "Address",
      street: "<p>Lorem ipsum</p>",
      building: "<p>Lorem ipsum</p>",
      city: "<p>Lorem ipsum</p>",
      country: "<p>India</p>",
      followUs: "Follow us",
    },
    media: {
      facebookUrl: "https://www.facebook.com",
      twitterUrl: "https://twitter.com/",
      logo: "/assets/images/eagle-power.jpg",
      altText: "Brand image",
    },
    media: {
      logo: "/assets/images/eagle-power.jpg",
      altText: "Required",
    },
  },
};

export default defaultProps;
