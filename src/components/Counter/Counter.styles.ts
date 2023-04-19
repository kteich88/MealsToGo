import { theme } from "theme/theme";
import { StyleSheet } from "react-native";
import { FontSize } from "theme/constants";

export const styles = StyleSheet.create({
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: theme.spacing.sm,
  },
  icon: {
    marginHorizontal: theme.spacing.sm,
    color: theme.colors.limeGreen,
  },
  text: {
    ...theme.fonts().counter,
  },
});
