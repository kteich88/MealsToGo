import { theme } from "infrastructure/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginTop: theme.spacing.xl,
    marginHorizontal: theme.spacing.md,
    color: theme.colors.turquoise,
  },
  text: {
    marginTop: theme.spacing.xl,
    fontSize: theme.spacing.xl,
  },
});
