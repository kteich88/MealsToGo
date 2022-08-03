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

interface RestaurantsScreenProps {
  navigation: any;
}

export const RestaurantsScreen: React.FC<RestaurantsScreenProps> = ({
  navigation,
}) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading ? (
        <Loading size="large" color="#03F7EB" />
      ) : (
        <>
          <SearchContainer>
            <Search />
          </SearchContainer>

          <RestaurantListContainer>
            <List data={restaurants} navigation={navigation} />
          </RestaurantListContainer>
        </>
      )}
    </SafeArea>
  );
};
