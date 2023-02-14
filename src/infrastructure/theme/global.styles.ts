import { StatusBar, StyleSheet } from "react-native";
import { theme } from ".";

export const globalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
