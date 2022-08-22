import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { styles } from "./loading.styles";

const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.animationWrapper}>
      <LottieView
        key="animation"
        autoPlay
        loop
        resizeMode="center"
        source={require("assets/lottie/groceries.json")}
      />
    </View>
  );
};

export default LoadingScreen;
