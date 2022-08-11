import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapsIcon, RestaurantsIcon, SettingsIcon } from "../../utils/icons";
import { SettingsNavigator } from "./settings.navigator";
import { RestaurantsContextProvider } from "../../contexts/restaurants.context";
import { LocationContextProvider } from "../../contexts/location.context";
import { FavoritesContextProvider } from "../../contexts/favorites.context";

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
  return (
    <NavigationContainer>
      <FavoritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Tab.Navigator screenOptions={screenOptions}>
              {/* <Tab.Screen name="Recipes" component={RecipesNavigator} /> */}
              {/* <Tab.Screen name="Foods" component={FoodsNavigator} /> */}
              <Tab.Screen name="Settings" component={SettingsNavigator} />
            </Tab.Navigator>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavoritesContextProvider>
    </NavigationContainer>
  );
};

export default AppNavigator;
