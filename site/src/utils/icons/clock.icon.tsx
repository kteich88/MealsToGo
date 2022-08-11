import React from "react";
import Icon from "@expo/vector-icons/FontAwesome";
import { fontSizes } from "../../infrastructure/theme/fonts";
import { OpaqueColorValue } from "react-native";

export const ClockIcon = (color: string | OpaqueColorValue | undefined) => {
  return (
    <Icon name="clock-o" size={parseInt(fontSizes.body, 10)} color={color} />
  );
};
