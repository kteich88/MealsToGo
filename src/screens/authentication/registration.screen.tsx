import React, { useContext, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LoadingScreen from "screens/loading/loading.screen";
import { AuthenticationContext } from "contexts/authentication.context";

interface RegistrationScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

const RegistrationScreen: React.FC<RegistrationScreenProps> = ({
  navigation,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [authenticatePassword, setAuthenticatePassword] = useState<string>("");

  const { onRegister, isLoading, error } = useContext(AuthenticationContext);
  return (
    <BackgroundImage>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <AuthContainer>
            <AuthInput
              label="E-mail"
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(u) => setEmail(u)}
            />
            <AuthInput
              label="Password"
              value={password}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(p) => setPassword(p)}
            />
            <AuthInput
              label="Retype Password"
              value={authenticatePassword}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(p) => setAuthenticatePassword(p)}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <AuthenticationButton
              icon="lock"
              mode="contained"
              onPress={() => onRegister(email, password, authenticatePassword)}
            >
              Register
            </AuthenticationButton>
          </AuthContainer>
          <BackButton mode="contained" onPress={() => navigation.goBack()}>
            Back
          </BackButton>
        </>
      )}
    </BackgroundImage>
  );
};

export default RegistrationScreen;
