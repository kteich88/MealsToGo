import React, { createContext, ReactNode, useEffect, useState } from "react";
import {
  locationRequest,
  locationTransform,
} from "../services/mocks/locations/locations.service";
import { Location } from "../services/types/location.types";

interface LocationContext {
  location: Location | null;
  keyword: string;
  isLoading: boolean;
  error: string | null;
  search: () => void;
}

export const LocationContext = createContext<LocationContext>(
  {} as LocationContext,
);

export const LocationContextProvider: React.FC = ({ children }) => {
  const [keyword, setKeyword] = useState<string>("");
  const [location, setLocation] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onSearch = () => {
    setIsLoading(true);
    setKeyword(keyword);
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  // useEffect(() => {
  //   onSearch();
  // }, []);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
