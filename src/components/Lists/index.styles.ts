import { theme } from "infrastructure/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  settings: {
    margin: theme.spacing.xl,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    ...theme.fonts().heading,
  },
  list: {
    flexDirection: "column",
    alignContent: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.colors.turquoise,
    padding: theme.spacing.md,
  },
});
