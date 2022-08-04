import React, { createContext, useState } from "react";
import { TransformedRestaurantDataResults } from "../services/types/restaurant.types";

interface FavoritesContext {
  favorites: TransformedRestaurantDataResults[];
  addToFavorites: (restaurant: TransformedRestaurantDataResults) => void;
  removeFromFavorites: (restaurant: TransformedRestaurantDataResults) => void;
}

export const FavoritesContext = createContext<FavoritesContext>(
  {} as FavoritesContext,
);

export const FavoritesContextProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<
    TransformedRestaurantDataResults[]
  >([]);

  const addToFavorites = (restaurant: TransformedRestaurantDataResults) => {
    setFavorites([...favorites, restaurant]);
  };

  const removeFromFavorites = (
    restaurant: TransformedRestaurantDataResults,
  ) => {
    setFavorites(favorites.filter((item) => item.name !== restaurant.name));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
