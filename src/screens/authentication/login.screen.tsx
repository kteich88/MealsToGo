import React, { useContext, useState } from "react";
import { ImageBackground, Text, TextInput, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthenticationContext } from "contexts/authentication.context";
import LoadingScreen from "screens/loading/loading.screen";
import { styles } from "./index.styles";
import Button from "components/Button/Button";

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
      source={require("assets/backgrounds/good-eats.jpeg")}
    >
      <View style={styles.overlay} />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <View style={styles.buttonContainer}>
            {error && <Text>{error}</Text>}

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
            <Button text="Login" onPress={() => onLogin(email, password)} />
          </View>
          <Button text="Back" onPress={() => navigation.goBack()} />
        </>
      )}
    </ImageBackground>
  );
};

export default LoginScreen;
