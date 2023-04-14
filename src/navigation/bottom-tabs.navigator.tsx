import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "./types";
import { BottomTabRouteNames } from "./constants";
import GroceryStack from "./stacks/grocery.stack";
import RecipeStack from "./stacks/recipe.stack";
import ProfileScreen from "screens/profile/profile.screen";
import IngredientStack from "./stacks/ingredient.stack";
import MealPlanStack from "./stacks/meal-plan.stack";
import { tabBarIcon } from "./helpers";
import { theme } from "theme/theme";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={BottomTabRouteNames.Recipes}
        component={RecipeStack}
        options={{
          tabBarLabel: BottomTabRouteNames.Recipes,
          tabBarIcon: ({ focused }) => tabBarIcon(focused, "AntDesign", "book"),
        }}
      />
      <Tab.Screen
        name={BottomTabRouteNames.Groceries}
        component={GroceryStack}
        options={{
          tabBarLabel: BottomTabRouteNames.Groceries,
          tabBarIcon: ({ focused }) =>
            tabBarIcon(focused, "Fontisto", "shopping-basket"),
        }}
      />
      <Tab.Screen
        name={BottomTabRouteNames.MealPlans}
        component={MealPlanStack}
        options={{
          tabBarLabel: BottomTabRouteNames.MealPlans,
          tabBarIcon: ({ focused }) =>
            tabBarIcon(focused, "MaterialCommunityIcon", "calendar-edit"),
        }}
      />
      <Tab.Screen
        name={BottomTabRouteNames.Ingredients}
        component={IngredientStack}
        options={{
          tabBarLabel: BottomTabRouteNames.Ingredients,
          tabBarIcon: ({ focused }) =>
            tabBarIcon(focused, "Ionicons", "md-restaurant"),
        }}
      />
      <Tab.Screen
        name={BottomTabRouteNames.Profile}
        component={ProfileScreen}
        options={{
          tabBarStyle: {
            justifyContent: "center",
          },
          tabBarLabel: BottomTabRouteNames.Profile,
          tabBarIcon: ({ focused }) =>
            tabBarIcon(focused, "FontAwesome5", "user-circle"),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
