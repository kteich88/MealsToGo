import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { MealPlanScreen } from "screens/mealplan/MealPlan.screen";

const MealPlanStack = createStackNavigator();

const screenOptions = () => {
  return {
    ...TransitionPresets.ModalPresentationIOS,
    headerShown: false,
  };
};

export const MealPlanNavigator = () => {
  return (
    <MealPlanStack.Navigator screenOptions={screenOptions}>
      <MealPlanStack.Screen
        options={{
          header: () => null,
        }}
        name="Meal Plan Screen"
        component={MealPlanScreen}
      />
    </MealPlanStack.Navigator>
  );
};
