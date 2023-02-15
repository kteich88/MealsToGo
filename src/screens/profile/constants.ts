import { theme } from "infrastructure/theme/theme";
import { ProfileList } from "./types";

export enum ProfileListItems {
  favorites = "Favorite Recipes",
  groceries = "Grocery List",
  meals = "Meal Plans",
}

export const PROFILE_LIST: ProfileList[] = [
  {
    title: ProfileListItems.favorites,
    icon: {
      type: "Entypo",
      name: "heart",
      color: theme.colors.peach,
      size: theme.size.sm,
    },
  },
  {
    title: ProfileListItems.groceries,
    icon: {
      type: "Octicons",
      name: "tasklist",
      color: theme.colors.limeGreen,
      size: theme.size.sm,
    },
  },
  {
    title: ProfileListItems.meals,
    icon: {
      type: "MaterialCommunityIcon",
      name: "calendar-edit",
      color: theme.colors.midnight,
      size: theme.size.sm,
    },
  },
];
