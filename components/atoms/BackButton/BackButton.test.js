import React from "react";
import renderer, { act } from "react-test-renderer";
import { useNavigation } from "expo-router";
import BackButton from "./BackButton";

jest.mock("expo-router", () => ({
  useNavigation: jest.fn(),
}));

describe("BackButton", () => {
  it('should render "Back" text', () => {
    useNavigation.mockReturnValue({ goBack: jest.fn() });

    let component;

    act(() => {
      component = renderer.create(<BackButton />);
    });

    const instance = component.root;
    const buttonText = instance.findByType("Text");

    expect(buttonText.props.children).toBe("Back");
  });
});
