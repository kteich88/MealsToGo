import React from "react";
import Restaurant from "../Cards/Restaurant/Restaurant";
import { FlatList, TouchableOpacity } from "react-native";
import { TransformedRestaurantDataResults } from "../../services/types/restaurant.types";

interface ListProps {
  data: TransformedRestaurantDataResults[];
  navigation;
}

const List: React.FC<ListProps> = ({ data, navigation }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Restaurant Details", { restaurant: item })
          }
        >
          <Restaurant restaurant={item} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.name}
    />
  );
};

export default List;
