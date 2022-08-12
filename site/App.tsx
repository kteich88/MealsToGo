import React from "react";
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
import { LoadingScreen } from "./src/features/loading/loading.screen";

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
    <LoadingScreen />
  );
};

export default App;
