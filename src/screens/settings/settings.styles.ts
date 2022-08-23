import { StatusBar, Text } from "react-native";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";
import { theme } from "infrastructure/theme";

export const AvatarContainer = styled.View`
  align-items: center;
  padding: ${theme.spacing.four};
  margin: ${theme.spacing.thirtyTwo} ${theme.spacing.thirtyTwo}
    ${theme.spacing.zero} ${theme.spacing.thirtyTwo};
`;

export const AvatarImage = styled(Avatar.Image).attrs({
  source: require("../../../assets/pusheen-rice.gif"),
  size: theme.spacing.oneTwentyEight,
})`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const Email = styled(Text)`
  font-size: ${theme.fontSizes.button};
  font-family: ${theme.fonts.heading};
  margin-top: ${theme.spacing.sixteen};
`;

export const SettingsContainer = styled.View`
  padding: ${theme.spacing.eight};
`;

export const SettingsItem = styled(List.Item)`
  padding: ${theme.spacing.sixteen};
`;
