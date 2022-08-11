import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { fontSizes } from "../../infrastructure/theme/fonts";
import { colors } from "../../infrastructure/theme/colors";

export const ClosedIcon = () => {
  return (
    <Icon
      name="curtains-closed"
      size={parseInt(fontSizes.body, 10)}
      color={colors.ui.error}
    />
  );
};
