import React, { useContext } from "react";
import Search from "../../components/Search/Search";
import List from "../../components/Lists/List";
import {
  RestaurantListContainer,
  SearchContainer,
  Loading,
} from "./restaurants.styles";
import { SafeArea } from "../../components/SafeArea/SafeArea.styles";
import { RestaurantsContext } from "../../contexts/restaurants.context";
import { FavoritesContext } from "../../contexts/favorites.context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Favorites from "../../components/Favorites/Favorites";

interface RestaurantsScreenProps {
  navigation: NativeStackNavigationProp<any>;
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
