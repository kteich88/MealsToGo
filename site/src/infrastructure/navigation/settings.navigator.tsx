import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/settings.screen";
import { FavoritesScreen } from "../../features/favorites/favorites.screen";
import CameraScreen from "../../features/camera/camera.screen";
import { GroceriesScreen } from "../../features/groceries/groceries.screen";

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
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
      {/* Favorite Recipes */}
      <SettingsStack.Screen name="Favorites" component={FavoritesScreen} />
      {/* Grocery List */}
      <SettingsStack.Screen name="Grocery List" component={GroceriesScreen} />
      {/* Meal Planning */}
      {/* <SettingsStack.Screen
        name="Meal Planning"
        component={MealPlanningScreen}
      /> */}
    </SettingsStack.Navigator>
  );
};
