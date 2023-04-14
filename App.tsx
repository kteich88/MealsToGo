import React from "react";
import Router from "navigation/router";
import LottieAnimation from "components/LottieAnimation/LottieAnimation";
import firebase from "firebase/compat/app";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  useFonts,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
} from "@expo-google-fonts/manrope";
import { firebaseConfig } from "services/firebase/firebase.config";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { globalStyles } from "theme/global.styles";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const App = () => {
  const [fontsLoaded] = useFonts({
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
  });
  return fontsLoaded ? (
    <SafeAreaProvider>
      <Router />
      <ExpoStatusBar style="auto" />
    </SafeAreaProvider>
  ) : (
    <LottieAnimation
      source={"assets/lottie/loading.json"}
      styles={globalStyles.loading}
    />
  );
};

export default App;
