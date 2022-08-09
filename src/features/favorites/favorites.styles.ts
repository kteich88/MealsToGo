import { ImageBackground } from "react-native";
import { List } from "react-native-paper";
import styled from "styled-components/native";
import { spacing } from "../../infrastructure/theme";

export const FavoritesContainer = styled(List.Section)`
  margin: ${spacing.xs};
`;

export const FavoritesItem = styled(List.Item)`
  padding: ${spacing.lg};
  margin: ${spacing.xs};
`;

export const BackgroundImage = styled(ImageBackground).attrs({
  source: require("../../../assets/pusheen-favorites.png"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
