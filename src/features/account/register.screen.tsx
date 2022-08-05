import React, { useContext, useState } from "react";
import { Text } from "react-native";
import {
  RegistrationBackgroundImage,
  AuthContainer,
  AuthInput,
  LoginAuthButton,
} from "./index.styles";
import { AuthenticationContext } from "../../contexts/authentication.context";

export const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);
  return (
    <RegistrationBackgroundImage>
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
          icon="lock"
          mode="contained"
          onPress={() => onLogin(email, password)}
        >
          Register
        </LoginAuthButton>
      </AuthContainer>
    </RegistrationBackgroundImage>
  );
};
