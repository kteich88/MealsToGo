import React from "react";
import styled from "styled-components/native";
import { Rating } from "react-native-ratings";
import { Card } from "react-native-paper";
import { spacing } from "../../../infrastructure/theme/spacing";
import { colors } from "../../../infrastructure/theme/colors";
import { theme } from "../../../infrastructure/theme";

interface RestaurantProps {
  name: string;
  icons: string[];
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
}

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const CoverImage = styled(Card.Cover)`
  padding: ${spacing.lg};
  background-color: ${colors.bg.primary};
`;

const Info = styled.View`
  padding: ${spacing.lg};
`;

const Title = styled.Text`
  font-family: ${theme.fonts.heading}
  font-size: ${theme.fontSizes.title}
  color: ${colors.text.primary};
`;

const RatingsContainer = styled.View`
  padding: ${spacing.xxs} ${spacing.lg};
  align-items: space-between;
  flex-direction: row;
  justify-content: space-between;
`;

const Address = styled.Text`
  font-family: ${theme.fonts.body}
  font-size: ${theme.fontSizes.body}
  color: ${colors.text.primary};
`;

export const Restaurant: React.FC<RestaurantProps> = ({
  name,
  // icon,
  photos,
  address,
  // isOpenNow,
  rating,
  // isClosedTemporarily,
}) => {
  return (
    <RestaurantCard elevation={5}>
      <CoverImage key={name} source={{ uri: photos[0] }} />
      <RatingsContainer>
        <Title>{name}</Title>
        <Rating
          startingValue={rating}
          ratingCount={5}
          imageSize={30}
          readonly={true}
        />
      </RatingsContainer>
      <Info>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default Restaurant;
