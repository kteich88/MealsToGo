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
import { collectionRef } from "./constants";
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
    setRefrigeratorIngredients(
      await fetchIngredients(
        collectionRef(IngredientLocation.Refrigerator),
        IngredientLocation.Refrigerator,
      ),
    );
    setPantryIngredients(
      await fetchIngredients(
        collectionRef(IngredientLocation.Pantry),
        IngredientLocation.Pantry,
      ),
    );
    setFreezerIngredients(
      await fetchIngredients(
        collectionRef(IngredientLocation.Freezer),
        IngredientLocation.Freezer,
      ),
    );
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
      createdBy: user?.uid,
    };

    console.log("DATA", data);

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
