import React from "react";
import Restaurant from "../Cards/Restaurant/Restaurant";
import { FlatList, TouchableOpacity } from "react-native";

interface ListProps {
  data: any;
  navigation: any;
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
          <Restaurant
            key={item.name}
            name={item.name}
            photos={item.photos}
            address={item.address}
            isOpenNow={item.isOpenNow}
            rating={4}
            isClosedTemporarily={item.isClosedTemporarily}
          />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.name}
    />
  );
};

export default List;
