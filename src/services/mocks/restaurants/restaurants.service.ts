import camelize from "camelize-ts";
import {
  RestaurantData,
  RestaurantDataResults,
} from "../../types/restaurant.types";
import { restaurantMocks, mockImages } from "../restaurants/restaurants.mock";

export const restaurantsRequest = (location: string) => {
  const promise: Promise<RestaurantData> = new Promise((resolve, reject) => {
    const mock = restaurantMocks[location];
    if (!mock) {
      reject("these are not the mocks you are looking for...");
    }
    resolve(mock);
  });
  return promise;
};

export const restaurantsTransform = async (promise: RestaurantData) => {
  const results = promise.results;
  const mappedResults: RestaurantDataResults[] = results.map(
    (restaurant: any) => {
      restaurant.photos = restaurant.photos.map(() => {
        return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
      });
      return {
        ...restaurant,
        address: restaurant.vicinity,
        isOpenNow:
          restaurant.opening_hours && restaurant.opening_hours.open_now,
        isClosedTemporarily:
          restaurant.business_status === "CLOSED_TEMPORARILY",
      };
    },
  );
  return camelize(mappedResults);
};
