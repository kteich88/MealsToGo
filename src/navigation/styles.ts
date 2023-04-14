import { StyleSheet } from "react-native";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  icon: {
    width: theme.size.sm,
    height: theme.size.sm,
  },
  iconActive: { tintColor: theme.colors.turquoise },
  iconInactive: { tintColor: theme.colors.midnight },
  text: {
    ...theme.fonts().caption,
  },
  active: { color: theme.colors.turquoise },
  inactive: { color: theme.colors.midnight },
});
