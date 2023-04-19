import React, { useState } from "react";
import { ScrollView, TextInput, View, Image } from "react-native";
import { theme } from "theme/theme";
import useAuthentication from "hooks/authentication/useAuthentication";
import LottieAnimation from "components/LottieAnimation/LottieAnimation";
import { globalStyles } from "theme/global.styles";
import Button from "components/Button/Button";
import { ButtonText } from "components/Button/constants";
import { styles } from "./login.styles";
import { RootStackRouteNames } from "navigation/constants";
import { LoginScreenNavigationProps } from "navigation/types";

const LoginScreen = ({ navigation }: LoginScreenNavigationProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { onLogin, isLoading, error } = useAuthentication();

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <LottieAnimation
          source={"assets/lottie/loading.json"}
          styles={globalStyles.loading}
        />
      ) : (
        <View style={styles.form}>
          <Image
            style={styles.image}
            source={require("assets/images/good-eats-title.png")}
          />

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
            buttonText={ButtonText.Login}
            onPress={() => onLogin(email, password)}
            disabled={false}
            buttonStyle={styles.buttonStyle}
          />
          <Button
            buttonText={ButtonText.Register}
            onPress={() => navigation.navigate(RootStackRouteNames.Register)}
            disabled={false}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default LoginScreen;
