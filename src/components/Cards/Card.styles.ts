import styled from "styled-components/native";
import { colors, sizes, spacing } from "../../infrastructure/theme";
import { theme } from "../../infrastructure/theme/helpers";

export const Image = styled.Image`
  border-radius: ${spacing.md};
  width: 90px;
  height: ${sizes.xxl}px;
  margin-bottom: ${sizes.md}px;
`;

export const Card = styled.View`
  padding: ${spacing.md};
  width: 110px;
  height: ${sizes.xxxl}px;
  max-width: ${sizes.xxxl}px;
  align-items: center;
  background-color: ${colors.bg.primary};
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.body}
  font-size: ${theme.fontSizes.caption}
  color: ${colors.text.primary};
`;
