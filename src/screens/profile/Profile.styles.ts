import { theme } from "infrastructure/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.sm,
  },

  item: {
    padding: theme.spacing.md,
  },
  text: {
    ...theme.fonts().heading,
    marginTop: theme.spacing.md,
  },
  avatarContainer: {
    borderRadius: theme.radius.lg,
    alignItems: "center",
    justifyContent: "center",
  },
});
