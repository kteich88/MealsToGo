import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "./types";
import TabBar from "components/TabBar/TabBar";
import { BottomTabRouteNames } from "./constants";
import GroceryStack from "./stacks/grocery.stack";
import RecipeStack from "./stacks/recipe.stack";
import ProfileScreen from "screens/profile/profile.screen";
import IngredientStack from "./stacks/ingredient.stack";
import MealPlanStack from "./stacks/meal-plan.stack";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={BottomTabRouteNames.Recipes} component={RecipeStack} />
      <Tab.Screen
        name={BottomTabRouteNames.Groceries}
        component={GroceryStack}
      />
      <Tab.Screen
        name={BottomTabRouteNames.MealPlans}
        component={MealPlanStack}
      />
      <Tab.Screen
        name={BottomTabRouteNames.Ingredients}
        component={IngredientStack}
      />
      <Tab.Screen
        name={BottomTabRouteNames.Profile}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
