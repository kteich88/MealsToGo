import { IconProps } from "components/Icon/Icon";
import { DocumentData } from "firebase/firestore";

export interface Settings {
  title: string;
  icon: IconProps;
}
export interface IngredientsList {
  pantry: DocumentData[];
  freezer: DocumentData[];
  refrigerator: DocumentData[];
}

export interface IngredientDocumentDataType {
  amount: number;
  icon: IconProps | undefined;
  location: string;
  name: string;
}
