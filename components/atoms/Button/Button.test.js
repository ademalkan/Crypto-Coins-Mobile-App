import React from "react";
import { TouchableOpacity, Text } from "react-native";
import renderer, { act } from "react-test-renderer";

import Button from "./Button";

describe("Button", () => {
  it("should render the button correctly", () => {
    let component;

    act(() => {
      component = renderer.create(
        <Button onPress={() => {}} text="Press Me" />
      );
    });

    const instance = component.root;

    const button = instance.findByType(TouchableOpacity);
    expect(button).toBeDefined();

    const buttonText = instance.findByType(Text);
    expect(buttonText.props.children).toBe("Press Me");
  });

  it("should call the onPress function when pressed", () => {
    const onPressMock = jest.fn();
    let component;

    act(() => {
      component = renderer.create(
        <Button onPress={onPressMock} text="Press Me" />
      );
    });

    const instance = component.root;

    const button = instance.findByType(TouchableOpacity);
    act(() => {
      button.props.onPress();
    });

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
