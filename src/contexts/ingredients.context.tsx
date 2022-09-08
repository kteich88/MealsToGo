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
import { IngredientDocumentDataType, IngredientsList } from "types/types";

interface IngredientsContext {
  ingredientsList: DocumentData[];
  sortedIngredientsList: IngredientsList[];
  isLoading: boolean;
  error: string | null;
  addIngredient: (ingredient: IngredientDocumentDataType) => void;
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
  const [ingredientsList, setIngredientsList] = useState<DocumentData[]>([]);
  const [sortedIngredientsList, setSortedIngredientsList] = useState<
    IngredientsList[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { user } = useContext(AuthenticationContext);
  const firebaseCollectionRef = collection(db, "ingredients");

  useEffect(() => {
    loadIngredientsList();
  }, []);

  const loadIngredientsList = () => {
    setIsLoading(true);
    onSnapshot(firebaseCollectionRef, (snapshot) => {
      const ingredientsSnapshot = snapshot.docs.map((d) => {
        return {
          id: d.id,
          ...d.data(),
        };
      });
      setIngredientsList(ingredientsSnapshot);
      setSortedIngredientsList(sortIngredients(ingredientsSnapshot));
      setIsLoading(false);
    });
  };

  const addIngredient = (ingredient: DocumentData) => {
    setIsLoading(true);
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const data = {
      amount: ingredient.amount,
      authorId: user?.uid,
      location: ingredient.location,
      name: ingredient.name,
      createdAt: timestamp,
    };
    addDoc(firebaseCollectionRef, data).catch((e) => {
      setError(errorHandler(e.message));
    });
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
        ingredientsList,
        sortedIngredientsList,
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
