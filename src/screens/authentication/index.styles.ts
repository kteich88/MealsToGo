import { StyleSheet } from "react-native";
import { theme } from "infrastructure/theme/theme";

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
    padding: theme.spacing.sm,
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.60)",
    marginTop: theme.spacing.sm,
    padding: theme.spacing.md,
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
    ...theme.fonts().bodyText,
  },
  loginButton: {
    backgroundColor: theme.colors.mintGreen,
    color: theme.colors.turquoise,
    width: "80%",
  },
  error: {
    color: theme.colors.errorRed,
    marginBottom: theme.spacing.md,
  },
});
