import { IconProps } from "components/Icon/Icon";
import { DocumentData } from "firebase/firestore";

export interface DataType {
  title: string;
  icon: IconProps;
}
export interface IngredientLists {
  pantry: DocumentData[];
  freezer: DocumentData[];
  refrigerator: DocumentData[];
}

export interface IngredientListData extends DocumentData {
  amount: number;
  authorID: string;
  id: string;
  docId: string;
  location: string;
  name: string;
}
