import React from "react";

const InlineReadOnlyDiv = (props) => {
  const { value: element, className } = props;

  const support = () => {
    if (!window.DOMParser) return false;
    var parser = new DOMParser();
    try {
      parser.parseFromString("x", "text/html");
    } catch (err) {
      return false;
    }
    return true;
  };

  const stringToHTML = (str) => {
    const isSupported = support();
    if (isSupported) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(str, "text/html");
      const req = doc.body.childNodes[0];
      return req;
    }

    // Otherwise, fallback to old-school method
    var dom = document.createElement("div");
    dom.innerHTML = str;
    return dom;
  };

  const target = stringToHTML(element);
  const MyElement = React.createElement(
    target.nodeName.toLowerCase(),
    { dangerouslySetInnerHTML: { __html: target.innerHTML } },
    null
  );

  return <div className={className}>{MyElement}</div>;
};

export default InlineReadOnlyDiv;
