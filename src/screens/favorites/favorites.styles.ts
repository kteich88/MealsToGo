import { ImageBackground } from "react-native";
import { List } from "react-native-paper";
import styled from "styled-components/native";
import { theme } from "infrastructure/theme";

export const FavoritesContainer = styled(List.Section)`
  margin: ${theme.spacing.zero};
`;

export const FavoritesItem = styled(List.Item)`
  padding: ${theme.spacing.sixteen};
  margin: ${theme.spacing.zero};
`;

export const BackgroundImage = styled(ImageBackground).attrs({
  source: require("assets/backgrounds/pusheen-favorites.png"),
})`
  flex: 1;
  align-items: center;
`;

export const ImageOverlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.35);
`;

export const Title = styled.Text`
  margin-top: ${theme.spacing.oneTwentyEight}};
  padding: ${theme.spacing.sixtyFour}
  font-family: ${theme.fonts.monospace};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.title};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  flex: 1;
`;
