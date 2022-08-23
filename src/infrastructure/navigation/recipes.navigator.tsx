import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RecipeDetailsScreen from "screens/recipes/recipe-details.screen";
import RecipesScreen from "screens/recipes/recipes.screen";

const RecipesStack = createStackNavigator();

const screenOptions = () => {
  return {
    ...TransitionPresets.ModalPresentationIOS,
    headerShown: false,
  };
};

export const RecipesNavigator = () => {
  return (
    <RecipesStack.Navigator screenOptions={screenOptions}>
      <RecipesStack.Screen name="Recipes Screen" component={RecipesScreen} />
      <RecipesStack.Screen
        name="Recipe Details"
        component={RecipeDetailsScreen}
      />
    </RecipesStack.Navigator>
  );
};
