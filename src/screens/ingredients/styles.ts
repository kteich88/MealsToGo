import { StyleSheet } from "react-native";
import { FontWeight } from "theme/constants";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titles: {
    alignSelf: "center",
    ...theme.fonts().heading,
    padding: theme.spacing.md,
  },
  refrigerator: {
    height: "35%",
    backgroundColor: theme.colors.skyBlue,
  },
  pantry: {
    height: "35%",
    backgroundColor: theme.colors.cream,
  },
  freezer: {
    height: "35%",
    backgroundColor: theme.colors.turquoise,
  },
  form: {
    marginTop: 300,
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
