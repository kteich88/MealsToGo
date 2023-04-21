import { IngredientLocation } from "screens/ingredients/constants";

export const ingredientLocationSelectOptions = [
  IngredientLocation.Refrigerator,
  IngredientLocation.Pantry,
  IngredientLocation.Freezer,
];

export enum DropdownLabel {
  ingredientLocation = "Select Ingredient Location",
}
