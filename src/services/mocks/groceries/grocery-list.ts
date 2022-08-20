import uuid from "react-native-uuid";
import { colors } from "../../../infrastructure/theme";
import { GroceryListItem } from "../../../utils/types/grocery.types";

const id = uuid.v4().toString();

export const defaultGroceries: GroceryListItem[] = [
  {
    id,
    title: "Apple",
    description: "An apple a day...",
    icon: {
      icon: "apple-alt",
      color: `${colors.ui.error}`,
    },
  },
];
