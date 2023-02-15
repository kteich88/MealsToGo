import React from "react";
import { ScrollView, Pressable } from "react-native";
import CompactCard from "../Cards/Card";
import { FavoritesContainer, Title } from "./Favorite.styles";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
// import { TransformedRestaurantDataResults } from "services/types/restaurant.types";

interface FavoritesProps {
  // favorites: TransformedRestaurantDataResults[];
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Favorites: React.FC<FavoritesProps> = ({ favorites, navigation }) => {
  const isFavorite = favorites.length >= 1;
  if (!isFavorite) {
    return null;
  }
  return (
    <FavoritesContainer>
      <Title>Favorites</Title>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          return (
            <Pressable
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
                isFavorite={isFavorite}
              />
            </Pressable>
          );
        })}
      </ScrollView>
    </FavoritesContainer>
  );
};

export default Favorites;
