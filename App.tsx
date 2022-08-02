import React from "react";
import { ActivityIndicator } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Poppins_400Regular,
  Spectral_400Regular,
  Assistant_400Regular,
} from "@expo-google-fonts/dev";
import Navigation from "./src/components/Navigation/Navigation";
import { RestaurantsContextProvider } from "./src/contexts/restaurants.context";
import { theme } from "./src/infrastructure/theme/helpers";
import { LocationContextProvider } from "./src/contexts/location.context";

export const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Spectral_400Regular,
    Assistant_400Regular,
  });
  return fontsLoaded ? (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  ) : (
    <ActivityIndicator size="large" color="#03F7EB" />
  );
};

export default App;
