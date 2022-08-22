import { spacing } from "infrastructure/theme";
import { theme } from "infrastructure/theme/helpers";
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
    fontSize: spacing.twelve,
    lineHeight: spacing.sixteen,
    fontWeight: "bold",
    letterSpacing: 0.25,
    textAlign: "center",
    color: theme.colors.text.inverse,
    paddingLeft: spacing.twelve,
  },
});
