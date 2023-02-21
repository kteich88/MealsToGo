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
import {
  sortIngredients,
  transformIngredientsDocumentData as transformIngredientDocumentData,
} from "./helpers";
import {
  Ingredient,
  IngredientList,
  defaultSortedIngredientList,
} from "screens/ingredients/types";

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
  const [ingredientList, setIngredientList] = useState();
  const [sortedIngredientList, setSortedIngredientList] =
    useState<IngredientList>(defaultSortedIngredientList);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { user } = useContext(AuthenticationContext);
  const firebaseCollectionRef = collection(db, "ingredients");

  const loadIngredientsList = () => {
    setIsLoading(true);
    onSnapshot(firebaseCollectionRef, (snapshot) => {
      const ingredientsSnapshot = snapshot.docs.map((doc) => {
        transformIngredientDocumentData(doc.data(), doc.id);

        // console.log("Whatsup doc: ", doc.data());
        return {
          ...doc.data(),
        };
      });
      // setIngredientList(
      //   ingredientsSnapshot.map((data) => transformDocumentData(data, id)),
      // );

      // setSortedIngredientList(sortIngredients(ingredientList));
      setIsLoading(false);
    });
  };

  const addIngredient = async (ingredient: Ingredient) => {
    const { item, amount, unit } = ingredient;

    setIsLoading(true);

    const timestamp: FieldValue =
      firebase.firestore.FieldValue.serverTimestamp();

    const data = {
      amount,
      userId: user?.uid,
      item,
      unit,
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
