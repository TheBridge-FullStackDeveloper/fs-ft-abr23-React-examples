import React from "react";
import { shallow } from "enzyme";
import DestinationList from "./DestinationList";

describe("DestinationList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DestinationList />);
    expect(wrapper).toMatchSnapshot();
  });
});
