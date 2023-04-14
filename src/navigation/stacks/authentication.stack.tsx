import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { authenticationStackScreenOptions } from "./helpers";
import LoginScreen from "screens/login/login.screen";
import RegisterScreen from "screens/register/register.screen";

const Stack = createStackNavigator();

const AuthenticationStack = () => (
  <Stack.Navigator screenOptions={authenticationStackScreenOptions}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthenticationStack;
