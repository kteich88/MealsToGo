import React, { useContext, useState } from "react";
import {
  BackgroundImage,
  AuthContainer,
  AuthInput,
  AuthenticationButton,
  BackButton,
  ImageOverlay,
  ErrorMessage,
} from "./index.styles";
import { AuthenticationContext } from "../../contexts/authentication.context";
import { ActivityIndicator } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LoadingScreen from "screens/loading/loading.screen";
import { ImageBackground, TextInput, View } from "react-native";
import { styles } from "./index.screen";

interface LoginScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("assets/good-eats.jpeg")}
    >
      <View style={styles.overlay} />
      {isLoading ? (
        <LoadingScreen imageSrc={""} />
      ) : (
        <>
          <View style={styles.container}>
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <TextInput
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(u) => setEmail(u)}
            />
            <TextInput
              value={password}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(p) => setPassword(p)}
            />
            <AuthenticationButton
              icon="login"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthenticationButton>
          </View>
          <BackButton mode="contained" onPress={() => navigation.goBack()}>
            Back
          </BackButton>
        </>
      )}
    </ImageBackground>
  );
};

export default LoginScreen;
