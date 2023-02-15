import styled from "styled-components/native";
import { theme } from "infrastructure/theme/theme";

export const Image = styled.Image`
  border-radius: ${theme.spacing.sm};
  width: 90px;
  height: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.sm};
`;

export const Card = styled.View`
  padding: ${theme.spacing.sm};
  width: 110px;
  height: ${theme.spacing.xl};
  max-width: ${theme.spacing.xl};
  align-items: center;
  background-color: ${theme.colors.turquoise};
`;

export const Title = styled.Text`
  color: ${theme.colors.turquoise};
  flex-wrap: wrap;
  flex: 1;
`;

export const FavoritesCard = styled.View`
  padding: ${theme.spacing.sm};
  width: 110px;
  height: ${theme.spacing.xl};
  max-width: ${theme.spacing.xl};
  align-items: center;
`;

export const FavoritesCardImage = styled.Image`
  border-radius: ${theme.spacing.md};
  width: 90px;
  height: 90px;
  margin-bottom: ${theme.spacing.sm};
`;

export const TitleContainer = styled.Text`
  width: 90px;
  position: absolute;
  top: 33%;
  background-color: ${theme.colors.turquoise};
  opacity: 0.9;
  text-align: center;
  flex-direction: row;
`;
