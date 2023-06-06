/**
 * @file React Native Navigation Types
 * @description Learn more about using TypeScript
 * with React Navigation: https://reactnavigation.org/docs/typescript/
 */

import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { BottomTabRouteNames, RootStackRouteNames } from "./constants";
import { IngredientLocation } from "screens/ingredients/constants";

export type BottomTabsParamList = {
  [BottomTabRouteNames.Recipes]: undefined;
  [BottomTabRouteNames.Groceries]: undefined;
  [BottomTabRouteNames.MealPlans]: undefined;
  [BottomTabRouteNames.Ingredients]: undefined;
  [BottomTabRouteNames.Profile]: undefined;
};

export type RootStackParamList = {
  [RootStackRouteNames.Login]: undefined;
  [RootStackRouteNames.Register]: undefined;
  [RootStackRouteNames.AddRecipe]: undefined;
  [RootStackRouteNames.EditRecipe]: { id: string };
  [RootStackRouteNames.AddGrocery]: undefined;
  [RootStackRouteNames.EditGrocery]: { id: string };
  [RootStackRouteNames.AddMeal]: undefined;
  [RootStackRouteNames.EditMeal]: { id: string };
  [RootStackRouteNames.AddIngredient]: { location: IngredientLocation };
  [RootStackRouteNames.EditIngredient]: { id: string };
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

export type AddIngredientStack = {
  [RootStackRouteNames.EditIngredient]: { location: IngredientLocation };
};
export type EditIngredientStack = {
  [RootStackRouteNames.EditIngredient]: { id: string };
};

export type IngredientStackParamList = {
  [RootStackRouteNames.IngredientsScreen]: undefined;
  [RootStackRouteNames.AddIngredient]: { location: IngredientLocation };
  [RootStackRouteNames.EditIngredient]: { id: string };
};

export type LoginScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  RootStackRouteNames.Login
>;

// Ingredients
export type IngredientsScreenNavigationProps = NativeStackScreenProps<
  IngredientStackParamList,
  RootStackRouteNames.IngredientsScreen
>;
export type EditIngredientNavigationProps = NativeStackScreenProps<
  IngredientStackParamList,
  RootStackRouteNames.EditIngredient
>;
