import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import FreezerScreen from "screens/ingredients/freezer.screen";
import PantryScreen from "screens/ingredients/pantry.screen";
import RefrigeratorScreen from "screens/ingredients/refrigerator.screen";

const IngredientsStack = createStackNavigator();

const screenOptions = () => {
  return {
    ...TransitionPresets.ModalPresentationIOS,
    headerShown: false,
  };
};

export const IngredientsNavigator = () => {
  return (
    <IngredientsStack.Navigator screenOptions={screenOptions}>
      <IngredientsStack.Screen name="Pantry" component={PantryScreen} />
      <IngredientsStack.Screen
        name="Refrigerator"
        component={RefrigeratorScreen}
      />
      <IngredientsStack.Screen name="Freezer" component={FreezerScreen} />
    </IngredientsStack.Navigator>
  );
};
