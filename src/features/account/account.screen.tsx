import React from "react";
import {
  BackgroundImage,
  AuthContainer,
  AuthButton,
  Title,
} from "./index.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <BackgroundImage>
      <Title>Good Eats</Title>
      <AuthContainer>
        <AuthButton
          icon="login"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <AuthButton
          icon="lock"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AuthContainer>
    </BackgroundImage>
  );
};
