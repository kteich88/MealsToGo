import antwerp from "./restaurants/antwerp.json";
import chicago from "./restaurants/chicago.json";
import toronto from "./restaurants/toronto.json";
import san_francisco from "./restaurants/san_francisco.json";
import { RestaurantDataType } from "../types/restaurant.types";
import Restaurant from "../../components/Cards/Restaurant/Restaurant";

// export const getRestaurantMockData = (location: string): RestaurantDataType => {
//   switch (location) {
//     case "51.219448,4.402464":
//       return antwerp;
//     case "43.653225,-79.383186":
//       return toronto;
//     case "41.878113,-87.629799":
//       return chicago;
//     case "37.7749295,-122.4194155":
//       return san_francisco;
//     default:
//       return {};
//   }
// };

export const mocks: Record<string, RestaurantDataType> = {
  "51.219448,4.402464": antwerp,
  "43.653225,-79.383186": toronto,
  "41.878113,-87.629799": chicago,
  "37.7749295,-122.4194155": san_francisco,
};

export const mockImages = [
  "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-600x750.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table-600x400.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-600x400.jpg",
];
