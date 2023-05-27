import React from "react";
import renderer from "react-test-renderer";
import Name from "./Name";

describe("Name", () => {
  it("should render the name prop correctly", () => {
    const name = "Adem ALKAN";

    const component = renderer.create(<Name name={name} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
