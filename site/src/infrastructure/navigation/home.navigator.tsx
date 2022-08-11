import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/account.screen";
import { RegisterScreen } from "../../features/account/register.screen";
import { LoginScreen } from "../../features/account/login.screen";
import { GroceriesScreen } from "../../features/groceries/groceries.screen";

const Stack = createStackNavigator();

const screenOptions = () => {
  return {
    headerShown: false,
  };
};

export const HomeNavigator = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    {/* <Stack.Screen name="Pantry" component={PantryScreen} /> */}
    <Stack.Screen name="Groceries" component={GroceriesScreen} />
    {/* <Stack.Screen name="Refrigerator" component={RefrigeratorScreen} /> */}
    {/* <Stack.Screen name="Recipes" component={RecipesScreen} /> */}
  </Stack.Navigator>
);
