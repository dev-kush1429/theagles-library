import { text, boolean } from "@storybook/addon-knobs";
import defaultProps from "../defaultProps";

class BaseHelper {
  getBgClassName(isActive) {
    let classes = "add-on-row section mx-0 align-items-md-center ";
    if (isActive) {
      classes += "active-bg";
      return classes;
    }
    return classes;
  }

  getDefaultProps(componentName) {
    return defaultProps[componentName];
  }

  getPropValue(type, key, value, groupId) {
    const storyBookMode = process.env.STORYBOOK_STORY_MODE;
    if (!storyBookMode) return value;

    if (type === "text") {
      const propValue = text(key, value, groupId);
      return propValue;
    }

    if (type === "boolean") {
      const propValue = boolean(key, value, groupId);
      return propValue;
    }

    return null;
  }

  getVideoIdId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    const videoId = match && match[2].length === 11 ? match[2] : null;
    return videoId;
  }

  /**
   * @desc To get absolute url of image options
   *
   * @param {String} image
   *
   * @return {String} image url
   *
   */
  getImagePath(image) {
    const imagePath = `${this.getRootUrl()}/assets/`;
    if (!image) {
      return imagePath;
    }

    return `${imagePath}${image}`;
  }

  /**
   * @desc To get request options
   *
   * @return options
   *
   */
  getRequestOptions = (requestData, config) => {
    const { publicHeader, proxyURL } = config;

    const { uri, method = "GET", data = "" } = requestData;

    const apiPayload = {
      headers: publicHeader,
      json: true,
      method,
      body: data,
      uri: encodeURI(uri),
    };

    // convertedPayload,
    const options = {
      method: "POST",
      data: apiPayload,
      url: proxyURL,
    };

    return options;
  };

  /**
   * @desc To set query params
   * @param location object
   * @param queryParams object
   *
   * @return query params
   *
   */
  getQueryParams = (location, queryParams) => {
    let { search } = location;
    const trimmedSearch = search.trim();
    const params = new URLSearchParams(trimmedSearch);
    Object.keys(queryParams).forEach((key) => {
      params.set(key, queryParams[key]);
    });
    search = params.toString();
    return search.replace("%40", "@");
  };

  /**
   * @desc To get root url of current domain
   *
   * @return root url
   *
   */
  getRootUrl() {
    return window.location.origin;
  }

  /**
   * @desc To check if valid url
   * @param url
   *
   * @return bool
   *
   */
  isValidURL(url) {
    if (!url) {
      return false;
    }

    // eslint-disable-next-line max-len
    const validURLRegex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    return validURLRegex.test(url);
  }

  /**
   * @desc To update query params
   * @param location object
   * @param key string
   *
   * @return url
   *
   */
  removeQueryParams = (location, key) => {
    const { pathname, search } = location;

    const sourceURL = `${pathname}${search}`;

    let url = sourceURL.split("?")[0];
    let param;
    let paramArr = [];

    const queryString =
      sourceURL.indexOf("?") !== -1 ? sourceURL.split("?")[1] : "";

    if (queryString !== "") {
      paramArr = queryString.split("&");
      for (let i = paramArr.length - 1; i >= 0; i -= 1) {
        // eslint-disable-next-line prefer-destructuring
        param = paramArr[i].split("=")[0];
        if (param === key) {
          paramArr.splice(i, 1);
        }
      }

      url = `${url}?${paramArr.join("&")}`;
    }
    return url;
  };

  /**
   * @desc To  query params
   * @param queryParams string
   *
   * @return param array
   *
   */

  splitQueryParams = (queryParams) => {
    const query = {};
    const pairs = (queryParams[0] === "?"
      ? queryParams.substr(1)
      : queryParams
    ).split("&");
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split("=");
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }
    return query;
  };
}

export default new BaseHelper();
