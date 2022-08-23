import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { theme } from "infrastructure/theme";

export const RestaurantCard = styled(Card)`
  background-color: ${theme.colors.bg.primary};
  margin: ${theme.spacing.zero} ${theme.spacing.four} ${theme.spacing.thirtyTwo}
    ${theme.spacing.four};
`;

export const CoverImage = styled(Card.Cover)`
  padding: ${theme.spacing.sixteen};
  background-color: ${theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${theme.spacing.sixteen};
  lineheights: ${theme.lineHeights.copy};
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.title};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text.primary};
`;

export const RatingsContainer = styled.View`
  padding: ${theme.spacing.zero} ${theme.spacing.sixteen};
  align-items: space-between;
  flex-direction: row;
  justify-content: space-between;
`;

export const Address = styled.Text`
  font-family: ${theme.fonts.body}
  font-size: ${theme.fontSizes.body}
  color: ${theme.colors.text.primary};
`;
