import { Text } from "react-native";
import { Button, List } from "react-native-paper";
import styled from "styled-components/native";
import { colors, spacing } from "../../infrastructure/theme";
import { theme } from "../../infrastructure/theme/helpers";

export const SettingsItem = styled(List.Item)`
  padding: ${spacing.lg};
`;
export const AvatarContainer = styled.View`
  align-items: center;
  padding: ${spacing.sm};
  margin: ${spacing.xl} ${spacing.xl} ${spacing.xs} ${spacing.xl};
`;

export const Email = styled(Text)`
  font-size: ${theme.fontSizes.button};
  font-family: ${theme.fonts.heading};
  margin-top: ${spacing.lg};
`;

export const SettingsContainer = styled.View`
  padding: ${spacing.md};
`;

export const LogOutButton = styled(Button).attrs({
  color: `${colors.brand.secondary}`,
})`
  padding: ${spacing.md};
  margin: ${spacing.lg};
`;
