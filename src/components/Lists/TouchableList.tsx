import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import Icon from "components/Icon/Icon";
import { DataType } from "types/types";

interface TouchableListProps {
  data: DataType[];
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const TouchableList: React.FC<TouchableListProps> = ({ data, navigation }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.title, { item: item })}
        >
          <Icon
            type={item.icon.type}
            name={item.icon.name}
            color={item.icon.color}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default TouchableList;
