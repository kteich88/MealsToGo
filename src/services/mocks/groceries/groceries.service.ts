import camelize from "camelize-ts";
import { GroceryListItem } from "../../../utils/types/grocery.types";
import {
  RestaurantData,
  RestaurantDataResults,
  TransformedRestaurantDataResults,
} from "../../types/restaurant.types";
import { mockImages } from "../restaurants/restaurants.mock";

export const groceryListRequest = (grocery: string) => {
  try {
    // search grocery term and return related terms in alpha order
  } catch (error) {
    // error
  }
  return;
};

export const transformData = async (promise: RestaurantData) => {
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
