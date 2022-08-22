import React, { createContext, useState, useEffect, useContext } from "react";
import { TransformedRestaurantDataResults } from "../services/types/restaurant.types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Recipe } from "../utils/types/recipe.types";

interface RecipesContext {
  recipes: Recipe[];
  keyword: string;
  search: (searchKeyword: string) => void;
  addRecipe: (recipe: Recipe) => void;
  loadRecipes: (recipe: Recipe) => void;
  editRecipe: (recipe: Recipe) => void;
  removeRecipe: (recipe: Recipe) => void;
}

export const RecipesContext = createContext<RecipesContext>(
  {} as RecipesContext,
);

export const RecipesContextProvider: React.FC = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const saveRecipe = async (value: Recipe[]) => {
    try {
      await AsyncStorage.setItem("@recipes", JSON.stringify(value));
    } catch (e) {
      console.log("Error:", e);
    }
  };

  const loadRecipes = async () => {
    try {
      const value = await AsyncStorage.getItem("@recipes");
      if (value !== null) {
        setRecipes(JSON.parse(value));
      }
    } catch (e) {
      console.log("Error:", e);
    }
  };

  const addRecipe = (recipe: Recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const editRecipe = async () => {};

  const removeRecipe = (recipe: Recipe) => {
    setRecipes(recipes.filter((item) => item.id !== recipe.id));
  };

  useEffect(() => {
    saveRecipe(recipes);
  }, [recipes]);

  useEffect(() => {
    loadRecipes();
  }, []);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        addRecipe,
        loadRecipes,
        editRecipe,
        removeRecipe,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
