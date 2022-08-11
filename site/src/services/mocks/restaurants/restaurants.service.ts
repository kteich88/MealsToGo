import camelize from "camelize-ts";
import {
  RestaurantData,
  RestaurantDataResults,
  TransformedRestaurantDataResults,
} from "../../types/restaurant.types";
import { restaurantMocks, mockImages } from "../restaurants/restaurants.mock";

export const restaurantsRequest = (
  location: string,
): Promise<RestaurantData> => {
  const promise: Promise<RestaurantData> = new Promise((resolve, reject) => {
    const mock = restaurantMocks[location];
    if (!mock) {
      reject("these are not the mocks you are looking for...");
    }
    resolve(mock);
  });
  return promise;
};

export const transformRestaurantData = async (promise: RestaurantData) => {
  const results: RestaurantDataResults[] = promise.results;
  const transformedRestaurantData: TransformedRestaurantDataResults[] =
    results.map((restaurant: RestaurantDataResults) => {
      const camelizedRestaurants = camelize(restaurant);
      const photo =
        mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];

      return {
        ...camelizedRestaurants,
        photo: photo,
        address: restaurant.vicinity,
        isOpenNow:
          restaurant.opening_hours && restaurant.opening_hours.open_now,
        isClosedTemporarily:
          restaurant.business_status === "CLOSED_TEMPORARILY",
      };
    });

  return transformedRestaurantData;
};
