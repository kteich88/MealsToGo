import styled from "styled-components/native";
import { theme } from "infrastructure/theme";

export const Image = styled.Image`
  border-radius: ${theme.spacing.eight};
  width: 90px;
  height: ${theme.spacing.sixtyFour};
  margin-bottom: ${theme.spacing.eight};
`;

export const Card = styled.View`
  padding: ${theme.spacing.eight};
  width: 110px;
  height: ${theme.spacing.oneTwentyEight};
  max-width: ${theme.spacing.oneTwentyEight};
  align-items: center;
  background-color: ${theme.colors.bg.primary};
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.monospace};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.caption};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  flex: 1;
`;

export const FavoritesCard = styled.View`
  padding: ${theme.spacing.eight};
  width: 110px;
  height: ${theme.spacing.oneTwentyEight};
  max-width: ${theme.spacing.oneTwentyEight};
  align-items: center;
`;

export const FavoritesCardImage = styled.Image`
  border-radius: ${theme.spacing.sixteen};
  width: 90px;
  height: 90px;
  margin-bottom: ${theme.spacing.eight};
`;

export const TitleContainer = styled.Text`
  width: 90px;
  position: absolute;
  top: 33%;
  background-color: ${theme.colors.bg.primary};
  opacity: 0.9;
  text-align: center;
  flex-direction: row;
`;
