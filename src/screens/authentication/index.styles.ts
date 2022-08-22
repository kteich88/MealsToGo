import { spacing } from "infrastructure/theme";
import { theme } from "infrastructure/theme/helpers";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.35)",
  },
  animationWrapper: {
    width: "100%",
    height: "40%",
    position: "absolute",
    top: "10%",
    padding: spacing.eight,
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    marginTop: theme.spacing.eight,
    padding: theme.spacing.sixteen,
    justifyContent: "center",
    alignItems: "center",
    top: "40%",
    width: "65%",
  },
  buttonContainer: {
    padding: spacing.eight,
    marginTop: spacing.eight,
  },
  title: {
    fontSize: spacing.thirty,
    fontFamily: theme.fonts.body,
  },
});
