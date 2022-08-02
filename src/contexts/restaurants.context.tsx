import { Camelize } from "camelize-ts";
import React, { useState, createContext, useEffect, useContext } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "../services/mocks/restaurants/restaurants.service";
import { LocationContext } from "./location.context";

interface RestaurantsContext {
  restaurants: string | Camelize<any>;
  isLoading: boolean;
  error: string | null;
}

export const RestaurantsContext = createContext<RestaurantsContext>(
  {} as RestaurantsContext,
);

export const RestaurantsContextProvider: React.FC = ({ children }) => {
  const [restaurants, setRestaurants] = useState<string | Camelize<any>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (restaurantLocation: string) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(restaurantLocation)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
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
