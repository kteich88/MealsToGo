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
import { OpaqueColorValue, StyleProp } from "react-native";

export interface IconProps {
  type: string;
  name: any;
  style?: StyleProp<any>;
  color?: string | OpaqueColorValue | undefined;
  size?: number | undefined;
}

export const renderIcon = ({ type, name, style, color, size }: IconProps) => {
  switch (type) {
    case "AntDesign":
      return <AntDesign name={name} style={style} color={color} size={size} />;
    case "Entypo":
      return <Entypo name={name} style={style} color={color} size={size} />;
    case "EvilIcons":
      return <EvilIcons name={name} style={style} color={color} size={size} />;
    case "Feather":
      return <Feather name={name} style={style} color={color} size={size} />;
    case "FontAwesome":
      return (
        <FontAwesome name={name} style={style} color={color} size={size} />
      );
    case "FontAwesome5":
      return (
        <FontAwesome5 name={name} style={style} color={color} size={size} />
      );
    case "Fontisto":
      return <Fontisto name={name} style={style} color={color} size={size} />;
    case "Foundation":
      return <Foundation name={name} style={style} color={color} size={size} />;
    case "Ionicons":
      return <Ionicons name={name} style={style} color={color} size={size} />;
    case "Octicons":
      return <Octicons name={name} style={style} color={color} size={size} />;
    case "Zocial":
      return <Zocial name={name} style={style} color={color} size={size} />;
    case "SimpleLineIcons":
      return (
        <SimpleLineIcons name={name} style={style} color={color} size={size} />
      );
    case "MaterialCommunityIcon":
      return (
        <MaterialCommunityIcons
          name={name}
          style={style}
          color={color}
          size={size}
        />
      );
    default:
      return (
        <MaterialIcons name={name} style={style} color={color} size={size} />
      );
  }
};

const Icon: React.FC<IconProps> = ({
  type,
  name,
  style,
  color = theme.colors.bg.primary,
  size = theme.spacing.sixteen,
}) => {
  return renderIcon({ type, name, style, color, size });
};

export default Icon;
