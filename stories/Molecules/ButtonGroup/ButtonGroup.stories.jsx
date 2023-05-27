import React from "react";
import { View } from "react-native";
import ButtonGroup from "../../../components/molecules/ButtonGroup/ButtonGroup";

export default {
  title: "Molecules/ButtonGroup",
  component: ButtonGroup,
};

const buttons = [
  { label: "Button 1", onPress: () => console.log("Button 1 pressed") },
  {
    label: "Button 2",
    onPress: () => console.log("Button 2 pressed"),
    selected: true,
  },
  { label: "Button 3", onPress: () => console.log("Button 3 pressed") },
];

export const Default = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <ButtonGroup buttons={buttons} />
  </View>
);

export const CustomStyle = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f0f0",
    }}
  >
    <ButtonGroup buttons={buttons} />
  </View>
);

export const DisabledButton = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <ButtonGroup
      buttons={[
        {
          label: "Button 1",
          onPress: () => console.log("Button 1 pressed"),
          selected: true,
        },
        {
          label: "Button 2",
          onPress: () => console.log("Button 2 pressed"),
          disabled: true,
        },
        { label: "Button 3", onPress: () => console.log("Button 3 pressed") },
      ]}
    />
  </View>
);
