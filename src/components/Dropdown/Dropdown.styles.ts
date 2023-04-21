import { StyleSheet } from "react-native";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginBottom: theme.spacing.lg,
  },
  dropdown: {
    height: theme.size.md,
    backgroundColor: theme.colors.white,
    marginTop: theme.size.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdownText: {
    ...theme.fonts({ color: theme.colors.midMediumGray }).caption,
    padding: theme.spacing.md,
    alignSelf: "center",
  },
  icon: {
    paddingHorizontal: theme.spacing.md,
    color: theme.colors.midMediumGray,
  },
  dropdownList: {
    height: theme.size.md,
    backgroundColor: theme.colors.white,
    borderBottomWidth: 0.5,
    borderColor: theme.colors.lightGray,
  },
});
