/* eslint-disable react/no-unstable-nested-components */
import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigatorParamList } from "types/navigation.types";
import { AuthenticationContext } from "contexts/authentication.context";
import { RecipesContextProvider } from "contexts/recipes.context";
import { FavoritesContextProvider } from "contexts/favorites.context";
import { IngredientsContextProvider } from "contexts/ingredients.context";
import { ScreenName } from "./constants";
import {
  AuthenticationNavigator,
  GroceriesNavigator,
  MealPlanNavigator,
  ProfileNavigator,
  RecipesNavigator,
} from "./index";
import { IngredientsNavigator } from "./ingredients.navigator";
import Icon from "components/Icons/Icon";
import { theme } from "infrastructure/theme/theme";

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const screenOptions = () => ({
  headerShown: false,
  tabBarActiveTintColor: theme.colors.turquoise,
  tabBarInactiveTintColor: theme.colors.midnight,
});

const AppNavigator = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <FavoritesContextProvider>
          <RecipesContextProvider>
            <IngredientsContextProvider>
              <Tab.Navigator
                initialRouteName="Profile"
                screenOptions={screenOptions}
              >
                <Tab.Screen
                  name={ScreenName.recipes}
                  component={RecipesNavigator}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Icon
                        type={"AntDesign"}
                        name="book"
                        color={color}
                        size={size}
                      />
                    ),
                  }}
                />
                <Tab.Screen
                  name={ScreenName.groceries}
                  component={GroceriesNavigator}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Icon
                        type={"Fontisto"}
                        name="shopping-basket"
                        color={color}
                        size={size}
                      />
                    ),
                  }}
                />
                <Tab.Screen
                  name={ScreenName.meals}
                  component={MealPlanNavigator}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Icon
                        type={"MaterialCommunityIcon"}
                        name="calendar-edit"
                        color={color}
                        size={size}
                      />
                    ),
                  }}
                />
                <Tab.Screen
                  name={ScreenName.ingredients}
                  component={IngredientsNavigator}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Icon
                        type={"Ionicons"}
                        name="md-restaurant"
                        color={color}
                        size={size}
                      />
                    ),
                  }}
                />
                <Tab.Screen
                  name={ScreenName.profile}
                  component={ProfileNavigator}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Icon
                        type={"EvilIcons"}
                        name="user"
                        color={color}
                        size={size}
                      />
                    ),
                  }}
                />
              </Tab.Navigator>
            </IngredientsContextProvider>
          </RecipesContextProvider>
        </FavoritesContextProvider>
      ) : (
        <AuthenticationNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
