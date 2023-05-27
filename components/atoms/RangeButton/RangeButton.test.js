import React from "react";
import renderer from "react-test-renderer";
import { TouchableOpacity } from "react-native";
import RangeButton from "./RangeButton";

describe("RangeButton", () => {
  it("should render the label prop correctly", () => {
    const label = "Button Label";
    const onPress = jest.fn();

    const component = renderer.create(
      <RangeButton label={label} onPress={onPress} selected={false} />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should call onPress when button is pressed", () => {
    const label = "Button Label";
    const onPress = jest.fn();

    const component = renderer.create(
      <RangeButton label={label} onPress={onPress} selected={false} />
    );

    const button = component.root.findByType(TouchableOpacity);
    button.props.onPress();

    expect(onPress).toHaveBeenCalled();
  });

  it("should apply selected style when selected prop is true", () => {
    const label = "Button Label";
    const onPress = jest.fn();

    const component = renderer.create(
      <RangeButton label={label} onPress={onPress} selected={true} />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
