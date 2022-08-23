import React from "react";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { styles } from "./index.styles";
import { ImageBackground, Text, View } from "react-native";
import Button from "components/Button/Button";
import LottieView from "lottie-react-native";
import { theme } from "infrastructure/theme";
import Icon from "components/Icon/Icon";

interface AuthenticationScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const AuthenticationScreen: React.FC<AuthenticationScreenProps> = ({
  navigation,
}) => {
  return (
    <>
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="cover"
        source={require("assets/backgrounds/good-eats.jpeg")}
      >
        <View style={styles.overlay} />
        <View style={styles.animationWrapper}>
          <LottieView
            key="animation"
            autoPlay
            loop
            resizeMode="cover"
            source={require("assets/lottie/watermelon.json")}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Good Eats</Text>
          <Button
            text="Login"
            onPress={() => navigation.navigate("Login")}
            isDisabled={false}
          >
            <Icon icon={"MaterialIcons"} name={"login"} />
          </Button>
          <Button
            text="Register"
            onPress={() => navigation.navigate("Login")}
            isDisabled={false}
            customStyles={{
              backgroundColor: theme.colors.brand.secondary,
            }}
            children={<Icon icon={"Fontisto"} name={"locked"} />}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default AuthenticationScreen;
