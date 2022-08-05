import React from "react";
import { BackgroundImage, AuthContainer, AuthButton } from "./index.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <BackgroundImage>
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
