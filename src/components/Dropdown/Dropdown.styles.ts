import { theme } from "infrastructure/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    height: "10%",
    width: "100%",
    paddingRight: theme.spacing.thirty,
    zIndex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.70)",
  },
  text: {
    paddingHorizontal: theme.spacing.sixteen,
  },
  chevron: {
    color: theme.colors.text.primary,
  },
  dropdownSelections: {
    position: "absolute",
    top: 59,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    paddingRight: 111,
  },
  selection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    color: theme.colors.brand.primary,
    padding: theme.spacing.sixteen,
  },
});
