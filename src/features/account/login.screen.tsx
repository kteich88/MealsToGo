import React, { useContext, useState } from "react";
import {
  BackgroundImage,
  AuthContainer,
  AuthInput,
  LoginAuthButton,
  BackButton,
  ImageOverlay,
  ErrorMessage,
} from "./index.styles";
import { AuthenticationContext } from "../../contexts/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);
  return (
    <BackgroundImage>
      <ImageOverlay />
      <AuthContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginAuthButton
          icon="login"
          mode="contained"
          onPress={() => onLogin(email, password)}
        >
          Login
        </LoginAuthButton>
      </AuthContainer>
      <BackButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </BackButton>
    </BackgroundImage>
  );
};
