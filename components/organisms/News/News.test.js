import React from "react";
import renderer from "react-test-renderer";
import News from "./News";

jest.mock("../../../context/CryptoNewsContext", () => ({
  CryptoNewsContext: {
    cryptoNews: [
      {
        id: "1",
        title: "Bitcoin News",
        description: "Lorem ipsum dolor sit amet.",
        author: "John Doe",
        thumb_2x: "news.png",
        url: "https://example.com/news/1",
      },
      {
        id: "2",
        title: "Ethereum News",
        description: "Lorem ipsum dolor sit amet.",
        author: "Jane Smith",
        thumb_2x: "news.png",
        url: "https://example.com/news/2",
      },
    ],
  },
}));

describe("News", () => {
  it("should render the news component correctly", () => {
    const component = renderer.create(<News />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
