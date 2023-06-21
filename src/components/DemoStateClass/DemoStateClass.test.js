import React from "react";
import { shallow } from "enzyme";
import DemoStateClass from "./DemoStateClass";

describe("DemoStateClass", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DemoStateClass />);
    expect(wrapper).toMatchSnapshot();
  });
});
