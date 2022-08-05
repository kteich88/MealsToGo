import React from "react";
import {
  Card,
  Image,
  Title,
  FavoritesCard,
  TitleContainer,
  FavoritesCardImage,
} from "./Card.styles";

interface CompactCard {
  name: string;
  photo: string;
  isFavorite?: boolean;
}

const CompactCard: React.FC<CompactCard> = ({ name, photo, isFavorite }) => {
  return (
    <>
      {isFavorite ? (
        <FavoritesCard>
          <FavoritesCardImage key={name} source={{ uri: photo }} />
          <TitleContainer>
            <Title>{name}</Title>
          </TitleContainer>
        </FavoritesCard>
      ) : (
        <Card>
          <Image key={name} source={{ uri: photo }} />
          <Title>{name}</Title>
        </Card>
      )}
    </>
  );
};

export default CompactCard;
