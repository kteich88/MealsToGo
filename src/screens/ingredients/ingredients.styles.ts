import { theme } from "infrastructure/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.sixteen,
  },
  title: {
    textAlign: "center",
    padding: theme.spacing.sixteen,
    width: "100%",
    backgroundColor: theme.colors.brand.secondary,
  },
});
