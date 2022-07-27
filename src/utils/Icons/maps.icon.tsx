import React from "react";
import Icon from "@expo/vector-icons/FontAwesome5";
import { fontSizes } from "../../infrastructure/theme/fonts";
import { colors } from "../../infrastructure/theme/colors";

export const MapsIcon = () => {
  return (
    <Icon
      name="map-marker-alt"
      size={parseInt(fontSizes.body, 10)}
      color={colors.ui.secondary}
    />
  );
};
