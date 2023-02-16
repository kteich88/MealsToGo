import { theme } from "infrastructure/theme/theme";
import { FontWeight } from "infrastructure/theme/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    // Dropshadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: theme.radius.sm,
    // Dropshadow for Android
    elevation: 3,
  },
  text: {
    marginLeft: theme.spacing.md,
    ...theme.fonts({ fontWeight: FontWeight.bold }).bodyText,
  },
  chevron: {
    color: theme.colors.tan,
    position: "absolute",
    right: theme.spacing.md,
  },
});
