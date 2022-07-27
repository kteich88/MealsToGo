import React from "react";
import Icon from "@expo/vector-icons/Ionicons";
import { fontSizes } from "../../infrastructure/theme/fonts";
import { colors } from "../../infrastructure/theme/colors";

export const SettingsIcon = () => {
  return (
    <Icon
      name="settings"
      size={parseInt(fontSizes.body, 10)}
      color={colors.ui.primary}
    />
  );
};
