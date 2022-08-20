import { GroceryListItem } from "./grocery.types";

interface RecipeInstructionsList {
  instruction: string;
  image?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description?: string;
  ingredients: GroceryListItem[];
  instructions: RecipeInstructionsList[];
  image: string;
}
