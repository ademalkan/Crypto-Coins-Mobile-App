import React from "react";
import renderer, { act } from "react-test-renderer";
import Title from "./Title";

describe("Title", () => {
  it("should render the title text", () => {
    const titleText = "Hello, World!";
    let component;

    act(() => {
      component = renderer.create(<Title text={titleText} />);
    });

    const instance = component.root;
    const title = instance.findByType("Text");

    expect(title.props.children).toBe(titleText);
  });
});
