import React, { useContext } from "react";
import { FavoritesContext } from "../../contexts/favorites.context";
import {
  BackgroundImage,
  FavoritesContainer,
  FavoritesItem,
  Title,
  ImageOverlay,
} from "./favorites.styles";
import { List } from "react-native-paper";
import { TransformedRestaurantDataResults } from "../../services/types/restaurant.types";
import { colors } from "../../infrastructure/theme";

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    (favorites as TransformedRestaurantDataResults[]).map(
      (favorite: TransformedRestaurantDataResults) => {
        return (
          <FavoritesContainer key={favorite.name}>
            <FavoritesItem
              title={favorite.name}
              description={favorite.address}
              // eslint-disable-next-line react/no-unstable-nested-components
              left={() => <List.Icon color={colors.ui.error} icon="heart" />}
              onPress={() =>
                navigation.navigate("Restaurant Details", {
                  favorite,
                })
              }
            />
          </FavoritesContainer>
        );
      },
    )
  ) : (
    <BackgroundImage>
      <ImageOverlay />
      <Title>{`You have ${favorites.length} favorites. But you can has this cupcake!`}</Title>
    </BackgroundImage>
  );
};
