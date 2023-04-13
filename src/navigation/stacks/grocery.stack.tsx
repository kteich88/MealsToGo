import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { GroceryStackParamList } from "navigation/types";
import { RootStackRouteNames } from "navigation/constants";
import GroceriesScreen from "screens/groceries/groceries.screen";
import { stackHeaderOptions, stackScreenOptions } from "./helpers";

const Stack = createStackNavigator<GroceryStackParamList>();

const GroceryStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        options={stackHeaderOptions}
        name={RootStackRouteNames.GroceriesScreen}
        component={GroceriesScreen}
      />
    </Stack.Navigator>
  );
};

export default GroceryStack;
