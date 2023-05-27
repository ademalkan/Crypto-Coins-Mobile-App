import React from "react";
import renderer from "react-test-renderer";
import Coins from "./Coins";

jest.mock("expo-router", () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe("Coins", () => {
  it("should render the coins component correctly", () => {
    const coins = [
      {
        id: "1",
        name: "Bitcoin",
        symbol: "BTC",
        current_price: 50000,
        total_volume: 1000000,
        price_change_24h: 5,
        image: "coin.png",
      },
      {
        id: "2",
        name: "Ethereum",
        symbol: "ETH",
        current_price: 3000,
        total_volume: 500000,
        price_change_24h: -2,
        image: "coin.png",
      },
    ];

    const searchQuery = "";
    const title = "Coin List";
    const emptyText = "You have not found any coins yet";

    const component = renderer.create(
      <Coins
        coins={coins}
        searchQuery={searchQuery}
        title={title}
        emptyText={emptyText}
      />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
