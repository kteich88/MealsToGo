import { ImageBackground } from "react-native";
import { List } from "react-native-paper";
import styled from "styled-components/native";
import { theme } from "infrastructure/theme";

export const FavoritesContainer = styled(List.Section)`
  margin: ${theme.spacing.xs};
`;

export const FavoritesItem = styled(List.Item)`
  padding: ${theme.spacing.md};
  margin: ${theme.spacing.xs};
`;

export const BackgroundImage = styled(ImageBackground).attrs({
  source: require("assets/images/backgrounds/pusheen-favorites.png"),
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
  margin-top: ${theme.spacing.xl}};
  padding: ${theme.spacing.xl}
  color: ${theme.colors.turquoise};
  flex-wrap: wrap;
  flex: 1;
`;
