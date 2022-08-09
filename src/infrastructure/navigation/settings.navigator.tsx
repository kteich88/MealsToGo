import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/settings.screen";
import { FavoritesScreen } from "../../features/favorites/favorites.screen";

const SettingsStack = createStackNavigator();

const screenOptions = () => {
  return {
    ...CardStyleInterpolators.forHorizontalIOS,
  };
};

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator screenOptions={screenOptions}>
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favorites" component={FavoritesScreen} />
    </SettingsStack.Navigator>
  );
};
