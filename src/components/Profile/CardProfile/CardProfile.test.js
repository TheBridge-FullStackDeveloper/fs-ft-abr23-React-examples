import React from "react";
import { shallow } from "enzyme";
import CardProfile from "./CardProfile";

describe("CardProfile", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardProfile />);
    expect(wrapper).toMatchSnapshot();
  });
});
