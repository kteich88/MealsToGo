import { theme } from "infrastructure/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
  },
  title: {
    textAlign: "center",
    padding: theme.spacing.md,
    width: "100%",
    backgroundColor: theme.colors.mintGreen,
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
    color: theme.colors.errorRed,
    marginBottom: theme.spacing.md,
  },
  textInput: {
    flexDirection: "row",
    marginVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.sm,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: theme.colors.turquoise,
    borderColor: theme.colors.turquoise,
  },
  counter: {
    width: theme.spacing.xl,
    height: theme.spacing.xl,
  },
  selector: {
    marginTop: theme.spacing.xl,
    color: theme.colors.midGray,
  },
  buttonContainer: {
    width: "100%",
  },

  button: {
    backgroundColor: theme.colors.midnight,
    padding: theme.spacing.lg,
  },
  buttonText: {
    color: theme.colors.turquoise,
  },
});
