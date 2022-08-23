import React, { ReactNode } from "react";
import Restaurant from "../Cards/Restaurant/Restaurant";
import { FlatList, TouchableOpacity } from "react-native";
import { TransformedRestaurantDataResults } from "../../services/types/restaurant.types";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

interface ListProps {
  data: TransformedRestaurantDataResults[];
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
