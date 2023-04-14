import { StyleSheet } from "react-native";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  icon: {
    width: theme.size.md,
    height: theme.size.md,
  },
  iconActive: { color: theme.colors.turquoise },
  iconInactive: { color: theme.colors.midnight },
});
