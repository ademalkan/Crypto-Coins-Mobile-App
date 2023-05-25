import React from "react";
import { View } from "react-native";
import Button from "../../components/atoms/Button/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Button",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Default = ({ ...args }) => <Button {...args} />;

export const FavoriteAddExample = ({ ...args }) => <Button {...args} />;
FavoriteAddExample.args = {
  text: "Favorite Add",
};
