import styled from "styled-components/native";
import { colors, spacing } from "../../infrastructure/theme";
import { theme } from "../../infrastructure/theme/helpers";

export const Image = styled.Image`
  border-radius: ${spacing.md};
  width: 90px;
  height: ${spacing.xxl};
  margin-bottom: ${spacing.md};
`;

export const Card = styled.View`
  padding: ${spacing.md};
  width: 110px;
  height: ${spacing.xxxl};
  max-width: ${spacing.xxxl};
  align-items: center;
  background-color: ${colors.bg.primary};
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.monospace};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.caption};
  color: ${colors.text.primary};
  flex-wrap: wrap;
  flex: 1;
`;

export const FavoritesCard = styled.View`
  padding: ${spacing.md};
  width: 110px;
  height: ${spacing.xxxl};
  max-width: ${spacing.xxxl};
  align-items: center;
`;

export const FavoritesCardImage = styled.Image`
  border-radius: ${spacing.lg};
  width: 90px;
  height: 90px;
  margin-bottom: ${spacing.md};
`;

export const TitleContainer = styled.Text`
  width: 90px;
  position: absolute;
  top: 33%;
  background-color: ${colors.bg.primary};
  opacity: 0.9;
  text-align: center;
  flex-direction: row;
`;
