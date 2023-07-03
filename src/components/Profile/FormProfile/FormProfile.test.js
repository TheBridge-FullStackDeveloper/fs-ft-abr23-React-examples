import React from "react";
import { shallow } from "enzyme";
import FormProfile from "./FormProfile";

describe("FormProfile", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormProfile />);
    expect(wrapper).toMatchSnapshot();
  });
});
