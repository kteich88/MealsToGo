import camelize from "camelize-ts";
import { RestaurantData } from "../../types/restaurant.types";
import { restaurantMocks, mockImages } from "../restaurants/restaurants.mock";

export const restaurantsRequest = (
  location: string = "37.7749295,-122.4194155",
) => {
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
  const mappedResults = results.map((restaurant: any) => {
    restaurant.photos = restaurant.photos.map(() => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((error) => {
    console.error(error);
  });
