import { theme } from "infrastructure/theme";
import { DataType } from "types/types";

export const SETTINGS: DataType[] = [
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
