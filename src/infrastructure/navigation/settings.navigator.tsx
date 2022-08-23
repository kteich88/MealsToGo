import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../screens/settings/settings.screen";
import CameraScreen from "../../screens/camera/camera.screen";
import { GroceriesScreen } from "../../screens/groceries/groceries.screen";

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
        name="Settings Screen"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Camera Screen" component={CameraScreen} />
      {/* Favorite Recipes */}
      {/* <SettingsStack.Screen name="Favorites Screen" component={FavoritesScreen} /> */}
      {/* Grocery List */}
      {/* <SettingsStack.Screen
        name="Grocery List Screen"
        component={GroceriesScreen}
      /> */}
      {/* Meal Planning */}
      {/* <SettingsStack.Screen
        name="Meal Planning Screen"
        component={MealPlanningScreen}
      /> */}
    </SettingsStack.Navigator>
  );
};
