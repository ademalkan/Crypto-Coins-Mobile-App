import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10,
    // backgroundColor: "red",
  },
  options: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  }



})