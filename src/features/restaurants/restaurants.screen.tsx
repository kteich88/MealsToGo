import React, { useContext } from "react";
import Search from "../../components/Search/Search";
import List from "../../components/Lists/List";
import {
  RestaurantListContainer,
  SearchContainer,
  Loading,
} from "./restaurants.styles";
import { SafeArea } from "../../utils/SafeArea";
import { RestaurantsContext } from "../../contexts/restaurants.context";
import { FavoritesContext } from "../../contexts/favorites.context";
import Favorites from "../../components/Favorites/Favorites";

interface RestaurantsScreenProps {
  navigation;
}

export const RestaurantsScreen: React.FC<RestaurantsScreenProps> = ({
  navigation,
}) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);

  return (
    <SafeArea>
      {isLoading ? (
        <Loading size="large" color="#03F7EB" />
      ) : (
        <>
          <SearchContainer>
            <Search placeholder={"Search for location..."} />
          </SearchContainer>

          <Favorites favorites={favorites} navigation={navigation} />

          <RestaurantListContainer>
            <List data={restaurants} navigation={navigation} />
          </RestaurantListContainer>
        </>
      )}
    </SafeArea>
  );
};
