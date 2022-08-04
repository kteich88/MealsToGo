import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { colors, sizes } from "../../infrastructure/theme";
import { theme } from "../../infrastructure/theme/helpers";
import CompactCard from "../Cards/Card";

export const Title = styled.Text`
  font-family: ${theme.fonts.heading}
  font-weight: bold;
  font-size: ${theme.fontSizes.body}
  color: ${colors.text.primary};
  margin-bottom: ${sizes.md}px;
`;

export const Favorite = styled(TouchableOpacity)`
  position: absolute;
  top: ${sizes.xl}px;
  right: ${sizes.xl}px;
  z-index: 9;
`;

export const FavoritesContainer = styled.View`
  padding: ${sizes.md}px;
  margin: 0 ${sizes.lg}px ${sizes.lg}px ${sizes.lg}px;
`;

export const FavoritesCardContainer = styled(TouchableOpacity)`
  margin-right: ${sizes.lg}px;
`;

export const FavoritesCard = styled(CompactCard)`
  width: ${sizes.xxxl}px;
  height: ${sizes.xxxl}px;
`;
