import React from "react";
import renderer from "react-test-renderer";
import { View, Text } from "react-native";
import SubTitleWithPrice from "./SubTitleWithPrice";

describe("SubTitleWithPrice", () => {
  it("should render the text and price props correctly", () => {
    const text = "Subtitle Text";
    const price = 9.99;

    const component = renderer.create(
      <SubTitleWithPrice text={text} price={price} />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
