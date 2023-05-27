import React from "react";
import renderer, { act } from "react-test-renderer";
import AlertText from "./AlertText";

describe("AlertText", () => {
  it("should render the text prop correctly", () => {
    const text = "Hello, World!";
    let component;

    act(() => {
      component = renderer.create(<AlertText text={text} />);
    });

    const instance = component.root;
    const textElement = instance.findByType("Text");

    expect(textElement.props.children).toBe(text);
  });
});
