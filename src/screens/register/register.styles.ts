import { StyleSheet } from "react-native";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.midnight,
  },
  form: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    margin: theme.spacing.giant,
  },
  textInput: {
    marginBottom: theme.spacing.lg,
    padding: theme.spacing.md,
    borderRadius: theme.spacing.xs,
    width: "80%",
    backgroundColor: theme.colors.white,
  },
  buttonStyle: {
    backgroundColor: theme.colors.peach,
    borderWidth: 2,
    borderColor: theme.colors.peach,
    marginVertical: theme.spacing.md,
    width: "80%",
  },
});
