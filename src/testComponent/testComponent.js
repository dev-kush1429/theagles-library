/* THIS FILE IS FOR TEST PURPOSE ONLY */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BannerWithCard,
  BannerWIthInlineContent,
  BasicBanner,
  BasicCard,
  BasicForm,
  BasicSlider,
  Footer,
  FancyFooter,
  GridForm,
  Header,
  InformationCard,
  PortraitVideo,
  ProductList,
  ProfileDetail,
  SmartHeader,
  VideoCard,
} from "../components";
import ReactDOMServer from "react-dom/server";
import { ThreeEqualWidthColumn } from "../layouts";

import Select from "./select";
import ColorPalet from "./colorPalet";
import TextField from "./textField";

import baseHelper from "../helper/baseHelper";
import "./index.css";

const { getDefaultProps } = baseHelper;

const apiURL = "https://jsonplaceholder.typicode.com/photos"; // "http://localhost:9020/api";
const authHeader = {
  Host: "auth",
  apikey: process.env.REACT_APP_API_KEY || "sdbjkdsbgjskdfhgjdfg235t65663456",
};
const publicHeader = {
  Host: "public",
  apikey: process.env.REACT_APP_API_KEY || "sdbjkdsbgjskdfhgjdfg235t65663456",
};

const proxyURL =
  process.env.REACT_APP_PROXY_URL ||
  "https://jsonplaceholder.typicode.com/photos";

const clientURL = process.env.REACT_APP_CLIENT_URL || "http://localhost:3000";

const config = {
  apiURL,
  publicHeader,
  authHeader,
  clientURL,
  proxyURL,
};

// const onSubmitCallback = (data) => {
//   console.log("=======", data);
// };

const component = "portraitVideo";
const Component = PortraitVideo;
export default function TestComponent(props) {
  const [properties, setProperties] = useState(
    getDefaultProps(component).props
  );

  const [isEditMode, setEditMode] = useState(true);
  const cms = getDefaultProps(component).cms;
  const styleType = getDefaultProps(component).styleType;

  const updateData = (property, subProperty, value) => {
    const state = { ...properties };
    state[property][subProperty] = value;
    setProperties(state);
  };

  const { style = {}, content = {}, media = {}, links = {} } = properties;
  const getProperties = () => {
    return (
      <section className="test-component">
        <div>
          <div className="">Style</div>
          {Object.entries(style).map(([key]) => (
            <div key={key} className="toolBox-properties">
              <label>{cms.style[key]}:</label>
              {styleType.style[key].type === "select" && (
                <Select
                  value={properties.style[key]}
                  options={styleType.style[key].options}
                  updateData={updateData}
                  keyProperty={key}
                  property="style"
                />
              )}
              {styleType.style[key].type === "textField" && (
                <TextField
                  value={properties.style[key]}
                  setValue={(e) => updateData("style", key, e.target.value)}
                />
              )}
              {styleType.style[key].type === "color" && (
                <ColorPalet
                  color={properties.style[key]}
                  updateData={updateData}
                  keyProperty={key}
                  property="style"
                />
              )}
            </div>
          ))}
        </div>
        <div>
          <div>Content</div>
          {Object.entries(content).map(([key]) => (
            <div key={key} className="test-component toolBox-properties">
              <label>{cms.content[key]}:</label>
              <input
                type="text"
                value={properties.content[key]}
                onChange={(e) => {
                  updateData("content", key, e.target.value);
                }}
              />
            </div>
          ))}
        </div>

        <div>
          <div>Links</div>
          {Object.entries(links).map(([key]) => (
            <div key={key} className="test-component toolBox-properties">
              <label>{cms.links[key]}:</label>
              <input
                type="text"
                value={properties.links[key]}
                onChange={(e) => {
                  updateData("links", key, e.target.value);
                }}
              />
            </div>
          ))}
        </div>
        <div>
          <div>Media</div>
          {Object.entries(media).map(([key]) => (
            <div key={key} className="test-component toolBox-properties">
              <label>{cms.media[key]}:</label>
              <input
                type="text"
                value={properties.media[key]}
                onChange={(e) => {
                  updateData("media", key, e.target.value);
                }}
              />
            </div>
          ))}
        </div>
      </section>
    );
  };

  const updateProps = (property, key, value, setData) => {
    setData((prev) => {
      const newData = { ...prev };
      newData[property][key] = value;
      return newData;
    });
  };

  return (
    <div className="testingComponent">
      <main className="testingComponentMain">
        <Component
          config={config}
          {...props}
          brandName={"Business Canada store"}
          shop={"canada-post-testing-store"}
          // role={"seller"}
          {...properties}
          isEditMode={isEditMode}
          setData={setProperties}
          updateProps={updateProps}
          // onSubmitCallback={onSubmitCallback}
        />
        {/*  anner config={config} {...props} {...properties} />
        {/*  <TagBanner {...properties} /> */}
        {/*  <BasicBanner {...properties} /> */}
      </main>
      <button
        onClick={() => {
          console.log("-----", properties);
          setEditMode((prev) => !prev);
        }}
      >
        data, isEditMode: {JSON.stringify(isEditMode)}
      </button>
      {/*    <MyComponent /> */}
      <aside className="testingComponentAside">{getProperties()}</aside>
    </div>
  );
}
