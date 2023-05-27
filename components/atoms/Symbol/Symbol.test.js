import React from "react";
import renderer from "react-test-renderer";
import { Text } from "react-native";
import Symbol from "./Symbol";

describe("Symbol", () => {
  it("should render the symbol prop correctly", () => {
    const symbol = "BTC";

    const component = renderer.create(<Symbol symbol={symbol} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
