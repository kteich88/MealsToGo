import React from "react";
import LottieView from "lottie-react-native";

export const LoadingScreen: React.FC = () => {
  return (
    <LottieView
      key="animation"
      autoPlay
      loop
      resizeMode="cover"
      source={require("./assets/lottie/groceries.json")}
    />
  );
};
