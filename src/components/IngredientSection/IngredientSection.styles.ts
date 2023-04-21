import { StyleSheet } from "react-native";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  section: {
    height: "35%",
  },
  titles: {
    alignSelf: "center",
    ...theme.fonts().heading,
    padding: theme.spacing.md,
  },
});
