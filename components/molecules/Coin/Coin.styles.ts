import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    marginBottom: 10
  },
  image: {
    marginRight: 10,
  },
  options: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    width: 205,
    marginTop: 10,
  }



})