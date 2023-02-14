import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import CameraScreen from "screens/camera/camera.screen";
import { GroceriesScreen } from "screens/groceries/groceries.screen";
import { ProfileScreen } from "screens/profile/Profile.screen";

const ProfileStack = createStackNavigator();

const screenOptions = () => {
  return {
    ...CardStyleInterpolators.forHorizontalIOS,
  };
};

export const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator screenOptions={screenOptions}>
      <ProfileStack.Screen
        options={{
          header: () => null,
        }}
        name="Profile Screen"
        component={ProfileScreen}
      />
      <ProfileStack.Screen name="Camera" component={CameraScreen} />
      {/* Favorite Recipes */}
      {/* <ProfileStack.Screen name="Favorites Screen" component={FavoritesScreen} /> */}
      {/* Grocery List */}
      {/* <ProfileStack.Screen
        name="Grocery List Screen"
        component={GroceriesScreen}
      /> */}
      {/* Meal Planning */}
      {/* <ProfileStack.Screen
        name="Meal Planning Screen"
        component={MealPlanningScreen}
      /> */}
    </ProfileStack.Navigator>
  );
};
