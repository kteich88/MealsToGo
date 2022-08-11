import React from "react";
import { List } from "react-native-paper";
import { Icon } from "../../utils/types/groceries.types";

interface ListIconProps {
  iconProps: Icon;
}

const ListIcon: React.FC<ListIconProps> = ({ iconProps }) => {
  const { icon, color, style } = iconProps;
  return <List.Icon icon={icon} color={color} style={style} />;
};

export default ListIcon;
