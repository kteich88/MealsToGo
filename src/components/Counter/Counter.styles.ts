import { theme } from "infrastructure/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  counter: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: theme.spacing.eight,
    color: theme.colors.brand.primary,
  },
});
