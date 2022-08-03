import React, { createContext, useEffect, useState } from "react";
import {
  locationRequest,
  locationTransform,
} from "../services/mocks/locations/locations.service";
import { TransformedLocation } from "../services/types/location.types";

interface LocationContext {
  location: TransformedLocation | null;
  keyword: string;
  isLoading: boolean;
  error: string | null;
  search: (searchKeyword: string) => void;
}

export const LocationContext = createContext<LocationContext>(
  {} as LocationContext,
);

export const LocationContextProvider: React.FC = ({ children }) => {
  const [keyword, setKeyword] = useState<string>("");
  const [location, setLocation] = useState<TransformedLocation | null>(null);
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
      .then(locationTransform)
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
