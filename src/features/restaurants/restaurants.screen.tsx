import React, { useContext } from "react";
import Search from "../../components/Search/Search";
import List from "../../components/List/List";
import { RestaurantListContainer, SearchContainer } from "./restaurants.styles";
import { SafeArea } from "../../utils/SafeArea";
import { RestaurantsContext } from "../../contexts/restaurants.context";

export const RestaurantsScreen = () => {
  const { restaurants } = useContext(RestaurantsContext);
  console.log("BRUH", restaurants);
  return (
    <SafeArea>
      <SearchContainer>
        <Search value={""} />
      </SearchContainer>
      <RestaurantListContainer>
        <List data={restaurants} />
      </RestaurantListContainer>
    </SafeArea>
  );
};
