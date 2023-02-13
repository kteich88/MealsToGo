import { theme } from "infrastructure/theme";
import { FontWeight } from "infrastructure/theme/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.turquoise,
    padding: theme.spacing.md,
    margin: theme.spacing.md,
    borderRadius: theme.radius.lg,
    flexDirection: "row",
    width: "50%",
  },
  text: {
    ...theme.fonts({ fontWeight: FontWeight.bold }).heading,
    textAlign: "center",
    paddingLeft: theme.spacing.md,
  },
  buttonContainer: {
    backgroundColor: theme.colors.midnight,
  },
  fullWidthButton: {
    backgroundColor: theme.colors.midnight,
    color: theme.colors.white,
    margin: theme.spacing.xs,
    borderRadius: 0,
    alignSelf: "center",
  },
});
