import { theme } from "infrastructure/theme/theme";
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
  icon: {
    padding: theme.spacing.md,
  },
});
