import { Button, TextInput } from "react-native-paper";
import { ImageBackground, Text } from "react-native";
import styled from "styled-components/native";
import { colors, spacing } from "../../infrastructure/theme";
import { theme } from "../../infrastructure/theme/helpers";

export const BackgroundImage = styled(ImageBackground).attrs({
  source: require("../../../assets/good-eats.jpeg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageOverlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.35);
`;

export const AuthContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.75);
  padding: ${spacing.md};
  margin-top: ${spacing.md};
`;

export const AuthButton = styled(Button).attrs({
  color: `${colors.brand.secondary}`,
})`
  padding: ${spacing.md};
  margin: ${spacing.lg};
`;

export const BackButton = styled(Button).attrs({
  color: `${colors.ui.primary}`,
})`
  padding: ${spacing.md};
  margin: ${spacing.lg};
  font-weight: ${theme.fontWeights.bold};
`;

export const AuthenticationButton = styled(Button).attrs({
  color: `${colors.brand.primary}`,
})`
  padding: ${spacing.md};
  margin: ${spacing.lg};
`;

export const AuthInput = styled(TextInput)`
  width: 250px;
  margin: ${spacing.lg};
`;

export const Title = styled(Text)`
  font-size: 30px;
  font-family: ${theme.fonts.body};
`;

export const ErrorMessage = styled(Text)`
  color: ${colors.text.error};
  font-family: ${theme.fonts.body};
  width: 250px;
  padding: ${spacing.sm};
  margin: ${spacing.md};
  flex-wrap: wrap;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${spacing.md};
`;
