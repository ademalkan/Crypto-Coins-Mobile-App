import React from "react";
import { View } from "react-native";
import Loader from "../../components/atoms/Loader/Loader";

const LoaderMeta = {
  title: "Loader",
  component: Loader,
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default LoaderMeta;

export const Default = {};
