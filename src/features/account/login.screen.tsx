import React, { useContext, useState } from "react";
import { Text } from "react-native";
import {
  LoginBackgroundImage,
  AuthContainer,
  AuthInput,
  LoginAuthButton,
} from "./index.styles";
import { AuthenticationContext } from "../../contexts/authentication.context";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);
  return (
    <LoginBackgroundImage>
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
        {error && <Text>{error}</Text>}
        <LoginAuthButton
          icon="login"
          mode="contained"
          onPress={() => onLogin(email, password)}
        >
          Login
        </LoginAuthButton>
      </AuthContainer>
    </LoginBackgroundImage>
  );
};
