import React from "react";
import AuthenticationProvider from "contexts/authentication/Authentication.provider";
import BottomTabsNavigator from "./bottom-tabs.navigator";

const Router = () => {
  return (
    <AuthenticationProvider>
      <BottomTabsNavigator />
    </AuthenticationProvider>
  );
};

export default Router;
