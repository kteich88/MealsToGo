import React from "react";
import { ScrollView } from "react-native";
import CompactCard from "../Cards/Card";
import {
  FavoritesContainer,
  FavoritesCardContainer,
  Title,
} from "./Favorite.styles";

const Favorites = ({ favorites, navigation }) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <FavoritesContainer>
      <Title>Favorites</Title>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          return (
            <FavoritesCardContainer
              key={restaurant.placeId}
              onPress={() =>
                navigation.navigate("Restaurant Details", {
                  restaurant,
                })
              }
            >
              <CompactCard
                key={restaurant.name}
                name={restaurant.name}
                photo={restaurant.photo}
              />
            </FavoritesCardContainer>
          );
        })}
      </ScrollView>
    </FavoritesContainer>
  );
};

export default Favorites;
