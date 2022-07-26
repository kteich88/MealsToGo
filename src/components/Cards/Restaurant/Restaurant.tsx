import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { spacing } from "../../../infrastructure/theme/spacing";
import { colors } from "../../../infrastructure/theme/colors";

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

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${spacing.lg};
  background-color: ${colors.bg.primary};
`;

const Title = styled.Text`
  padding: ${spacing.md};
  color: ${colors.text.primary};
`;

export const Restaurant: React.FC<RestaurantProps> = ({
  name = "Good Eats",
  // icon,
  photos = [
    "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  ],
  // address = "123 Street Road, City, ST 12345",
  // isOpenNow = true,
  // rating = 4,
  // isClosedTemporarily,
}) => {
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default Restaurant;
