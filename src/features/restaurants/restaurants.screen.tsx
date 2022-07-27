import React from "react";
import Search from "../../components/Search/Search";
import Restaurant from "../../components/Cards/Restaurant/Restaurant";
import {
  RestaurantListContainer,
  SafeArea,
  SearchContainer,
} from "./restaurants.styles";

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Search value={""} />
    </SearchContainer>
    <RestaurantListContainer>
      <Restaurant
        name={"Good Eats"}
        photos={[
          "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ]}
        address={"123 Street Road, City, ST 12345"}
        isOpenNow={true}
        rating={4}
        isClosedTemporarily={true}
      />
    </RestaurantListContainer>
  </SafeArea>
);
