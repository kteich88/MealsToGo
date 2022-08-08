import React from "react";
import {
  BackgroundImage,
  AuthContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "./index.styles";
import LottieView from "lottie-react-native";

export const AccountScreen = ({ navigation }) => {
  return (
    <BackgroundImage>
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
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
