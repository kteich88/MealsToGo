import { FontWeight } from "infrastructure/theme/constants";
import { theme } from "infrastructure/theme/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: theme.colors.midnight,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
  },
  buttonTextStyle: {
    ...theme.fonts({
      fontWeight: FontWeight.bold,
      color: theme.colors.lightGray,
    }).bodyText,
    alignSelf: "center",
  },
});

export default styles;
