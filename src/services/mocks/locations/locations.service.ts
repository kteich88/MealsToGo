import camelize from "camelize-ts";
import { LocationData } from "../../types/location.types";
import { locations } from "./locations.mock";

export const locationRequest = (searchTerm: string) => {
  const location = searchTerm.trim();
  const promise: Promise<LocationData> = new Promise((resolve, reject) => {
    const mock = locations[location];
    if (!mock) {
      reject(
        "not all those who wander are lost, but your data will not be found here",
      );
    }
    resolve(mock);
  });
  return promise;
};

export const locationTransform = (result: LocationData) => {
  const formattedResponse = camelize(result);
  const { geometry } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
