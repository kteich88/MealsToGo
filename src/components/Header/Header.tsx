import { theme } from "infrastructure/theme/theme";
import { FontWeight } from "infrastructure/theme/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  list: {
    alignSelf: "center",
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.md,
    width: "90%",
    // Adjust max height of RN FlatList
    maxHeight: "28%",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing.md,
    backgroundColor: theme.colors.white,
    // Dropshadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: theme.radius.sm,
    // Dropshadow for Android
    elevation: 3,
  },
  text: {
    marginLeft: theme.spacing.sm,
    ...theme.fonts({ fontWeight: FontWeight.bold }).bodyText,
  },
  icon: {
    color: theme.colors.turquoise,
  },
  chevron: {
    color: theme.colors.tan,
    position: "absolute",
    right: theme.spacing.md,
  },
});
