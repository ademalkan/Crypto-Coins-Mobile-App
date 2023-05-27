// import React from "react";
// import { View } from "react-native";
// import { storiesOf } from "@storybook/react-native";
// import Coins from "../../../components/organisms/Coins/Coins";

// const coins = [
//   {
//     id: "1",
//     name: "Bitcoin",
//     symbol: "BTC",
//     current_price: 50000,
//     total_volume: 1000000,
//     price_change_24h: 5,
//     image: "bitcoin.png",
//   },
//   {
//     id: "2",
//     name: "Ethereum",
//     symbol: "ETH",
//     current_price: 3000,
//     total_volume: 500000,
//     price_change_24h: -2,
//     image: "ethereum.png",
//   },
//   // Add more coin data here
// ];

// const searchQuery = "";
// const emptyText = "You have not find any coins yet";
// const title = "Top Coins";

// storiesOf("Organisms/Coins", module)
//   .addDecorator((Story) => (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Story />
//     </View>
//   ))
//   .add("Default", () => (
//     <Coins
//       coins={coins}
//       searchQuery={searchQuery}
//       title={title}
//       emptyText={emptyText}
//     />
//   ));
