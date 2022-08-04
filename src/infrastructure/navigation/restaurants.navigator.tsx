import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/restaurants.screen";
import { RestaurantDetailsScreen } from "../../features/restaurants/restaurant-details.screen";

const RestaurantStack = createStackNavigator();

const screenOptions = () => {
  return {
    ...TransitionPresets.ModalPresentationIOS,
    headerShown: false,
  };
};

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={screenOptions}>
      <RestaurantStack.Screen
        name="Restaurants Screen"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="Restaurant Details"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
