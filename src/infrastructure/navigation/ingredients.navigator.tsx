import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import IngredientsScreen from "screens/ingredients/ingredients.screen";
import IngredientScreen from "screens/ingredients/ingredient.screen";
import AddIngredientScreen from "screens/ingredients/add-ingredient.screen";

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
      <IngredientsStack.Screen
        options={{
          header: () => null,
        }}
        name="Ingredients Screen"
        component={IngredientsScreen}
      />
      <IngredientsStack.Screen
        name="Add Ingredient Screen"
        component={AddIngredientScreen}
      />
      <IngredientsStack.Screen
        name="Ingredient Screen"
        component={IngredientScreen}
      />
    </IngredientsStack.Navigator>
  );
};
