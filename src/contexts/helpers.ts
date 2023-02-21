import { DocumentData } from "firebase/firestore";
import { Ingredient, IngredientList } from "screens/ingredients/types";

/**
 * Helper function that transforms Ingredient DocumentData received from
 * Firebase / Firestore and converts it to IngredientList object.
 * @param data DocumentData Object from Firebase
 * @param id Unique Id set in Firebase for each new item
 * @returns Ingredient Object
 */
export const transformIngredientsDocumentData = (
  data: DocumentData,
  id: string,
): IngredientList => {
  console.log(data);
  return {
    id: { data },
  };
  console.log(id);
  console.log(data);
};

/**
 * Helper function that sorts Ingredients based on their location.
 * Every ingredient will have a location attribute.
 * This sorted list is used to render the Ingredients on the Ingredient Screen.
 * @param data Ingredient Object returned from initial Firebase GET request
 * @returns IngredientList
 */
export const sortIngredients = (data: Ingredient[]): IngredientList => {
  let pantryItems: Ingredient[] = [];
  let freezerItems: Ingredient[] = [];
  let refrigeratorItems: Ingredient[] = [];

  data.forEach((item) => {
    if (item.location === "pantry") {
      pantryItems.push(item);
    }
    if (item.location === "freezer") {
      freezerItems.push(item);
    }
    if (item.location === "refrigerator") {
      refrigeratorItems.push(item);
    }
  });

  return {
    pantry: pantryItems,
    freezer: freezerItems,
    refrigerator: refrigeratorItems,
  };
};
