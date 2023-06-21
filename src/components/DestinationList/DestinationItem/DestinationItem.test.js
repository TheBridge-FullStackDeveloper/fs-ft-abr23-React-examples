import React from "react";
import { shallow } from "enzyme";
import DestinationItem from "./DestinationItem";

describe("DestinationItem", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DestinationItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
