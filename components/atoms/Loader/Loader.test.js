import React from "react";
import renderer, { act } from "react-test-renderer";
import Loader from "./Loader";

describe("Loader", () => {
  it("should render loading text", () => {
    let component;

    act(() => {
      component = renderer.create(<Loader />);
    });

    const instance = component.root;
    const loadingText = instance.findByType("Text");

    expect(loadingText.props.children).toBe("Loading...");
  });
});
