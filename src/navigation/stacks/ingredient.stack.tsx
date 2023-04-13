import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { IngredientStackParamList } from "navigation/types";
import { RootStackRouteNames } from "navigation/constants";
import { stackHeaderOptions, stackScreenOptions } from "./helpers";
import IngredientsScreen from "screens/ingredients/ingredients.screen";

const Stack = createStackNavigator<IngredientStackParamList>();

const IngredientStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        options={stackHeaderOptions}
        name={RootStackRouteNames.IngredientsScreen}
        component={IngredientsScreen}
      />
    </Stack.Navigator>
  );
};

export default IngredientStack;
