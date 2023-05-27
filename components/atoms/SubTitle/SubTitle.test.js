import React from "react";
import renderer, { act } from "react-test-renderer";
import SubTitle from "./SubTitle";

describe("SubTitle", () => {
  it("should render the subtitle text", () => {
    const subtitleText = "Hello, World!";
    let component;

    act(() => {
      component = renderer.create(<SubTitle text={subtitleText} />);
    });

    const instance = component.root;
    const subtitle = instance.findByType("Text");

    expect(subtitle.props.children).toBe(subtitleText);
  });
});
