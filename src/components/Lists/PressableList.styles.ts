import { StyleSheet } from "react-native";
import { FontWeight } from "theme/constants";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  list: {
    alignSelf: "center",
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.md,
    width: "90%",
    // Adjust max height of RN FlatList
    maxHeight: "28%",
  },
  icon: {
    padding: theme.spacing.md,
  },
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
