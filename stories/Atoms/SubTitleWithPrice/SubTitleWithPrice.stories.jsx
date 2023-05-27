import React from "react";
import { View } from "react-native";
import SubTitleWithPrice from "../../../components/atoms/SubTitleWithPrice/SubTitleWithPrice";

export default {
  title: "Atoms/SubTitleWithPrice",
  component: SubTitleWithPrice,
};

const subtitle = "Subtitle Text";
const price = 99.99;

export const Default = () => (
  <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
    <SubTitleWithPrice text={subtitle} price={price} />
  </View>
);
