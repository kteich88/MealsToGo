import styled from "styled-components/native";
import { Pressable } from "react-native";
import { theme } from "infrastructure/theme";

export const Title = styled.Text`
  margin-left: ${theme.spacing.sm};
`;

export const Favorite = styled(Pressable)`
  position: absolute;
  top: ${theme.spacing.xl};
  right: ${theme.spacing.xl};
  z-index: 9;
`;

export const FavoritesContainer = styled.View`
  padding: 0 ${theme.spacing.sm};
  margin: 0 ${theme.spacing.sm};
`;
