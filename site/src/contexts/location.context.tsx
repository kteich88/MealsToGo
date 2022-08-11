import React, { createContext, useEffect, useState } from "react";
import {
  locationRequest,
  transformLocationData,
} from "../services/mocks/locations/locations.service";
import { TransformedLocation } from "../services/types/location.types";

interface LocationContext {
  location: TransformedLocation;
  keyword: string;
  isLoading: boolean;
  error: string | null;
  search: (searchKeyword: string) => void;
}

export const LocationContext = createContext<LocationContext>(
  {} as LocationContext,
);

export const LocationContextProvider: React.FC = ({ children }) => {
  const [keyword, setKeyword] = useState<string>("San Francisco");
  const [location, setLocation] = useState<TransformedLocation>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onSearch = (searchKeyword: string) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(transformLocationData)
      .then((result) => {
        setError(null);
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        keyword,
        search: (searchKeyword) => onSearch(searchKeyword),
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
