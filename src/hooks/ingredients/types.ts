import { FieldValue } from "firebase/firestore";
import { IngredientLocation } from "screens/ingredients/constants";

export type FirebaseIngredientType = { [x: string]: any };

export interface FirebaseIngredient {
  id: string;
  name: string;
  amount: string;
  units: string;
  createdAt: FieldValue;
  createdBy?: string;
}

export interface Ingredient {
  id: string;
  name: string;
  amount: string;
  units: string;
  location: IngredientLocation;
}
