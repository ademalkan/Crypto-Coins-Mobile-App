import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  searchInput: {
    width: Dimensions.get("screen").width - 10,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 10,
  },
})
