import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { authenticationStackScreenOptions } from "./helpers";
import LoginScreen from "screens/login/login.screen";
import RegisterScreen from "screens/register/register.screen";
import { RootStackRouteNames } from "navigation/constants";
import { RootStackParamList } from "navigation/types";

const Stack = createStackNavigator<RootStackParamList>();

const AuthenticationStack = () => (
  <Stack.Navigator screenOptions={authenticationStackScreenOptions}>
    <Stack.Screen name={RootStackRouteNames.Login} component={LoginScreen} />
    <Stack.Screen
      name={RootStackRouteNames.Register}
      component={RegisterScreen}
    />
  </Stack.Navigator>
);

export default AuthenticationStack;
