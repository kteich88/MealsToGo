import {
  CollectionReference,
  DocumentData,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { FirebaseIngredient, Ingredient } from "hooks/ingredients/types";
import { IngredientLocation } from "screens/ingredients/constants";
import {
  freezerCollectionRef,
  pantryCollectionRef,
  refrigeratorCollectionRef,
} from "./constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const transformIngredients = (ingredients: DocumentData[]) => {
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

export const getAndSetIngredients = async (
  collectionRef: CollectionReference<DocumentData>,
  ingredientLocation: IngredientLocation,
): Promise<Ingredient[] | undefined> => {
  onSnapshot(collectionRef, async (snapshot) => {
    const documentData = snapshot.docs.map((doc) => {
      return doc.data();
    });
    const transformedIngredients = transformIngredients(documentData);
    await AsyncStorage.setItem(
      `@${ingredientLocation}`,
      JSON.stringify(transformedIngredients),
    );
  });
  const ingredients = await AsyncStorage.getItem(`@${ingredientLocation}`);
  if (ingredients) {
    return JSON.parse(ingredients);
  }
};

export const addDataToFirebase = async (
  location: IngredientLocation,
  data: FirebaseIngredient,
) => {
  console.log("WHAT IS THE LOCATION", location);

  switch (location) {
    case IngredientLocation.Refrigerator:
      await addDoc(refrigeratorCollectionRef, data);
    case IngredientLocation.Pantry:
      await addDoc(pantryCollectionRef, data);
    case IngredientLocation.Freezer:
      console.log("I AM HERE");
      await addDoc(freezerCollectionRef, data);
  }
};
