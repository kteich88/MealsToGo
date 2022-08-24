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
    width: theme.spacing.oneTwentyEight,
    height: theme.spacing.oneTwentyEight,
    borderRadius: theme.spacing.oneTwentyEight / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    // flex: 1,
  },
});
