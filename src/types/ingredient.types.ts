/**
 * Type for ingredients after they have been created in Firebase
 */
export interface Ingredient {
  id: string;
  amount: number;
  authorId: string | null;
  location: string;
  name: string;
}

export interface IngredientList {
  pantry: Ingredient[];
  freezer: Ingredient[];
  refrigerator: Ingredient[];
}

export const defaultSortedIngredientList: IngredientList = {
  pantry: [],
  freezer: [],
  refrigerator: [],
};
