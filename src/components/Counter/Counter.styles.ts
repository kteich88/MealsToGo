import { theme } from "infrastructure/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginTop: theme.spacing.thirty,
    marginHorizontal: theme.spacing.sixteen,
    color: theme.colors.brand.primary,
  },
  text: {
    marginTop: theme.spacing.thirty,
    fontSize: theme.spacing.thirtyTwo,
  },
});
