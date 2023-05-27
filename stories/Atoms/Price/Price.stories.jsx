import React from "react";
import { View } from "react-native";
import Price from "../../../components/atoms/Price/Price";

export default {
  title: "Price",
  component: Price,
  args: {
    price: 10.99,
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Default = ({ ...args }) => <Price {...args} />;
