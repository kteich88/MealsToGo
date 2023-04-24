import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { IngredientStackParamList } from "navigation/types";
import { RootStackRouteNames } from "navigation/constants";
import { stackHeaderOptions, stackScreenOptions } from "./helpers";
import IngredientsScreen from "screens/ingredients/ingredients.screen";
import AddIngredientScreen from "screens/ingredients/add-ingredient.screen";
import EditIngredientScreen from "screens/ingredients/edit-ingredient.screen";

const Stack = createStackNavigator<IngredientStackParamList>();

const IngredientStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        options={stackHeaderOptions}
        name={RootStackRouteNames.IngredientsScreen}
        component={IngredientsScreen}
      />
      <Stack.Screen
        options={stackHeaderOptions}
        name={RootStackRouteNames.AddIngredient}
        component={AddIngredientScreen}
      />
      <Stack.Screen
        options={stackHeaderOptions}
        name={RootStackRouteNames.EditIngredient}
        component={EditIngredientScreen}
      />
    </Stack.Navigator>
  );
};

export default IngredientStack;
