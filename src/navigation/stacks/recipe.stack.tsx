import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RecipeStackParamList } from "navigation/types";
import { RootStackRouteNames } from "navigation/constants";
import { stackHeaderOptions, stackScreenOptions } from "./helpers";
import RecipesScreen from "screens/recipes/recipes.screen";

const Stack = createStackNavigator<RecipeStackParamList>();

const RecipeStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        options={stackHeaderOptions}
        name={RootStackRouteNames.RecipeScreen}
        component={RecipesScreen}
      />
    </Stack.Navigator>
  );
};

export default RecipeStack;
