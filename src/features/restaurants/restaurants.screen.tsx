import React from "react";
import Search from "../../components/Search/Search";
import List from "../../components/List/List";
import { RestaurantListContainer, SearchContainer } from "./restaurants.styles";
import { SafeArea } from "../../utils/SafeArea";

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
