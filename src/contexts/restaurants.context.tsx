import { Camelize } from "camelize-ts";
import React, { useState, createContext, useEffect } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "../services/mocks/restaurants/restaurants.service";

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

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
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
    retrieveRestaurants();
  }, []);

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
