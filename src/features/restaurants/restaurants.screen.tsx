import React, { useContext } from "react";
import Search from "../../components/Search/Search";
import List from "../../components/List/List";
import {
  RestaurantListContainer,
  SearchContainer,
  Loading,
} from "./restaurants.styles";
import { SafeArea } from "../../utils/SafeArea";
import { RestaurantsContext } from "../../contexts/restaurants.context";

export const RestaurantsScreen = () => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading ? (
        <Loading size="large" color="#03F7EB" />
      ) : (
        <>
          <SearchContainer>
            <Search value={""} />
          </SearchContainer>
          <RestaurantListContainer>
            <List data={restaurants} />
          </RestaurantListContainer>
        </>
      )}
    </SafeArea>
  );
};
