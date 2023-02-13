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
  // doc,
  addDoc,
  // deleteDoc,
  // DocumentData,
  FieldValue,
} from "firebase/firestore";
import { db } from "services/firebase/firebase.config";
import { AuthenticationContext } from "contexts/authentication.context";
import { errorHandler } from "services/firebase/firebase-error-handler";
import { sortIngredients, transformDocumentData } from "./helpers";
import {
  defaultSortedIngredientList,
  Ingredient,
  IngredientList,
} from "types/ingredient.types";

interface IngredientsContext {
  ingredientList: Ingredient[];
  sortedIngredientList: IngredientList;
  isLoading: boolean;
  error: string | null;
  addIngredient: (ingredient: Ingredient) => void;
  loadIngredientsList: () => void;
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
  const [ingredientList, setIngredientList] = useState<Ingredient[]>([]);
  const [sortedIngredientList, setSortedIngredientList] =
    useState<IngredientList>(defaultSortedIngredientList);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { user } = useContext(AuthenticationContext);
  const firebaseCollectionRef = collection(db, "ingredients");

  const loadIngredientsList = () => {
    setIsLoading(true);
    onSnapshot(firebaseCollectionRef, (snapshot) => {
      const ingredientsSnapshot = snapshot.docs.map((d) => {
        return {
          id: d.id,
          ...d.data(),
        };
      });

      setIngredientList(
        ingredientsSnapshot.map((data) => transformDocumentData(data, data.id)),
      );
      setSortedIngredientList(sortIngredients(ingredientList));
      setIsLoading(false);
    });
  };

  const addIngredient = async (ingredient: Ingredient) => {
    setIsLoading(true);

    const timestamp: FieldValue =
      firebase.firestore.FieldValue.serverTimestamp();

    const data = {
      amount: ingredient.amount,
      authorId: user?.uid,
      location: ingredient.location,
      name: ingredient.name,
      createdAt: timestamp,
    };

    try {
      await addDoc(firebaseCollectionRef, data);
      setSortedIngredientList({
        ...sortedIngredientList,
        [ingredient.location]: [data],
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(errorHandler(err.message));
      }
    }
    setIsLoading(false);
    loadIngredientsList();
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
        ingredientList,
        sortedIngredientList,
        isLoading,
        error,
        addIngredient,
        loadIngredientsList,
      }}
    >
      {children}
    </IngredientsContext.Provider>
  );
};
