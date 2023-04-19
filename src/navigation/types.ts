/**
 * @file React Native Navigation Types
 * @description Learn more about using TypeScript
 * with React Navigation: https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabRouteNames, RootStackRouteNames } from "./constants";

export type RootStackParamList = {
  [BottomTabRouteNames.Recipes]: undefined;
  [BottomTabRouteNames.Groceries]: undefined;
  [BottomTabRouteNames.MealPlans]: undefined;
  [BottomTabRouteNames.Ingredients]: undefined;
  [BottomTabRouteNames.Profile]: undefined;
  [RootStackRouteNames.Login]: undefined;
  [RootStackRouteNames.Register]: undefined;
};

export type Tab = {
  name: string;
};

export type RecipeStackParamList = {
  [RootStackRouteNames.RecipesScreen]: undefined;
  [RootStackRouteNames.AddRecipe]: undefined;
  [RootStackRouteNames.EditRecipe]: { id: string };
};

export type GroceryStackParamList = {
  [RootStackRouteNames.GroceriesScreen]: undefined;
  [RootStackRouteNames.AddGrocery]: undefined;
  [RootStackRouteNames.EditGrocery]: { id: string };
};

export type MealPlanStackParamList = {
  [RootStackRouteNames.MealPlanning]: undefined;
  [RootStackRouteNames.AddMeal]: undefined;
  [RootStackRouteNames.EditMeal]: { id: string };
};

export type IngredientStackParamList = {
  [RootStackRouteNames.IngredientsScreen]: undefined;
  [RootStackRouteNames.AddIngredient]: undefined;
  [RootStackRouteNames.EditIngredient]: { id: string };
};

export type LoginScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  RootStackRouteNames.Login
>;

// Ingredients
export type AddIngredientScreenNavigationProps = NativeStackScreenProps<
  IngredientStackParamList,
  RootStackRouteNames.AddIngredient
>;
