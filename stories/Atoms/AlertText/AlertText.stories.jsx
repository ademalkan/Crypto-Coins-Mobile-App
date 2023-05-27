import React from "react";
import { View } from "react-native";
import AlertText from "../../../components/atoms/AlertText/AlertText";

export default {
  title: "Atoms/AlertText",
  component: AlertText,
  args: {
    text: "Default Alert Text",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Default = ({ ...args }) => <AlertText {...args} />;

export const NoHaveData = ({ ...args }) => <AlertText {...args} />;
NoHaveData.args = {
  text: "You have not find any coins yet",
};
