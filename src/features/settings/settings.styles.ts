import { StatusBar, Text } from "react-native";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";
import { sizes, spacing } from "../../infrastructure/theme";
import { theme } from "../../infrastructure/theme/helpers";

export const AvatarContainer = styled.View`
  align-items: center;
  padding: ${spacing.sm};
  margin: ${spacing.xl} ${spacing.xl} ${spacing.xs} ${spacing.xl};
`;

export const AvatarImage = styled(Avatar.Image).attrs({
  source: require("../../../assets/pusheen-rice.gif"),
  size: sizes.xxxl,
})`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const Email = styled(Text)`
  font-size: ${theme.fontSizes.button};
  font-family: ${theme.fonts.heading};
  margin-top: ${spacing.lg};
`;

export const SettingsContainer = styled.View`
  padding: ${spacing.md};
`;

export const SettingsItem = styled(List.Item)`
  padding: ${spacing.lg};
`;
