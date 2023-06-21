import React from "react";
import { shallow } from "enzyme";
import ShowText from "./ShowText";

describe("ShowText", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ShowText />);
    expect(wrapper).toMatchSnapshot();
  });
});
