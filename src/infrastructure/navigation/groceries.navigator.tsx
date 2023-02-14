import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { GroceriesScreen } from "screens/groceries/groceries.screen";

const GroceriesStack = createStackNavigator();

const screenOptions = () => {
  return {
    ...TransitionPresets.ModalPresentationIOS,
    headerShown: false,
  };
};

export const GroceriesNavigator = () => {
  return (
    <GroceriesStack.Navigator screenOptions={screenOptions}>
      <GroceriesStack.Screen
        options={{
          header: () => null,
        }}
        name="Groceries Screen"
        component={GroceriesScreen}
      />
    </GroceriesStack.Navigator>
  );
};
