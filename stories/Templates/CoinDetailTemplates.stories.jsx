// import React from "react";
// import { View } from "react-native";
// import { storiesOf } from "@storybook/react-native";
// import CoinDetailTemplates from "../../components/templates/CoinDetailTemplates/CoinDetailTemplates";

// export default {
//   title: "Templates/CoinDetailTemplates",
//   component: CoinDetailTemplates,
// };

// const coinDetail = {
//   name: "Bitcoin",
//   symbol: "BTC",
//   market_data: {
//     current_price: {
//       usd: 40000,
//     },
//     price_change_24h: 1000,
//     total_volume: {
//       usd: 5000000,
//     },
//     total_supply: 10000000,
//     max_supply: 21000000,
//     last_updated: new Date(),
//   },
//   description: {
//     en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
// };

// const cryptoNews = [
//   {
//     title: "Bitcoin News 1",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     title: "Bitcoin News 2",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
// ];

// const buttons = [
//   { label: "24h", onPress: () => console.log("24h pressed"), selected: true },
//   { label: "7d", onPress: () => console.log("7d pressed") },
//   { label: "30d", onPress: () => console.log("30d pressed") },
//   { label: "1y", onPress: () => console.log("1y pressed") },
// ];

// storiesOf("Templates/CoinDetailTemplates", module)
//   .add("Loading", () => (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <CoinDetailTemplates />
//     </View>
//   ))
//   .add("Loaded", () => (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <CoinDetailTemplates
//         coinDetail={coinDetail}
//         cryptoNews={cryptoNews}
//         buttonGroupButtons={buttons}
//       />
//     </View>
//   ));
