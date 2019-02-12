import React from "react";
import CardBox from "../CardBox";

describe("<CardBox />", () => {
  it("should render", () => {
    const wrapper = shallow(<CardBox />);
    expect(wrapper).toMatchSnapshot();
  });
});
