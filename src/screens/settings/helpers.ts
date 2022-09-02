import { theme } from "infrastructure/theme";
import { Settings } from "types/types";

export const SETTINGS: Settings[] = [
  {
    title: "Favorite Recipes",
    icon: {
      type: "Entypo",
      name: "heart",
      color: theme.colors.brand.primary,
      size: theme.spacing.twentyFive,
    },
  },
  {
    title: "Grocery List",
    icon: {
      type: "Octicons",
      name: "tasklist",
      color: theme.colors.brand.primary,
      size: theme.spacing.twentyFive,
    },
  },
  {
    title: "Meal Planning",
    icon: {
      type: "MaterialCommunityIcon",
      name: "calendar-edit",
      color: theme.colors.brand.primary,
      size: theme.spacing.twentyFive,
    },
  },
];
