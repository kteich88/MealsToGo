import { StatusBar, StyleSheet } from "react-native";
import { theme } from "./theme";

export const globalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  bottomButtons: {
    position: "absolute",
    bottom: theme.spacing.md,
    marginHorizontal: theme.spacing.md,
  },
  loading: {
    height: theme.size.giant,
    width: theme.size.giant,
  },
  inProgress: {
    alignSelf: "center",
    marginTop: 250,
    height: 250,
    width: 250,
  },
});
