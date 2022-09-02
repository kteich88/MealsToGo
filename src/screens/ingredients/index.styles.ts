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
  backgroundImage: {
    flex: 1,
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.35)",
  },
  error: {
    color: theme.colors.text.error,
    marginBottom: theme.spacing.sixteen,
  },
  icon: {
    backgroundColor: theme.colors.brand.secondary,
    width: theme.spacing.oneTwentyEight,
    height: theme.spacing.oneTwentyEight,
    borderRadius: theme.spacing.oneTwentyEight / 2,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: theme.spacing.sixtyFour,
    marginBottom: theme.spacing.thirtyTwo,
  },
  textInput: {
    margin: theme.spacing.thirtyTwo,
    paddingHorizontal: theme.spacing.eight,
    paddingVertical: theme.spacing.sixteen,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    color: theme.colors.brand.primary,
  },
  counter: {
    width: theme.spacing.twoHundred,
    height: theme.spacing.twoHundred,
  },
});
