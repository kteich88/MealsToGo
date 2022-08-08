import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { colors, sizes } from "../../infrastructure/theme";
import { theme } from "../../infrastructure/theme/helpers";

export const Title = styled.Text`
  font-family: ${theme.fonts.heading}
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.body}
  color: ${colors.text.primary};
  margin-left: ${sizes.md}px;
`;

export const Favorite = styled(TouchableOpacity)`
  position: absolute;
  top: ${sizes.xl}px;
  right: ${sizes.xl}px;
  z-index: 9;
`;

export const FavoritesContainer = styled.View`
  padding: 0 ${sizes.md}px;
  margin: 0 ${sizes.md}px;
`;
