import { theme } from "infrastructure/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
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
});
