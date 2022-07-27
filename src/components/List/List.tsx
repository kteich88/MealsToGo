import React from "react";
import Restaurant from "../Cards/Restaurant/Restaurant";
import { FlatList } from "react-native";

interface ListProps {
  // Add props here
}

export const List: React.FC<ListProps> = () => {
  return (
    <FlatList
      data={[
        { name: "1" },
        { name: "2" },
        { name: "3" },
        { name: "4" },
        { name: "5" },
      ]}
      renderItem={() => (
        <Restaurant
          name={"Good Eats"}
          photos={[
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
          ]}
          address={"123 Street Road, City, ST 12345"}
          isOpenNow={true}
          rating={4}
          isClosedTemporarily={false}
        />
      )}
      keyExtractor={(item) => item.name}
    />
  );
};

export default List;
