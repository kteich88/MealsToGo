import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RecipeStackParamList } from "navigation/types";
import { RootStackRouteNames } from "navigation/constants";
import { stackHeaderOptions, stackScreenOptions } from "./helpers";
import RecipesScreen from "screens/recipes/recipes.screen";
import AddRecipeScreen from "screens/recipes/add-recipe.screen";
import EditRecipeScreen from "screens/recipes/edit-recipe.screen";

const Stack = createStackNavigator<RecipeStackParamList>();

const RecipeStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        options={stackHeaderOptions}
        name={RootStackRouteNames.RecipeScreen}
        component={RecipesScreen}
      />
      <Stack.Screen
        name={RootStackRouteNames.AddRecipe}
        component={AddRecipeScreen}
      />
      <Stack.Screen
        name={RootStackRouteNames.EditRecipe}
        component={EditRecipeScreen}
      />
    </Stack.Navigator>
  );
};

export default RecipeStack;
