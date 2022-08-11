import React from "react";
import Icon from "@expo/vector-icons/FontAwesome5";
import { fontSizes } from "../../infrastructure/theme/fonts";
import { OpaqueColorValue } from "react-native";

export const AppleIcon = (color: string | OpaqueColorValue | undefined) => {
  return (
    <Icon name="apple-alt" size={parseInt(fontSizes.body, 10)} color={color} />
  );
};
