import { theme } from "infrastructure/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.sixteen,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    flexDirection: "column",
  },
  searchBar: {
    marginVertical: theme.spacing.twenty,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.bg.search,
    width: "100%",
  },
  textInput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: theme.spacing.zero,
    backgroundColor: theme.colors.bg.search,
    borderRadius: theme.spacing.twenty,
  },
  icon: {
    color: theme.colors.text.secondary,
    padding: theme.spacing.twelve,
  },
  search: {
    backgroundColor: theme.colors.brand.primary,
    height: "100%",
    width: "100%",
  },
});
