import React, { ReactNode } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

interface ListProps {
  data: [];
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  children?: ReactNode;
}

const List: React.FC<ListProps> = ({ data, navigation, children }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Recipe Details", { recipe: item })
          }
        >
          {children}
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.name}
    />
  );
};

export default List;
