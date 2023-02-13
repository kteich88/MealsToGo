import { theme } from "infrastructure/theme";
import { Settings } from "types/types";

export const SETTINGS: Settings[] = [
  {
    title: "Favorite Recipes",
    icon: {
      type: "Entypo",
      name: "heart",
      color: theme.colors.turquoise,
      size: theme.spacing.lg,
    },
  },
  {
    title: "Grocery List",
    icon: {
      type: "Octicons",
      name: "tasklist",
      color: theme.colors.turquoise,
      size: theme.spacing.lg,
    },
  },
  {
    title: "Meal Planning",
    icon: {
      type: "MaterialCommunityIcon",
      name: "calendar-edit",
      color: theme.colors.turquoise,
      size: theme.spacing.lg,
    },
  },
];
