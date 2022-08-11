import React from "react";
import LottieView from "lottie-react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  useFonts,
  Poppins_400Regular,
  Spectral_400Regular,
  Assistant_400Regular,
} from "@expo-google-fonts/dev";
import { ThemeProvider } from "styled-components/native";
import AppNavigator from "./src/infrastructure/navigation/app.navigator";
import { theme } from "./src/infrastructure/theme/helpers";

export const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Spectral_400Regular,
    Assistant_400Regular,
  });
  return fontsLoaded ? (
    <>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  ) : (
    <LottieView
      key="animation"
      autoPlay
      loop
      resizeMode="cover"
      source={require("./assets/lottie/groceries.json")}
    />
  );
};

export default App;
