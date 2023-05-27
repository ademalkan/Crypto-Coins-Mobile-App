import React from "react";
import renderer from "react-test-renderer";
import Price from "./Price";

describe("Price", () => {
  it("should render the price prop correctly", () => {
    const price = 9.99;

    const component = renderer.create(<Price price={price} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
