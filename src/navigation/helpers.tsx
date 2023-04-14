import Icon from "components/Icons/Icon";
import React from "react";
import { theme } from "theme/theme";
import { styles } from "./styles";

export const screenOptions = () => ({
  headerShown: false,
  tabBarActiveTintColor: theme.colors.turquoise,
  tabBarInactiveTintColor: theme.colors.midnight,
});

/**
 * tabBarIcon helper for options to set bottom tab bar icons
 * @param focused boolean
 * @param type Icon Library
 * @param name name of icon
 * @returns customized icon
 */
export const tabBarIcon = (focused: boolean, type: string, name: string) => {
  return (
    <Icon
      type={type}
      name={name}
      color={theme.colors.midnight}
      size={theme.size.sm}
      style={[styles.icon, focused ? styles.iconActive : styles.iconInactive]}
    />
  );
};
