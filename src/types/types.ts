import { IconProps } from "components/Icon/Icon";
import { DocumentData } from "firebase/firestore";

export interface DataType {
  title: string;
  icon: IconProps;
}
export interface IngredientsList {
  pantry: DocumentData[];
  freezer: DocumentData[];
  refrigerator: DocumentData[];
}
