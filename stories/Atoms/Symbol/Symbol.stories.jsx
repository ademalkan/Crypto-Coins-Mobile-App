import React from "react";
import { View } from "react-native";
import Symbol from "../../../components/atoms/Symbol/Symbol";

export default {
  title: "Atoms/Symbol",
  component: Symbol,
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

const symbol = "BTC";

export const Default = () => <Symbol symbol={symbol} />;
