import React from "react";
import { View } from "react-native";
import SubTitle from "../../../components/atoms/SubTitle/SubTitle";

export default {
  title: "Atoms/SubTitle",
  component: SubTitle,
};

export const Default = () => (
  <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
    <SubTitle text="Subtitle Text" />
  </View>
);
