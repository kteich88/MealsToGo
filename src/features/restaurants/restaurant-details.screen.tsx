import React from "react";
import { SafeArea } from "../../utils/SafeArea";
import Restaurant from "../../components/Cards/Restaurant/Restaurant";

interface RestaurantDetailsScreenProps {
  route: any;
}

export const RestaurantDetailsScreen: React.FC<
  RestaurantDetailsScreenProps
> = ({ route }) => {
  const { restaurant } = route.params;
  console.log(restaurant);
  return (
    <SafeArea>
      <Restaurant
        name={restaurant.name}
        photos={restaurant.photos}
        address={restaurant.address}
        isOpenNow={restaurant.isOpenNow}
        rating={restaurant.rating}
        isClosedTemporarily={restaurant.isClosedTemporarily}
      />
    </SafeArea>
  );
};
