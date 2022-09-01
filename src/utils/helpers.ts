import { DocumentData } from "firebase/firestore";
import { IngredientsList } from "types/types";

export const getEnvironmentVariable = (KEY: string): string => {
  if (!KEY) {
    console.error(`Missing ${KEY} from environment.`);
    return "";
  }

  return KEY;
};
