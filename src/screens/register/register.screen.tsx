import React, { useState } from "react";
import { ScrollView, TextInput, View, Image } from "react-native";
import { theme } from "theme/theme";
import useAuthentication from "hooks/authentication/useAuthentication";
import LottieAnimation from "components/LottieAnimation/LottieAnimation";
import { globalStyles } from "theme/global.styles";
import Button from "components/Button/Button";
import { ButtonText } from "components/Button/constants";
import { styles } from "./register.styles";

const RegisterScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const { onRegister, isLoading } = useAuthentication();

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
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            selectionColor={theme.colors.turquoise}
            value={confirmPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setConfirmPassword(p)}
          />
          <Button
            buttonText={ButtonText.Login}
            onPress={() => onRegister(email, password, confirmPassword)}
            disabled={false}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default RegisterScreen;
