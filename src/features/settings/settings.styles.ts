import { ImageBackground, Text } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
import { colors, spacing } from "../../infrastructure/theme";
import { theme } from "../../infrastructure/theme/helpers";

export const BackgroundImage = styled(ImageBackground).attrs({
  source: require("../../../assets/settings.jpeg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageOverlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const Title = styled(Text)`
  font-size: 30px;
  font-family: ${theme.fonts.body};
`;

export const SettingsContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.9);
  padding: ${spacing.md};
  margin-top: ${spacing.md};
  align-items: center;
  justify-content: center;
`;

export const LogOutButton = styled(Button).attrs({
  color: `${colors.brand.secondary}`,
})`
  padding: ${spacing.md};
  margin: ${spacing.lg};
`;
