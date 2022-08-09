import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapsIcon, RestaurantsIcon, SettingsIcon } from "../../utils/icons";
import { MapsScreen } from "../../features/maps/maps.screen";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./settings.navigator";
import { AccountNavigator } from "./account.navigator";
import { AuthenticationContext } from "../../contexts/authentication.context";
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
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen
                  name="Restaurants"
                  component={RestaurantsNavigator}
                />
                <Tab.Screen name="Maps" component={MapsScreen} />
                <Tab.Screen name="Settings" component={SettingsNavigator} />
              </Tab.Navigator>
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      ) : (
        <AccountNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
