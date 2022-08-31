import { DocumentData } from "firebase/firestore";
import { IngredientLists } from "types/types";

export const filterIngredients = (data: DocumentData[]): IngredientLists[] => {
  let pantryItems: DocumentData[] = [];
  let freezerItems: DocumentData[] = [];
  let refrigeratorItems: DocumentData[] = [];

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

  return [
    {
      pantry: pantryItems,
      freezer: freezerItems,
      refrigerator: refrigeratorItems,
    },
  ];
};
