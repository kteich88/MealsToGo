import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsScreen } from "../../features/restaurants/restaurants.screen";
import { SettingsScreen } from "../../features/settings/settings.screen";
import { MapsScreen } from "../../features/maps/maps.screen";
import { MapsIcon, RestaurantsIcon, SettingsIcon } from "../../utils/Icons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: RestaurantsIcon,
  Maps: MapsIcon,
  Settings: SettingsIcon,
};

const createScreenOptions = ({ route }) => {
  return {
    tabBarIcon: TAB_ICON[route.name],
  };
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
        <Tab.Screen name="Maps" component={MapsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
