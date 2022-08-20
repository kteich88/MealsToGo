import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabNavigatorParamList } from "types/navigation.types";
import { AuthenticationNavigator } from "./authentication.navigator";
import { SettingsNavigator } from "./settings.navigator";
import Icon from "@expo/vector-icons/MaterialIcons";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";

import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "contexts/authentication.context";
import { RecipesContextProvider } from "contexts/recipes.context";

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
                component={AccessibilityNavigator}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name={"accessibility"} size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Ingredients"
                component={AccessibilityNavigator}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon
                      name={"id-card-o"}
                      size={size}
                      color={color}
                    />
                  ),
                }}
              />

              <Tab.Screen
                name="Settings"
                component={SettingsNavigator}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name={"settings"} size={size} color={color} />
                  ),
                }}
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
