import { theme } from "infrastructure/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: "center",
    padding: theme.spacing.md,
    margin: theme.spacing.xl,
  },
  avatar: {
    backgroundColor: theme.colors.turquoise,
    width: theme.size.lg,
    height: theme.size.lg,
    borderRadius: theme.spacing.lg / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
