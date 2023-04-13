/**
 * @file React Native Navigation Types
 * @description Learn more about using TypeScript
 * with React Navigation: https://reactnavigation.org/docs/typescript/
 */

import { BottomTabRouteNames, RootStackRouteNames } from "./constants";

export type BottomTabParamList = {
  [BottomTabRouteNames.Recipes]: undefined;
  [BottomTabRouteNames.Groceries]: undefined;
  [BottomTabRouteNames.MealPlans]: undefined;
  [BottomTabRouteNames.Ingredients]: undefined;
  [BottomTabRouteNames.Profile]: undefined;
};

export type Tab = {
  name: string;
};

export type RecipeStackParamList = {
  [RootStackRouteNames.RecipeScreen]: undefined;
  [RootStackRouteNames.AddRecipes]: undefined;
  [RootStackRouteNames.EditRecipes]: { id: string };
};

export type GroceryStackParamList = {
  [RootStackRouteNames.GroceriesScreen]: undefined;
  [RootStackRouteNames.AddGroceries]: undefined;
  [RootStackRouteNames.EditGroceries]: { id: string };
};

export type MealPlanStackParamList = {
  [RootStackRouteNames.MealPlanning]: undefined;
  [RootStackRouteNames.AddMeals]: undefined;
  [RootStackRouteNames.EditMeals]: { id: string };
};

export type IngredientStackParamList = {
  [RootStackRouteNames.IngredientsScreen]: undefined;
  [RootStackRouteNames.AddIngredients]: undefined;
  [RootStackRouteNames.EditIngredients]: { id: string };
};
