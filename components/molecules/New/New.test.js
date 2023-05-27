import React from "react";
import renderer from "react-test-renderer";
import New from "./New";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe("New", () => {
  it("should render the news item correctly", () => {
    const item = {
      title: "News Title",
      description: "News Description",
      author: "John Doe",
      thumb_2x: "news.png",
      url: "https://example.com/news",
    };

    const component = renderer.create(<New item={item} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
