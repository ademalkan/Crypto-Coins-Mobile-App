import React from "react";
import renderer from "react-test-renderer";
import ImageAtom from "./ImageAtom";

jest.mock("./../../../assets/images/logo.png", () => "mocked-logo.png");

describe("ImageAtom", () => {
  it("should render the image prop correctly", () => {
    const image = "https://example.com/image.jpg";
    const component = renderer.create(<ImageAtom image={image} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render the default image when no image prop is provided", () => {
    const component = renderer.create(<ImageAtom />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render the image with custom height when height prop is provided", () => {
    const image = "https://example.com/image.jpg";
    const height = 200;
    const component = renderer.create(
      <ImageAtom image={image} height={height} />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
