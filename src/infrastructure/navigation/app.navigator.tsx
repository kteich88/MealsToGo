import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigatorParamList } from "types/navigation.types";
import { AuthenticationContext } from "contexts/authentication.context";
import { RecipesContextProvider } from "contexts/recipes.context";
import { FavoritesContextProvider } from "contexts/favorites.context";
import { IngredientsContextProvider } from "contexts/ingredients.context";
import { VoiceContextProvider } from "contexts/voice.context";
import { ScreenNames } from "./constants";
import {
  AuthenticationNavigator,
  GroceriesNavigator,
  MealPlanNavigator,
  ProfileNavigator,
  RecipesNavigator,
} from "./index";
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
        <VoiceContextProvider>
          <FavoritesContextProvider>
            <RecipesContextProvider>
              <IngredientsContextProvider>
                <Tab.Navigator
                  initialRouteName="Profile"
                  screenOptions={screenOptions}
                >
                  <Tab.Screen
                    name={ScreenNames.recipes}
                    component={RecipesNavigator}
                  />
                  <Tab.Screen
                    name={ScreenNames.groceries}
                    component={GroceriesNavigator}
                  />
                  <Tab.Screen
                    name={ScreenNames.meals}
                    component={MealPlanNavigator}
                  />
                  <Tab.Screen
                    name={ScreenNames.ingredients}
                    component={IngredientsNavigator}
                  />
                  <Tab.Screen
                    name={ScreenNames.profile}
                    component={ProfileNavigator}
                  />
                </Tab.Navigator>
              </IngredientsContextProvider>
            </RecipesContextProvider>
          </FavoritesContextProvider>
        </VoiceContextProvider>
      ) : (
        <AuthenticationNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
