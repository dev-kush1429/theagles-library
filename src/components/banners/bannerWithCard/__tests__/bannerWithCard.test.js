import React from "react";

import { shallow, mount } from "enzyme";
import BannerWithCard from "../bannerWithCard";

describe("<BannerWithCard /> ", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(<BannerWithCard />);
  });

  it("Should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  // it("section tag should be there", () => {
  //   expect(wrapper.find("section")).toHaveLength(1);
  // });
});
