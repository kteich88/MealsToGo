import React, { createContext, useState } from "react";

interface FavoritesContext {
  favorites: string[];
  addToFavorites: (restaurant: string) => void;
  removeFromFavorites: (restaurant: string) => void;
}

export const FavoritesContext = createContext<FavoritesContext>(
  {} as FavoritesContext,
);

export const FavoritesContextProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const addToFavorites = (restaurant: string) => {
    setFavorites([...favorites, restaurant]);
  };

  const removeFromFavorites = (restaurant: string) => {
    setFavorites(favorites.filter((item) => item !== restaurant));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
