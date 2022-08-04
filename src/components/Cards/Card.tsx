import React from "react";
import { RestaurantDataResultsPhotos } from "../../services/types/restaurant.types";
import { Card, Image, Title } from "./Card.styles";
import { Camelize } from "camelize-ts";

interface CompactCard {
  name: string;
  photos:
    | RestaurantDataResultsPhotos[]
    | Camelize<RestaurantDataResultsPhotos[]>;
}

const CompactCard: React.FC<CompactCard> = ({ name, photos }) => {
  return (
    <Card>
      <Image key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

export default CompactCard;
