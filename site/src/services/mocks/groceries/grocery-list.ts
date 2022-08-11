import uuid from "react-native-uuid";
import { colors } from "../../../infrastructure/theme";
import { GroceryList } from "../../../utils/types/groceries.types";

const id = uuid.v4().toString();

export const defaultGroceries: GroceryList[] = [
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
