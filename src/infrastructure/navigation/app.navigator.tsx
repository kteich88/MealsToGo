import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigatorParamList } from "types/navigation.types";
import { AuthenticationNavigator } from "./authentication.navigator";
import { SettingsNavigator } from "./settings.navigator";

import { AuthenticationContext } from "contexts/authentication.context";
import { RecipesContextProvider } from "contexts/recipes.context";
import { FavoritesContextProvider } from "contexts/favorites.context";
import {
  recipeTabOptions,
  ingredientsTabOptions,
  settingsTabOptions,
} from "./helpers";
import { RecipesNavigator } from "./recipes.navigator";
import { IngredientsNavigator } from "./ingredients.navigator";

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const screenOptions = {
  headerShown: false,
};

const AppNavigator = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <FavoritesContextProvider>
          <RecipesContextProvider>
            <Tab.Navigator
              initialRouteName="Settings"
              screenOptions={screenOptions}
            >
              <Tab.Screen
                name="Recipes"
                component={RecipesNavigator}
                options={recipeTabOptions}
              />
              <Tab.Screen
                name="Ingredients"
                component={IngredientsNavigator}
                options={ingredientsTabOptions}
              />

              <Tab.Screen
                name="Settings"
                component={SettingsNavigator}
                options={settingsTabOptions}
              />
            </Tab.Navigator>
          </RecipesContextProvider>
        </FavoritesContextProvider>
      ) : (
        <AuthenticationNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
