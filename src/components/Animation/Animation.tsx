import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import { styles } from "./Animation.styles";

const Animation: React.FC = () => {
  return (
    <View style={styles.animationWrapper}>
      <LottieView
        key="animation"
        autoPlay
        loop
        resizeMode="cover"
        source={require("assets/lottie/watermelon.json")}
      />
    </View>
  );
};

export default Animation;
