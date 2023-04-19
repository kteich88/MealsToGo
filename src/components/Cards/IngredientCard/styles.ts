import { StyleSheet } from "react-native";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  card: {
    padding: theme.spacing.sm,
    height: theme.size.giant,
    width: theme.size.giant,
    borderRadius: theme.spacing.md,
    marginHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.lightGray,
    borderWidth: theme.radius.xs,
    borderColor: theme.colors.midMediumGray,
  },
  cardTitle: {
    alignSelf: "center",
    ...theme.fonts().subheading,
  },
  addIngredientIcon: {
    alignSelf: "center",
    paddingVertical: theme.spacing.sm,
    color: theme.colors.peach,
  },
  bottomIcons: {
    flexDirection: "row",
    alignSelf: "center",
  },
  editIngredientIcon: {
    textAlign: "center",
    marginHorizontal: theme.spacing.md,
    color: theme.colors.midnight,
  },
  removeIngredientIcon: {
    textAlign: "center",
    marginHorizontal: theme.spacing.md,
    color: theme.colors.peach,
  },
});
