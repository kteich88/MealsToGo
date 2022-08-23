import Icon, { IconProps } from "components/Icon/Icon";
import React from "react";
import { TouchableOpacity } from "react-native";

interface ListItemProps {
  data: any;
}

const ListItem: React.FC<ListItemProps> = ({ data }) => {
  const { icon, name, color, style, item } = data;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Recipe Details", { item })}
    >
      <Icon color={theme.colors.ui.error} icon="heart" name={undefined} />
    </TouchableOpacity>
  );
};

export default ListItem;
