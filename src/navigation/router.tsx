import React from "react";
import AuthenticationProvider from "contexts/authentication/Authentication.provider";
import BottomTabsNavigator from "./bottom-tabs.navigator";
import { NavigationContainer } from "@react-navigation/native";

const Router = () => {
  return (
    <AuthenticationProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AuthenticationProvider>
  );
};

export default Router;
