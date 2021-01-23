import { logoWidth, logoHeight } from "./styleTypes";

const defaultProps = {
  componentName: "bannerWithCard",
  cms: {
    style: {
      titleColor: " Title color ",
      titleFontSize: "Title font size",
      radius: "Card shape",
      logoMaxWidth: "Logo max width",
      logoMaxHeight: "Height",
      tabBodyColor: "Text color",
      tabBodyFontSize: "Font size",
    },

    content: {
      brandName: "Brand name",
      contactInfoLabel: "Contact Info",
      description: "Description",
      buttonText: "Button text",
      aboutTab: "About",
      contactTab: "Contact",
      address: "Address",
      email: "Email ",
      city: "City",
      country: "Country",
      firstName: "First name",
      lastName: "Last name",
      isInactive: "Boolean",
      phoneNumber: "Mobile number",
      pinCode: "Pin code",
    },
    media: {},
  },

  styleType: {
    style: {
      titleColor: { type: "color" },
      titleFontSize: { type: "textField" },
      radius: { type: "textField" },
      logoMaxWidth: { ...logoWidth },
      logoMaxHeight: { ...logoHeight },
      tabBodyColor: { type: "color" },
      tabBodyFontSize: { type: "textField" },
    },
  },
  props: {
    content: {
      brandName: "Brand name",
      contactInfoLabel: "Contact Info",
      description: "Please Add/Update your brand description",
      buttonText: "Button text",
      aboutTab: "About",
      contactTab: "Contact",
      address: "address",
      email: "email address",
      city: "city",
      country: "country",
      firstName: "first name",
      isInactive: false,
      lastName: "last name",
      phoneNumber: "phone number",
      pinCode: "pin code",
    },
    style: {
      titleColor: "#000",
      titleFontSize: "28",
      radius: "5",
      logoMaxWidth: "180px",
      logoMaxHeight: "110px",
      tabBodyColor: "#000",
      tabBodyFontSize: "16",
    },
    media: {},
    vendorInfo: {},
  },
};

export default defaultProps;
