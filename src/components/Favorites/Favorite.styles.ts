import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { colors, spacing } from "../../infrastructure/theme";
import { theme } from "../../infrastructure/theme/helpers";

export const Title = styled.Text`
  font-family: ${theme.fonts.heading}
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.body}
  color: ${colors.text.primary};
  margin-left: ${spacing.md};
`;

export const Favorite = styled(TouchableOpacity)`
  position: absolute;
  top: ${spacing.xl};
  right: ${spacing.xl};
  z-index: 9;
`;

export const FavoritesContainer = styled.View`
  padding: ${spacing.xs} ${spacing.md};
  margin: ${spacing.xs} ${spacing.md};
`;
