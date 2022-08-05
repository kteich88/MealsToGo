import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SettingsScreen } from "../../features/settings/settings.screen";
import { MapsScreen } from "../../features/maps/maps.screen";
import { MapsIcon, RestaurantsIcon, SettingsIcon } from "../../utils/Icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../contexts/authentication.context";
import { AccountNavigator } from "./account.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: RestaurantsIcon,
  Maps: MapsIcon,
  Settings: SettingsIcon,
};

const screenOptions = ({ route }) => {
  return {
    tabBarIcon: TAB_ICON[route.name],
    headerShown: false,
  };
};

const AppNavigator = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Maps" component={MapsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      ) : (
        <AccountNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
