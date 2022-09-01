import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import firebase from "firebase/compat";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  DocumentData,
} from "firebase/firestore";
import { db } from "services/firebase/firebase.config";
import { AuthenticationContext } from "contexts/authentication.context";
import { errorHandler } from "services/firebase/firebase-error-handler";
import { sortIngredients } from "./helpers";
import { IngredientsList } from "types/types";

interface IngredientsContext {
  ingredientsList: DocumentData[];
  sortedIngredientsList: IngredientsList[];
  error: string | null;
  addIngredient: (ingredient: string) => void;
}

export const IngredientsContext = createContext<IngredientsContext>(
  {} as IngredientsContext,
);

interface IngredientsContextProviderProps {
  children?: ReactNode;
}

export const IngredientsContextProvider: React.FC<
  IngredientsContextProviderProps
> = ({ children }) => {
  const [ingredientsList, setIngredientsList] = useState<DocumentData[]>([]);
  const [sortedIngredientsList, setSortedIngredientsList] = useState<
    IngredientsList[]
  >([]);

  const [error, setError] = useState<string | null>(null);

  const { user } = useContext(AuthenticationContext);
  const firebaseCollectionRef = collection(db, "ingredients");

  useEffect(() => {
    onSnapshot(firebaseCollectionRef, (snapshot) => {
      const ingredientsSnapshot = snapshot.docs.map((d) => {
        return {
          id: d.id,
          ...d.data(),
        };
      });
      setIngredientsList(ingredientsSnapshot);
      setSortedIngredientsList(sortIngredients(ingredientsSnapshot));
    });
  }, []);

  const addIngredient = (ingredient: string) => {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const data = {
      title: ingredient,
      authorID: user?.uid,
      createdAt: timestamp,
    };
    addDoc(firebaseCollectionRef, data).catch((e) => {
      setError(errorHandler(e.message));
    });
  };

  // const removeIngredient = () => {
  //   if (ingredientData && ingredientData.length > 0) {
  //     ingredientData.filter((ingredient) => ingredient.)
  //     deleteDoc(doc(db, "ingredients", ingredientData));
  //   }
  // };

  return (
    <IngredientsContext.Provider
      value={{
        ingredientsList,
        sortedIngredientsList,
        error,
        addIngredient,
      }}
    >
      {children}
    </IngredientsContext.Provider>
  );
};
