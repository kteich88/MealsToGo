import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MealPlanStackParamList } from "navigation/types";
import { RootStackRouteNames } from "navigation/constants";
import { stackHeaderOptions, stackScreenOptions } from "./helpers";
import MealPlanningScreen from "screens/meal-planning/meal-planning.screen";

const Stack = createStackNavigator<MealPlanStackParamList>();

const MealPlanStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        options={stackHeaderOptions}
        name={RootStackRouteNames.MealPlanning}
        component={MealPlanningScreen}
      />
    </Stack.Navigator>
  );
};

export default MealPlanStack;
