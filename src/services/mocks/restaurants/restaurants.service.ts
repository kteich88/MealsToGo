import camelize from "camelize-ts";
import { RestaurantDataType } from "../../types/restaurant.types";
import { mocks, mockImages } from "../helpers";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  const promise: Promise<RestaurantDataType> = new Promise(
    (resolve, reject) => {
      const mock = mocks[location];
      if (!mock) {
        reject("these are not the mocks you are looking for...");
      }
      resolve(mock);
    },
  );
  return promise;
};

const restaurantsTransform = (results: any) => {
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
