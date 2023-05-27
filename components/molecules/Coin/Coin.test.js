import React from "react";
import renderer from "react-test-renderer";
import CoinOrganism from "./Coin";

jest.mock("expo-router", () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe("CoinOrganism", () => {
  it("should render the coin organism correctly", () => {
    const coin = {
      name: "Bitcoin",
      symbol: "BTC",
      price: 50000,
      image: "coin.png",
      id: "123",
      total_volume: 1000000,
      price_change_24h: 5,
    };

    const component = renderer.create(<CoinOrganism {...coin} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
