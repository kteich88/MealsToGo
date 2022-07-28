import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { lineHeights, spacing } from "../../../infrastructure/theme/spacing";
import { colors } from "../../../infrastructure/theme/colors";
import { theme } from "../../../infrastructure/theme/helpers";

export const RestaurantCard = styled(Card)`
  background-color: white;
  margin: ${spacing.xxs} ${spacing.sm} ${spacing.xl} ${spacing.sm};
`;

export const CoverImage = styled(Card.Cover)`
  padding: ${spacing.lg};
  background-color: ${colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${spacing.lg};
  lineheights: ${lineHeights.copy};
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.heading}
  font-size: ${theme.fontSizes.title}
  color: ${colors.text.primary};
`;

export const RatingsContainer = styled.View`
  padding: ${spacing.xxs} ${spacing.lg};
  align-items: space-between;
  flex-direction: row;
  justify-content: space-between;
`;

export const Address = styled.Text`
  font-family: ${theme.fonts.body}
  font-size: ${theme.fontSizes.body}
  color: ${colors.text.primary};
`;
