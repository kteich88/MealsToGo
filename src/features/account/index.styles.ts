import { Button, TextInput } from "react-native-paper";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import { colors, spacing } from "../../infrastructure/theme";

export const BackgroundImage = styled(ImageBackground).attrs({
  source: require("../../../assets/good-eats.jpeg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LoginBackgroundImage = styled(ImageBackground).attrs({
  source: require("../../../assets/macaroons-login.jpeg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const RegistrationBackgroundImage = styled(ImageBackground).attrs({
  source: require("../../../assets/macaroons-register.jpeg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
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

export const LoginAuthButton = styled(Button).attrs({
  color: `${colors.brand.primary}`,
})`
  padding: ${spacing.md};
  margin: ${spacing.lg};
`;

export const AuthInput = styled(TextInput)`
  width: 250px;
  margin: ${spacing.lg};
`;
