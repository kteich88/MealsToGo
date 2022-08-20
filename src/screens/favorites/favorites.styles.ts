import { ImageBackground } from "react-native";
import { List } from "react-native-paper";
import styled from "styled-components/native";
import { colors, spacing } from "../../infrastructure/theme";
import { theme } from "../../infrastructure/theme/helpers";

export const FavoritesContainer = styled(List.Section)`
  margin: ${spacing.xs};
`;

export const FavoritesItem = styled(List.Item)`
  padding: ${spacing.lg};
  margin: ${spacing.xs};
`;

export const BackgroundImage = styled(ImageBackground).attrs({
  source: require("../../../assets/backgrounds/pusheen-favorites.png"),
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
  margin-top: ${spacing.xxxl};
  padding: ${spacing.xxl}
  font-family: ${theme.fonts.monospace};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.title};
  color: ${colors.text.primary};
  flex-wrap: wrap;
  flex: 1;
`;
