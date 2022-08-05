import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/account.screen";
import { RegisterScreen } from "../../features/account/register.screen";
import { LoginScreen } from "../../features/account/login.screen";

const Stack = createStackNavigator();

const screenOptions = () => {
  return {
    headerShown: false,
  };
};

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
