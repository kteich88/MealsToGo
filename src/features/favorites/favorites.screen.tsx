import React, { useContext } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FavoritesContext } from "../../contexts/favorites.context";
import {
  BackgroundImage,
  FavoritesContainer,
  FavoritesItem,
} from "./favorites.styles";
import { List, Text } from "react-native-paper";
import { TransformedRestaurantDataResults } from "../../services/types/restaurant.types";
import { colors } from "../../infrastructure/theme";

interface FavoritesScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

export const FavoritesScreen: React.FC<FavoritesScreenProps> = ({
  navigation,
}) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    (favorites as TransformedRestaurantDataResults[]).map(
      (favorite: TransformedRestaurantDataResults) => {
        return (
          <FavoritesContainer>
            <FavoritesItem
              title={favorite.name}
              description={favorite.address}
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
      <Text>{`You have ${favorites.length} favorites.`}</Text>
    </BackgroundImage>
  );
};
