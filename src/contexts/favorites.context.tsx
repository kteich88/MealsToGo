import React, { createContext, useState, useEffect } from "react";
import { TransformedRestaurantDataResults } from "../services/types/restaurant.types";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  const saveFavorites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favorites", jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favorites");
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  const addToFavorites = (restaurant: TransformedRestaurantDataResults) => {
    setFavorites([...favorites, restaurant]);
  };

  const removeFromFavorites = (
    restaurant: TransformedRestaurantDataResults,
  ) => {
    setFavorites(favorites.filter((item) => item.name !== restaurant.name));
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
