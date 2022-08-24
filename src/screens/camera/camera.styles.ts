import { theme } from "infrastructure/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.text.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  accessDenied: {
    color: theme.colors.text.inverse,
    fontFamily: theme.fonts.heading,
    fontSize: theme.spacing.twentyFive,
    lineHeight: theme.spacing.sixteen,
    padding: theme.spacing.twentyFive,
  },
  camera: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: theme.colors.brand.muted,
    color: theme.colors.brand.primary,
    margin: 0,
    marginHorizontal: 1,
    borderRadius: 0,
  },
  buttonContainer: {
    backgroundColor: theme.colors.brand.muted,
  },
  fullWidthButton: {
    backgroundColor: theme.colors.brand.muted,
    color: theme.colors.brand.primary,
    margin: theme.spacing.zero,
    borderRadius: 0,
    alignSelf: "center",
  },
  cameraButtons: {
    backgroundColor: theme.colors.brand.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 1,
  },
});
