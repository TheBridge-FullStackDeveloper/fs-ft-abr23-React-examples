import React from "react";
import { shallow } from "enzyme";
import HooksUseStateObject from "./HooksUseStateObject";

describe("HooksUseStateObject", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HooksUseStateObject />);
    expect(wrapper).toMatchSnapshot();
  });
});
