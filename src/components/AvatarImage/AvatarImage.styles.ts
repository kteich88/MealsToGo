import { theme } from "infrastructure/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: "center",
    padding: theme.spacing.sixteen,
    margin: theme.spacing.thirtyTwo,
  },
  avatar: {
    backgroundColor: theme.colors.brand.secondary,
    width: theme.spacing.twoHundred,
    height: theme.spacing.twoHundred,
    borderRadius: theme.spacing.twoHundred / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
