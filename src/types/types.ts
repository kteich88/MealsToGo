import { IconProps } from "components/Icon/Icon";

export interface Settings {
  title: string;
  icon: IconProps;
}

export interface IngredientDocumentDataType {
  amount: number;
  location: string | undefined;
  name: string;
}
