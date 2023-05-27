import React from "react";
import { View } from "react-native";
import RangeButton from "../../../components/atoms/RangeButton/RangeButton";

export default {
  title: "RangeButton",
  component: RangeButton,
};

export const Default = () => (
  <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
    <RangeButton label="Button" onPress={() => {}} />
  </View>
);

export const Selected = () => (
  <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
    <RangeButton label="Button" onPress={() => {}} selected />
  </View>
);
