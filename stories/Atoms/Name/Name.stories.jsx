import React from "react";
import { View } from "react-native";
import Name from "../../../components/atoms/Name/Name";

export default {
  title: "Atoms/Name",
  component: Name,
  args: {
    name: "Name Example",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Default = ({ ...args }) => <Name {...args} />;
