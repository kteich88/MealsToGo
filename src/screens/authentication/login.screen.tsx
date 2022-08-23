import React, { useContext, useState } from "react";
import { ImageBackground, Text, TextInput, View } from "react-native";
import LoadingScreen from "screens/loading/loading.screen";
import { styles } from "./index.styles";
import Button from "components/Button/Button";
import { theme } from "infrastructure/theme";
import { AuthenticationContext } from "contexts/authentication.context";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);
  console.log("BRUH", onLogin);
  console.log("Loading", isLoading);
  return (
    <ImageBackground
      style={styles.backgroundImage}
      resizeMode="cover"
      source={require("assets/backgrounds/good-eats.jpeg")}
    >
      <View style={styles.overlay} />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <View style={styles.container}>
          {error && <Text>{error}</Text>}

          <TextInput
            style={styles.textInput}
            placeholder="Email"
            selectionColor={theme.colors.brand.primary}
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            selectionColor={theme.colors.brand.primary}
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
          <Button
            text="Login"
            onPress={() => onLogin(email, password)}
            isDisabled={false}
            customStyles={styles.loginButton}
          />
        </View>
      )}
    </ImageBackground>
  );
};

export default LoginScreen;
