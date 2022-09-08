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
  textInput: {
    flexDirection: "row",
    marginVertical: theme.spacing.sixteen,
    paddingHorizontal: theme.spacing.eight,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: theme.colors.brand.primary,
    borderColor: theme.colors.brand.primary,
  },
  counter: {
    width: theme.spacing.twoHundred,
    height: theme.spacing.twoHundred,
  },
  selector: {
    marginTop: theme.spacing.twoHundred,
    color: theme.colors.bg.search,
  },
  buttonContainer: {
    width: "100%",
  },

  button: {
    backgroundColor: theme.colors.brand.muted,
    padding: theme.spacing.twentyFive,
  },
  buttonText: {
    color: theme.colors.brand.primary,
  },
});
