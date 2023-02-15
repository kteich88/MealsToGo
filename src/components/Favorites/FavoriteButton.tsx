import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FavoritesContext } from "contexts/favorites.context";
import { theme } from "infrastructure/theme/theme";
import { Favorite } from "./Favorite.styles";
import { TransformedRestaurantDataResults } from "services/types/restaurant.types";

interface FavoriteProps {
  restaurant: TransformedRestaurantDataResults;
}

const FavoriteButton: React.FC<FavoriteProps> = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  const isFavorite = favorites.find(
    (favorite) => favorite.name === restaurant.name,
  );

  return (
    <Favorite
      onPress={() => {
        isFavorite
          ? removeFromFavorites(restaurant)
          : addToFavorites(restaurant);
      }}
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={theme.size.lg}
        color={isFavorite ? theme.colors.errorRed : theme.colors.midnight}
      />
    </Favorite>
  );
};

export default FavoriteButton;
