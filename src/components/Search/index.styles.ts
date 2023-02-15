import { theme } from "infrastructure/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.md,
  },
  searchbar: {
    color: theme.colors.turquoise,
  },
  bottomButtons: {
    position: "absolute",
    bottom: -5,
    left: 16,
    right: 16,
  },
  // container: {
  //   marginTop: theme.spacing.sixteen,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   alignContent: "center",
  //   alignSelf: "center",
  //   flexDirection: "column",
  // },
  // searchBar: {
  //   marginVertical: theme.spacing.twenty,
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: theme.colors.bg.search,
  //   width: "100%",
  // },
  // textInput: {
  //   flex: 1,
  //   paddingTop: 10,
  //   paddingRight: 10,
  //   paddingBottom: 10,
  //   paddingLeft: theme.spacing.zero,
  //   backgroundColor: theme.colors.bg.search,
  //   borderRadius: theme.spacing.twenty,
  // },
  // icon: {
  //   color: theme.colors.text.secondary,
  //   padding: theme.spacing.twelve,
  // },
  resultsContainer: {
    // paddingLeft: theme.spacing.twenty,
  },
  list: {
    // backgroundColor: theme.colors.brand.primary,
    // padding: theme.spacing.twenty,
    height: "100%",
    width: "100%",
  },
  result: {
    // padding: theme.spacing.sixteen,
  },
});
