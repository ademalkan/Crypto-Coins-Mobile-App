import React from "react";
import { View } from "react-native";
import Title from "../../../components/atoms/Title/Title";

export default {
  title: "Atoms/Title",
  component: Title,
  decorators: [
    (Story) => (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export const Default = () => <Title text="Example Title" />;
