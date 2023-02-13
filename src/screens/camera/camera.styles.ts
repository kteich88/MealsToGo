import { theme } from "infrastructure/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.turquoise,
    justifyContent: "center",
    alignItems: "center",
  },
  accessDenied: {
    color: theme.colors.errorRed,
    ...theme.fonts().heading,
    padding: theme.spacing.lg,
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
    backgroundColor: theme.colors.mintGreen,
    color: theme.colors.turquoise,
    margin: 0,
    marginHorizontal: 1,
    borderRadius: 0,
  },
  buttonContainer: {
    backgroundColor: theme.colors.mintGreen,
  },
  fullWidthButton: {
    backgroundColor: theme.colors.mintGreen,
    color: theme.colors.turquoise,
    margin: theme.spacing.xs,
    borderRadius: 0,
    alignSelf: "center",
  },
  cameraButtons: {
    backgroundColor: theme.colors.turquoise,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 1,
  },
});
