import { theme } from "infrastructure/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    margin: theme.spacing.sixteen,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    width: "90%",
  },
  textInput: {
    marginHorizontal: theme.spacing.eight,
    marginBottom: theme.spacing.twenty,
    borderBottomWidth: 1,
    borderColor: "grey",
    width: "80%",
    lineHeight: theme.spacing.twenty,
  },

  icon: {
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.twenty,
  },
});
