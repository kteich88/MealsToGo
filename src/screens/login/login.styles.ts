import { StyleSheet } from "react-native";
import { FontWeight } from "theme/constants";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-start",
    // alignItems: "center",
    backgroundColor: theme.colors.midnight,
  },
  form: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  animation: {
    marginVertical: theme.spacing.lg,
    width: 300,
    height: 300,
  },
  title: {
    ...theme.fonts({ fontWeight: FontWeight.bold }).heading,
    marginVertical: theme.spacing.lg,
  },
  textInput: {
    borderBottomWidth: 2,
    borderColor: theme.colors.midGray,
    marginBottom: theme.spacing.lg,
    padding: theme.spacing.md,
    width: "80%",
    backgroundColor: theme.colors.white,
  },
  loginButtonStyle: {
    backgroundColor: theme.colors.mintGreen,
    borderWidth: 2,
    borderColor: theme.colors.mintGreen,
    marginVertical: theme.spacing.md,
    width: "80%",
  },
  signUpButtonStyle: {
    width: "80%",
  },
  buttonTextStyle: {
    color: theme.colors.mintGreen,
  },
});
