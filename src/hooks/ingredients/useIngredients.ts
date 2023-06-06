import firebase from "firebase/compat";
import {
  FieldValue,
  addDoc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import useAuthentication from "hooks/authentication/useAuthentication";
import { useCallback, useEffect, useState } from "react";
import { FirebaseIngredient, Ingredient } from "hooks/ingredients/types";
import { fetchIngredients, transformIngredients } from "./helpers";
import { collectionRef, refrigeratorCollectionRef } from "./constants";
import { IngredientLocation } from "screens/ingredients/constants";

const useIngredients = () => {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string>("0");
  const [units, setUnits] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [refrigeratorIngredients, setRefrigeratorIngredients] =
    useState<Ingredient[]>();
  const [pantryIngredients, setPantryIngredients] = useState<Ingredient[]>();
  const [freezerIngredients, setFreezerIngredients] = useState<Ingredient[]>();

  const { user } = useAuthentication();

  const getIngredients = useCallback(async () => {
    setIsLoading(true);
    setRefrigeratorIngredients(await fetchIngredients("refrigerator"));
    setPantryIngredients(await fetchIngredients("pantry"));
    setFreezerIngredients(await fetchIngredients("freezer"));
    setIsLoading(false);
    return { refrigeratorIngredients, pantryIngredients, freezerIngredients };
  }, []);

  const addIngredient = async (ingredient: Ingredient) => {
    const { id, name, amount, units, location } = ingredient;

    const timestamp: FieldValue =
      firebase.firestore.FieldValue.serverTimestamp();

    setIsLoading(true);

    const data: FirebaseIngredient = {
      id,
      name,
      amount,
      units,
      createdAt: timestamp,
      createdBy: user?.uid ?? "eCp1PTFg4IOdUgIFm3u6H85X6wp2",
    };

    try {
      await addDoc(collectionRef(location), data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
    // navigate to ingredients screen
  };

  useEffect(() => {
    getIngredients();
  }, [getIngredients]);

  return {
    name,
    setName,
    amount,
    setAmount,
    units,
    setUnits,
    addIngredient,
    isLoading,
    error,
    refrigeratorIngredients,
    pantryIngredients,
    freezerIngredients,
  };
};

export default useIngredients;
