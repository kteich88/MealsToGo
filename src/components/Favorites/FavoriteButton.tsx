import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FavoritesContext } from "../../contexts/favorites.context";
import { colors, sizes } from "../../infrastructure/theme";
import { Favorite } from "./Favorite.styles";
import { TransformedRestaurantDataResults } from "../../services/types/restaurant.types";

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
        size={sizes.xl}
        color={isFavorite ? colors.ui.error : colors.ui.quaternary}
      />
    </Favorite>
  );
};

export default FavoriteButton;
