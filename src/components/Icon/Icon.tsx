import React from "react";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  Octicons,
  SimpleLineIcons,
  Zocial,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { theme } from "infrastructure/theme";
import { OpaqueColorValue } from "react-native";

interface IconProps {
  icon: string;
  name: any;
  color?: string | OpaqueColorValue | undefined;
  size?: number | undefined;
}

export const renderIcon = ({ icon, name, color, size }: IconProps) => {
  switch (icon) {
    case "AntDesign":
      return <AntDesign name={name} size={size} color={color} />;
    case "Entypo":
      return <Entypo name={name} size={size} color={color} />;
    case "EvilIcons":
      return <EvilIcons name={name} size={size} color={color} />;
    case "Feather":
      return <Feather name={name} size={size} color={color} />;
    case "FontAwesome":
      return <FontAwesome name={name} size={size} color={color} />;
    case "FontAwesome5":
      return <FontAwesome5 name={name} size={size} color={color} />;
    case "Fontisto":
      return <Fontisto name={name} size={size} color={color} />;
    case "Foundation":
      return <Foundation name={name} size={size} color={color} />;
    case "Ionicons":
      return <Ionicons name={name} size={size} color={color} />;
    case "Octicons":
      return <Octicons name={name} size={size} color={color} />;
    case "Zocial":
      return <Zocial name={name} size={size} color={color} />;
    case "SimpleLineIcons":
      return <SimpleLineIcons name={name} size={size} color={color} />;
    case "MaterialCommunityIcon":
      return <MaterialCommunityIcons name={name} size={size} color={color} />;
    default:
      return <MaterialIcons name={name} size={size} color={color} />;
  }
};

const Icon: React.FC<IconProps> = ({
  icon,
  name,
  color = theme.colors.bg.primary,
  size = theme.spacing.sixteen,
}) => {
  return renderIcon({ icon, name, color, size });
};

export default Icon;
