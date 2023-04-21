import { StyleSheet } from "react-native";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  modalContainer: {
    flex: 1,
  },
  titles: {
    alignSelf: "center",
    ...theme.fonts().heading,
    padding: theme.spacing.md,
  },
  refrigerator: {
    height: "35%",
  },
  pantry: {
    height: "35%",
  },
  freezer: {
    height: "35%",
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
