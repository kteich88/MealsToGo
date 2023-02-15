import React from "react";
import { SafeAreaView } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { globalStyles } from "infrastructure/theme/global.styles";

interface MealPlanProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const MealPlanScreen = ({ navigation }: MealPlanProps) => {
  return <SafeAreaView style={globalStyles.safeArea}></SafeAreaView>;
};
