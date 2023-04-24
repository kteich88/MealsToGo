import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "./types";
import { BottomTabRouteNames, RootStackRouteNames } from "./constants";
import GroceryStack from "./stacks/grocery.stack";
import RecipeStack from "./stacks/recipe.stack";
import ProfileScreen from "screens/profile/profile.screen";
import IngredientStack from "./stacks/ingredient.stack";
import MealPlanStack from "./stacks/meal-plan.stack";
import { tabBarIcon, tabBarLabel } from "./helpers";
import BottomTabGroceriesIcon from "assets/icons/bottom-tab-icons/groceries.png";
import BottomTabIngredientsIcon from "assets/icons/bottom-tab-icons/ingredients.png";
import BottomTabMealPlansIcon from "assets/icons/bottom-tab-icons/meal-planning.png";
import BottomTabProfileIcon from "assets/icons/bottom-tab-icons/profile.png";
import BottomTabRecipesIcon from "assets/icons/bottom-tab-icons/recipes.png";
import useAuthentication from "hooks/authentication/useAuthentication";
import { NavigationContainer } from "@react-navigation/native";
import AuthenticationStack from "./stacks/authentication.stack";
import IngredientsScreen from "screens/ingredients/ingredients.screen";

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabsNavigator = () => {
  const { isAuthenticated } = useAuthentication();

  return (
    <NavigationContainer>
      {/* {isAuthenticated ? ( */}
      <Tab.Navigator
        initialRouteName={RootStackRouteNames.Login}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name={BottomTabRouteNames.Recipes}
          component={RecipeStack}
          options={{
            tabBarLabel: ({ focused }) =>
              tabBarLabel(focused, BottomTabRouteNames.Recipes),
            tabBarIcon: ({ focused }) =>
              tabBarIcon(focused, BottomTabRecipesIcon),
          }}
        />
        <Tab.Screen
          name={BottomTabRouteNames.Groceries}
          component={GroceryStack}
          options={{
            tabBarLabel: ({ focused }) =>
              tabBarLabel(focused, BottomTabRouteNames.Groceries),
            tabBarIcon: ({ focused }) =>
              tabBarIcon(focused, BottomTabGroceriesIcon),
          }}
        />
        <Tab.Screen
          name={BottomTabRouteNames.MealPlans}
          component={MealPlanStack}
          options={{
            tabBarLabel: ({ focused }) =>
              tabBarLabel(focused, BottomTabRouteNames.MealPlans),
            tabBarIcon: ({ focused }) =>
              tabBarIcon(focused, BottomTabMealPlansIcon),
          }}
        />
        <Tab.Screen
          name={BottomTabRouteNames.Ingredients}
          component={IngredientsScreen}
          options={{
            tabBarLabel: ({ focused }) =>
              tabBarLabel(focused, BottomTabRouteNames.Ingredients),
            tabBarIcon: ({ focused }) =>
              tabBarIcon(focused, BottomTabIngredientsIcon),
          }}
        />
        <Tab.Screen
          name={BottomTabRouteNames.Profile}
          component={ProfileScreen}
          options={{
            tabBarStyle: {
              justifyContent: "center",
            },
            tabBarLabel: ({ focused }) =>
              tabBarLabel(focused, BottomTabRouteNames.Profile),
            tabBarIcon: ({ focused }) =>
              tabBarIcon(focused, BottomTabProfileIcon),
          }}
        />
      </Tab.Navigator>
      {/* ) : (
        <AuthenticationStack />
      )} */}
      {/* <IngredientStack /> */}
    </NavigationContainer>
  );
};

export default BottomTabsNavigator;
