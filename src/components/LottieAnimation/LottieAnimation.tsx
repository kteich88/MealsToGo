import React from "react";
import LottieView from "lottie-react-native";
import { ImageStyle, StyleProp, View } from "react-native";

interface LottieAnimationProps {
  source: string;
  styles?: StyleProp<ImageStyle>;
}

const LottieAnimation = ({ source, styles }: LottieAnimationProps) => {
  return (
    <View style={[styles]}>
      <LottieView
        key="animation"
        autoPlay
        loop
        resizeMode="cover"
        testID="animation"
        source={source}
      />
    </View>
  );
};

export default LottieAnimation;
