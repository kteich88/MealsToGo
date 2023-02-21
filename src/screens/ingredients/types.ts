/**
 * Type for ingredients after they have been created in Firebase
 */
export interface Ingredient {
  amount: number;
  userId: string | null;
  unit: string;
}

// export interface IngredientList {
//   locations: {
//     pantry: Ingredient[];
//     freezer: Ingredient[];
//     refrigerator: Ingredient[];
//   };
// }

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
