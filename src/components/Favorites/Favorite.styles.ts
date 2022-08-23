import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { theme } from "infrastructure/theme";

export const Title = styled.Text`
  font-family: ${theme.fonts.heading}
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.body}
  color: ${theme.colors.text.primary};
  margin-left: ${theme.spacing.eight};
`;

export const Favorite = styled(TouchableOpacity)`
  position: absolute;
  top: ${theme.spacing.thirtyTwo};
  right: ${theme.spacing.thirtyTwo};
  z-index: 9;
`;

export const FavoritesContainer = styled.View`
  padding: ${theme.spacing.zero} ${theme.spacing.eight};
  margin: ${theme.spacing.zero} ${theme.spacing.eight};
`;
