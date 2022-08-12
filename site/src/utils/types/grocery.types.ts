import { StyleProp, ViewStyle } from "react-native";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

export interface Icon {
  icon: IconSource;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export interface GroceryListItem {
  id: string;
  title: string;
  description?: string;
  icon: Icon;
}

export interface GroceryResults {
  results: GroceryListItem[];
}
