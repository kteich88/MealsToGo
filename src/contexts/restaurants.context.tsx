import React, { useState, createContext, useEffect, useContext } from "react";
import {
  restaurantsRequest,
  transformRestaurantData,
} from "../services/mocks/restaurants/restaurants.service";
import { TransformedRestaurantDataResults } from "../services/types/restaurant.types";
import { LocationContext } from "./location.context";

interface RestaurantsContext {
  restaurants: TransformedRestaurantDataResults[];
  isLoading: boolean;
  error: string | null;
}

export const RestaurantsContext = createContext<RestaurantsContext>(
  {} as RestaurantsContext,
);

export const RestaurantsContextProvider: React.FC = ({ children }) => {
  const [restaurants, setRestaurants] = useState<
    TransformedRestaurantDataResults[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (restaurantLocation: string) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(restaurantLocation)
        .then(transformRestaurantData)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
