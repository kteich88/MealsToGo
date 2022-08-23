import { StatusBar, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
