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
import AppNavigator from "./src/infrastructure/navigation/app.navigator";
import { RestaurantsContextProvider } from "./src/contexts/restaurants.context";
import { LocationContextProvider } from "./src/contexts/location.context";
import { FavoritesContextProvider } from "./src/contexts/favorites.context";
import { AuthenticationContextProvider } from "./src/contexts/authentication.context";
import { theme } from "./src/infrastructure/theme/helpers";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "./src/utils/firebase/firebase.config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Spectral_400Regular,
    Assistant_400Regular,
  });
  return fontsLoaded ? (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <AppNavigator />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  ) : (
    <ActivityIndicator size="large" color="#03F7EB" />
  );
};

export default App;
