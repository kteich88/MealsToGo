import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Keyboard } from "react-native";

import firebase from "firebase/compat";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "services/firebase/firebase.config";
import uuid from "react-native-uuid";
import { AuthenticationContext } from "contexts/authentication.context";
import { errorHandler } from "services/firebase/firebase-error-handler";
import { filterIngredients } from "./helpers";
import { IngredientLists } from "types/types";

interface IngredientsContext {
  ingredientLists: IngredientLists[];
  searchIngredient: string;
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
  const [ingredientLists, setIngredientLists] = useState<IngredientLists[]>([]);
  const [searchIngredient, setSearchIngredient] = useState<string>("");
  // const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const { user } = useContext(AuthenticationContext);
  const firebaseCollectionRef = collection(db, "ingredients");

  useEffect(() => {
    onSnapshot(firebaseCollectionRef, (snapshot) => {
      const ingredientsSnapshot = snapshot.docs.map((d) => {
        return {
          docId: d.id,
          id: uuid.v4(),
          ...d.data(),
        };
      });
      setIngredientLists(filterIngredients(ingredientsSnapshot));
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
        ingredientLists,
        error,
        searchIngredient,
        addIngredient,
      }}
    >
      {children}
    </IngredientsContext.Provider>
  );
};
