import React from "react";
import renderer from "react-test-renderer";
import ButtonGroup from "./ButtonGroup";

describe("ButtonGroup", () => {
  it("should render the buttons correctly", () => {
    const buttons = [
      { label: "Button 1", onPress: jest.fn(), selected: true },
      { label: "Button 2", onPress: jest.fn(), selected: false },
      { label: "Button 3", onPress: jest.fn(), selected: false },
    ];

    const component = renderer.create(<ButtonGroup buttons={buttons} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
