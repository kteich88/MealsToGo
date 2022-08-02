import React from "react";
import Restaurant from "../Cards/Restaurant/Restaurant";
import { FlatList } from "react-native";

interface ListProps {
  data: any;
}

export const List: React.FC<ListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Restaurant
          name={item.name}
          photos={item.photos}
          address={item.address}
          isOpenNow={item.isOpenNow}
          rating={4}
          isClosedTemporarily={item.isClosedTemporarily}
        />
      )}
      // keyExtractor={({ item }) => item.name}
    />
  );
};

export default List;
