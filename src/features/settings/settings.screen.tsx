import React, { useContext } from "react";
import { AuthenticationContext } from "../../contexts/authentication.context";
import {
  LogOutButton,
  SettingsContainer,
  Title,
  BackgroundImage,
  ImageOverlay,
} from "./settings.styles";
import { SettingsIcon } from "../../utils/icons/settings.icon";

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <BackgroundImage>
      <ImageOverlay />

      <SettingsContainer>
        <Title>
          Settings <SettingsIcon />
        </Title>

        <LogOutButton icon="logout" mode="contained" onPress={() => onLogout()}>
          Log Out
        </LogOutButton>
      </SettingsContainer>
    </BackgroundImage>
  );
};
