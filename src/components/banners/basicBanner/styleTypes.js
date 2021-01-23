export const transform = {
  type: "select",
  options: [
    { label: "Capitalize", value: "capitalize" },
    { label: "Uppercase", value: "uppercase" },
    { label: "Lowercase", value: "lowercase" },
  ],
};
export const fontSize = {
  type: "textField",
};
export const fontWeight = {
  type: "select",
  options: [
    { label: "Light", value: "300" },
    { label: "Normal", value: "400" },
    { label: "Medium", value: "500" },
    { label: "Bold", value: "600" },
  ],
};

export const contentAlign = {
  type: "select",
  options: [
    { label: "top", value: "flex-start" },
    { label: "center", value: "center" },
  ],
};
