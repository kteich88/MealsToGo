import React from "react";
import styled from "styled-components/native";
import { Rating } from "react-native-ratings";
import { Card } from "react-native-paper";
import { lineHeights, spacing } from "../../../infrastructure/theme/spacing";
import { colors } from "../../../infrastructure/theme/colors";
import { theme } from "../../../infrastructure/theme";
import Status from "../../Status/Status";

interface RestaurantProps {
  name: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
  closingTime: string;
  openingTime: string;
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
  lineheights: ${lineHeights.copy};
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
  photos,
  address,
  isOpenNow,
  rating,
  // isClosedTemporarily,
  closingTime,
  openingTime,
}) => {
  let status;
  isOpenNow ? (status = "open") : (status = "closed");
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
        <Status
          status={status}
          closingTime={closingTime}
          openingTime={openingTime}
        />
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default Restaurant;
