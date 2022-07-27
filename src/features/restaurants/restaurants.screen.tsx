import React from "react";
import Search from "../../components/Search/Search";
import List from "../../components/List/List";
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
      <List />
    </RestaurantListContainer>
  </SafeArea>
);
