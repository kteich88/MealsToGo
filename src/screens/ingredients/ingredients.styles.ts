import { theme } from "infrastructure/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.sixteen,
  },
  pantry: {
    flexDirection: "column",
    alignSelf: "center",
    padding: theme.spacing.sixteen,
  },
  fridge: {
    flexDirection: "column",
    alignSelf: "center",
    padding: theme.spacing.sixteen,
  },
  freezer: {
    flexDirection: "column",
    alignSelf: "center",
    padding: theme.spacing.sixteen,
  },
});
