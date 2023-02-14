import { theme } from "infrastructure/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: "center",
    padding: theme.spacing.xl,
    margin: theme.spacing.lg,
  },
  avatar: {
    width: theme.size.giant,
    height: theme.size.giant,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: theme.colors.midMediumGray,
    borderRadius: theme.radius.giant,
    backgroundColor: theme.colors.turquoise,
  },
});
