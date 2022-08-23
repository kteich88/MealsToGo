import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  useFonts,
  Poppins_400Regular,
  Spectral_400Regular,
  Assistant_400Regular,
} from "@expo-google-fonts/dev";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "services/firebase/firebase.config";
import { ThemeProvider } from "styled-components/native";
import AppNavigator from "./src/infrastructure/navigation/app.navigator";
import LoadingScreen from "screens/loading/loading.screen";
import { AuthenticationContextProvider } from "contexts/authentication.context";
import { theme } from "infrastructure/theme";

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
          <AppNavigator />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  ) : (
    <LoadingScreen />
  );
};

export default App;
