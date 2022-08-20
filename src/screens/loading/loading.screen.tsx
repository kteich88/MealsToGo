import React from "react";
import { View } from "react-native";
import { styles } from "./loading.styles";
import LottieView from "lottie-react-native";

interface LoadingScreenProps {
  imageSrc: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ imageSrc }) => {
  const source = require(imageSrc);
  return (
    <View style={styles.animationWrapper}>
      <LottieView
        key="animation"
        autoPlay
        loop
        resizeMode="center"
        source={source}
      />
    </View>
  );
};

export default LoadingScreen;
