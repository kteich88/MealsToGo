import React, { useContext, useState } from "react";
import { ImageBackground, Text, TextInput, View } from "react-native";
import LoadingScreen from "screens/loading/loading.screen";
import { styles } from "./index.styles";
import { theme } from "infrastructure/theme/theme";
import { AuthenticationContext } from "contexts/authentication.context";
import Button from "components/Button/Button";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      resizeMode="cover"
      source={require("assets/images/backgrounds/good-eats.jpeg")}
    >
      <View style={styles.overlay} />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <View style={styles.container}>
          {error && <Text style={styles.error}>{error}</Text>}

          <TextInput
            style={styles.textInput}
            placeholder="Email"
            selectionColor={theme.colors.turquoise}
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            selectionColor={theme.colors.turquoise}
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
          <Button
            text="Login"
            onPress={() => onLogin(email, password)}
            disabled={false}
            customStyles={styles.loginButton}
          />
        </View>
      )}
    </ImageBackground>
  );
};

export default LoginScreen;
