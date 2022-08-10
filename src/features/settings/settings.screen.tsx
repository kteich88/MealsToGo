/* eslint-disable react/no-unstable-nested-components */
import React, { useCallback, useContext, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { Avatar, List } from "react-native-paper";
import { AuthenticationContext } from "../../contexts/authentication.context";
import { SafeArea } from "../../components/SafeArea/SafeArea.styles";
import {
  AvatarContainer,
  SettingsItem,
  Email,
  SettingsContainer,
  AvatarImage,
} from "./settings.styles";
import { sizes } from "../../infrastructure/theme";

interface SettingsScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({
  navigation,
}) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user]),
  );

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {photo ? (
            <Avatar.Image size={sizes.xxl} source={{ uri: photo }} />
          ) : (
            <AvatarImage />
          )}
        </TouchableOpacity>

        <Email>{user.email}</Email>
      </AvatarContainer>

      <SettingsContainer>
        <List.Section>
          <SettingsItem
            title="Favorites"
            description="View your favorites"
            left={(props) => (
              <List.Icon {...props} color="black" icon="heart" />
            )}
            onPress={() => navigation.navigate("Favorites")}
          />
          <SettingsItem
            title="Logout"
            left={(props) => <List.Icon {...props} color="black" icon="door" />}
            onPress={() => onLogout()}
          />
        </List.Section>
      </SettingsContainer>
    </SafeArea>
  );
};
