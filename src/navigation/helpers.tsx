import Icon from "components/Icons/Icon";
import React from "react";
import { Image, ImageSourcePropType, Text } from "react-native";
import { theme } from "theme/theme";
import { styles } from "./styles";
import { BottomTabRouteNames } from "./constants";

export const screenOptions = () => ({
  headerShown: false,
  tabBarActiveTintColor: theme.colors.turquoise,
  tabBarInactiveTintColor: theme.colors.midnight,
});

/**
 * tabBarIcon helper for options to set bottom tab bar icons
 * @param focused boolean
 * @param asset ImageSourcePropType
 * @returns customized bottom tab icon
 */
export const tabBarIcon = (focused: boolean, asset: ImageSourcePropType) => {
  return (
    <Image
      style={[styles.icon, focused ? styles.iconActive : styles.iconInactive]}
      source={asset}
    />
  );
};

/**
 * tabBarIcon helper for options to set bottom tab bar icons
 * @param focused boolean
 * @param label BottomTabRouteNames
 * @returns bottom tab label
 */
export const tabBarLabel = (focused: boolean, label: BottomTabRouteNames) => {
  return (
    <Text style={[styles.text, focused ? styles.active : styles.inactive]}>
      {label}
    </Text>
  );
};
