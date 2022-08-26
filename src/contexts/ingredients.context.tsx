import React, { useState, createContext, useContext, ReactNode } from "react";
import firebase from "firebase/compat";
import { DocumentData } from "firebase/firestore";
import { AuthenticationContext } from "contexts/authentication.context";
import { Keyboard } from "react-native";
import { errorHandler } from "services/firebase/firebase-error-handler";

interface IngredientsContext {
  ingredients: any;
  error: string | null;
  getIngredients: () => void;
  addIngredients: () => void;
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
  const [ingredients, setIngredients] = useState<DocumentData[]>([]);
  const [ingredientText, setIngredientText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const ingredientRef = firebase.firestore().collection("ingredients");

  const { user } = useContext(AuthenticationContext);

  if (user === null) {
    return;
  }

  const getIngredients = () => {
    ingredientRef
      .where("authorID", "==", user.uid)
      .orderBy("createdAt", "desc")
      .onSnapshot(
        (querySnapshot) => {
          const newIngredients:
            | React.SetStateAction<string>
            | firebase.firestore.DocumentData[] = [];
          querySnapshot.forEach((doc) => {
            const entity = doc.data();
            entity.id = doc.id;
            newIngredients.push(entity);
          });
          setIngredients(newIngredients);
        },
        (e) => {
          setError(errorHandler(e.message));
        },
      );
  };

  const addIngredients = () => {
    if (ingredientText && ingredientText.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        text: ingredientText,
        authorID: user.uid,
        createdAt: timestamp,
      };
      ingredientRef
        .add(data)
        .then((_doc) => {
          setIngredientText("");
          Keyboard.dismiss();
        })
        .catch((e) => {
          setError(errorHandler(e.message));
        });
    }
  };

  return (
    <IngredientsContext.Provider
      value={{
        ingredients,
        error,
        getIngredients,
        addIngredients,
      }}
    >
      {children}
    </IngredientsContext.Provider>
  );
};
