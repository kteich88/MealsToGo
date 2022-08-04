import React from "react";
import { View } from "react-native";
import { Rating } from "react-native-ratings";
import Status from "../../Status/Status";
import Favorite from "../../Favorites/Favorite";

import {
  Address,
  CoverImage,
  Info,
  RatingsContainer,
  RestaurantCard,
  Title,
} from "./Restaurant.styles";
import { TransformedRestaurantDataResults } from "../../../services/types/restaurant.types";

interface RestaurantProps {
  restaurant: TransformedRestaurantDataResults;
}

const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  const { name, photo, address, isOpenNow, rating, isClosedTemporarily } =
    restaurant;
  let status;
  isClosedTemporarily
    ? (status = "closedTemporarily")
    : isOpenNow
    ? (status = "open")
    : (status = "closed");
  return (
    <RestaurantCard elevation={5}>
      <View>
        <Favorite restaurant={restaurant} />
        <CoverImage key={name} source={{ uri: photo }} />
      </View>
      <RatingsContainer>
        <Status status={status} />
        {!isClosedTemporarily && (
          <Rating
            startingValue={rating}
            ratingCount={5}
            imageSize={30}
            readonly={true}
          />
        )}
      </RatingsContainer>
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default Restaurant;
