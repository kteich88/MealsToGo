import camelize, { Camelize } from "camelize-ts";
import {
  Geometry,
  LocationData,
  TransformedLocation,
} from "../../types/location.types";
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

export const transformLocationData = (
  promise: LocationData,
): TransformedLocation => {
  const results: Geometry[] = promise.results;
  const transformedLocationData: Camelize<Geometry>[] = results.map(
    (geometry) => {
      return camelize(geometry);
    },
  );
  const { geometry } = transformedLocationData[0];
  const { viewport } = geometry;
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport };
};
