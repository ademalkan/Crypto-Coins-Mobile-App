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

  it("should render the image with custom width and height when width and height props are provided", () => {
    const image = "https://example.com/image.jpg";
    const width = 300;
    const height = 200;
    const component = renderer.create(
      <ImageAtom image={image} width={width} height={height} />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
