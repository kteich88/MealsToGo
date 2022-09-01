import { theme } from "infrastructure/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  settings: {
    margin: theme.spacing.thirtyTwo,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: theme.spacing.sixteen,
    fontFamily: theme.fonts.heading,
    marginLeft: theme.spacing.twenty,
  },
  list: {
    flexDirection: "column",
    alignContent: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.colors.bg.primary,
    padding: theme.spacing.sixteen,
  },
});
