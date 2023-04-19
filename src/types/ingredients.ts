export interface Ingredient {
  name: string;
  amount: string;
  units: string;
  location: string;
}

export interface FirebaseIngredient {
  id: string;
  name: string;
  amount: number;
  units: string;
  createdBy: string | null;
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
