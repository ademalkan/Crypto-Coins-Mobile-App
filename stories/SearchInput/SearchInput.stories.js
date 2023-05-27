import React from "react";
import { View } from "react-native";
import SearchInput from "../../components/molecules/SearchInput/SearchInput";

export default {
  title: "SearchInput",
  component: SearchInput,
  args: {
    text: "SearchInput",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Default = ({ ...args }) => <SearchInput {...args} />;
