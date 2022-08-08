import React, { createContext, useState, useEffect, useContext } from "react";
import { TransformedRestaurantDataResults } from "../services/types/restaurant.types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "./authentication.context";

interface FavoritesContext {
  favorites: TransformedRestaurantDataResults[];
  addToFavorites: (restaurant: TransformedRestaurantDataResults) => void;
  removeFromFavorites: (restaurant: TransformedRestaurantDataResults) => void;
}

export const FavoritesContext = createContext<FavoritesContext>(
  {} as FavoritesContext,
);

export const FavoritesContextProvider: React.FC = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favorites, setFavorites] = useState<
    TransformedRestaurantDataResults[]
  >([]);

  const saveFavorites = async (
    value: TransformedRestaurantDataResults[],
    userId: string,
  ) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${userId}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavorites = async (userId: string) => {
    try {
      const value = await AsyncStorage.getItem(`@favorites-${userId}`);
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log("Error Loading:", e);
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
    if (user) {
      loadFavorites(user.providerData[0].uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && favorites.length) {
      saveFavorites(favorites, user.providerData[0].uid);
    }
  }, [favorites, user]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
