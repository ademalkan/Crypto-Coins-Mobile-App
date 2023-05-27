import React from "react";
import { View } from "react-native";
import ImageAtom from "../../../components/atoms/ImageAtom/ImageAtom";

export default {
  title: "ImageAtom",
  component: ImageAtom,
};

export const Default = () => (
  <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
    <ImageAtom height={600} />
  </View>
);

export const SetImage = () => (
  <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
    <ImageAtom
      height={600}
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
    />
  </View>
);
