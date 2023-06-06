import {
  CollectionReference,
  DocumentData,
  collection,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { FirebaseIngredient, Ingredient } from "hooks/ingredients/types";
import { IngredientLocation } from "screens/ingredients/constants";
import {
  collectionRef,
  freezerCollectionRef,
  pantryCollectionRef,
  refrigeratorCollectionRef,
} from "./constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from "services/firebase/firebase.db";

/**
 * Transforms Firebase DocumentData to Ingredient type to be used in the app
 * @param ingredients DocumentData[] from Firebase
 * @returns Ingredient[]
 */
export const transformIngredients = (
  ingredients: DocumentData[],
): Ingredient[] => {
  const transformedIngredients: Ingredient[] = ingredients.map((ingredient) => {
    return {
      id: ingredient.id,
      name: ingredient.name,
      amount: ingredient.amount,
      units: ingredient.units,
      location: ingredient.location,
    };
  });
  return transformedIngredients;
};

/**
 * Fetches Ingredients from Firebase and sets them in AsyncStorage
 * @param collectionRef
 * @returns Ingredient[]
 */
export const fetchIngredients = async (location: string) => {
  const documentData: DocumentData[] = [];
  const snapshot = await getDocs(collection(db, location));
  snapshot.forEach((doc) => {
    documentData.push(doc.data());
  });
  return transformIngredients(documentData);
};
