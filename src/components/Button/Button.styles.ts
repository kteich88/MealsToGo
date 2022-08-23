import { theme } from "infrastructure/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.brand.primary,
    padding: theme.spacing.twenty,
    margin: theme.spacing.sixteen,
    borderRadius: 30,
    flexDirection: "row",
    width: "50%",
  },
  text: {
    fontFamily: theme.fonts.heading,
    fontSize: theme.spacing.twelve,
    lineHeight: theme.spacing.sixteen,
    fontWeight: "bold",
    letterSpacing: 0.25,
    textAlign: "center",
    color: theme.colors.text.inverse,
    paddingLeft: theme.spacing.twelve,
  },
});
