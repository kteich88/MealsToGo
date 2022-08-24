import { theme } from "infrastructure/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.eight,
  },
  item: {
    padding: theme.spacing.sixteen,
  },
  text: {
    fontSize: theme.fontSizes.button,
    fontFamily: theme.fonts.heading,
    marginTop: theme.spacing.sixteen,
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
