import { StyleSheet } from "react-native";
import { theme } from "infrastructure/theme";

export const styles = StyleSheet.create({
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
  animationWrapper: {
    width: "100%",
    height: "40%",
    position: "absolute",
    top: "10%",
    padding: theme.spacing.eight,
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.60)",
    marginTop: theme.spacing.eight,
    padding: theme.spacing.sixteen,
    justifyContent: "center",
    alignItems: "center",
    top: "35%",
    width: "65%",
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "grey",
    marginBottom: 20,
    width: "80%",
  },
  title: {
    fontSize: theme.spacing.thirty,
    fontFamily: theme.fonts.body,
  },
  loginButton: {
    backgroundColor: theme.colors.brand.muted,
    color: theme.colors.brand.primary,
    width: "80%",
  },
  error: {
    color: theme.colors.text.error,
    marginBottom: theme.spacing.sixteen,
  },
});
