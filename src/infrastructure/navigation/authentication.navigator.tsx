import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthenticationScreen from "screens/authentication/index.screen";
import LoginScreen from "screens/login/login.screen";

const Stack = createStackNavigator();

const screenOptions = () => {
  return {
    headerShown: false,
  };
};

export const AuthenticationNavigator = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="Main" component={AuthenticationScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
