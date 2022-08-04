import React from "react";
import { ScrollView } from "react-native";
import CompactCard from "../Cards/Card";
import { FavoriteBar, Favorites, Title } from "./Favorite.styles";

export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <Favorites>
      <Title>Favorites</Title>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          return (
            <FavoriteBar
              onPress={() =>
                onNavigate("Restaurant Details", {
                  restaurant,
                })
              }
            >
              <CompactCard
                key={restaurant.name}
                name={restaurant.name}
                photo={restaurant.photo}
              />
            </FavoriteBar>
          );
        })}
      </ScrollView>
    </Favorites>
  );
};
