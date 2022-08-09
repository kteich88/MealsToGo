import React, { useContext, useState } from "react";
import {
  BackgroundImage,
  AuthContainer,
  AuthInput,
  AuthenticationButton,
  BackButton,
  ImageOverlay,
  ErrorMessage,
} from "./index.styles";
import { AuthenticationContext } from "../../contexts/authentication.context";
import { ActivityIndicator } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface LoginScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);
  return (
    <BackgroundImage>
      <ImageOverlay />
      {isLoading ? (
        <ActivityIndicator animating={true} size="large" color="#03F7EB" />
      ) : (
        <>
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

            <AuthenticationButton
              icon="login"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthenticationButton>
          </AuthContainer>
          <BackButton mode="contained" onPress={() => navigation.goBack()}>
            Back
          </BackButton>
        </>
      )}
    </BackgroundImage>
  );
};
