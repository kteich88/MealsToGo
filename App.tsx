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
import AppNavigator from "./src/infrastructure/navigation/app.navigator";
import LoadingScreen from "screens/loading/loading.screen";
import { AuthenticationContextProvider } from "contexts/authentication.context";

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
      <AuthenticationContextProvider>
        <AppNavigator />
      </AuthenticationContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  ) : (
    <LoadingScreen />
  );
};

export default App;
