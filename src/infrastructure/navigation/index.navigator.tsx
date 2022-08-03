import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SettingsScreen } from "../../features/settings/settings.screen";
import { MapsScreen } from "../../features/maps/maps.screen";
import { MapsIcon, RestaurantsIcon, SettingsIcon } from "../../utils/Icons";
import { RestaurantsNavigator } from "./restaurants.navigator";

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

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Maps" component={MapsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
