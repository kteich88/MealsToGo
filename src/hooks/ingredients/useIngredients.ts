import firebase from "firebase/compat";
import { FieldValue, addDoc, collection, onSnapshot } from "firebase/firestore";
import useAuthentication from "hooks/authentication/useAuthentication";
import { useState } from "react";
import { db } from "services/firebase/firebase.db";
import { Ingredient } from "types/ingredients";

const useIngredients = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(0);

  const { user } = useAuthentication();
  const firebaseCollectionRef = collection(db, "ingredients");

  const loadIngredients = async () => {
    setIsLoading(true);
    onSnapshot(firebaseCollectionRef, (snapshot) => {
      const ingredientsSnapshot = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
        };
      });

      setIsLoading(false);
    });
  };

  const addIngredient = async (ingredient: Ingredient) => {
    const { name, amount, units } = ingredient;

    setIsLoading(true);

    const timestamp: FieldValue =
      firebase.firestore.FieldValue.serverTimestamp();

    const data = {
      name,
      amount,
      units,
      createdBy: user?.uid,
      createdAt: timestamp,
    };

    try {
      await addDoc(firebaseCollectionRef, data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return {
    loadIngredients,
    addIngredient,
    isLoading,
    error,
    amount,
    setAmount,
  };
};

export default useIngredients;
