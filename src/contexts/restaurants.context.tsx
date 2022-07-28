import React, { useState, createContext, useEffect } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "../services/mocks/restaurants/restaurants.service";

interface RestaurantsContext {
  restaurants: any;
  isLoading: boolean;
  error: string | null;
}

export const RestaurantsContext = createContext<RestaurantsContext>(
  {} as RestaurantsContext,
);

export const RestaurantsContextProvider: React.FC = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const retrieveRestaurants = (location: string) => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(location)
        .then(restaurantsTransform)
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
