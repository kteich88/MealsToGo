import Icon from "components/Icons/Icon";
import React from "react";
import { theme } from "theme/theme";

export const screenOptions = () => ({
  headerShown: false,
  tabBarActiveTintColor: theme.colors.turquoise,
  tabBarInactiveTintColor: theme.colors.midnight,
});

export const bottomTabIcons = (type: string, name: string) => ({
  tabBarIcon: () => (
    <Icon
      type={type}
      name={name}
      color={theme.colors.midnight}
      size={theme.size.sm}
    />
  ),
});
