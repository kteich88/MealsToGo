import React, { useCallback, useContext, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { Avatar, List } from "react-native-paper";
import { SafeArea } from "../../components/SafeArea/SafeArea.styles";
import {
  AvatarContainer,
  SettingsItem,
  SettingsContainer,
  AvatarImage,
} from "./settings.styles";
import { sizes, colors } from "../../infrastructure/theme";

interface SettingsScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({
  navigation,
}) => {
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async () => {
    const photoUri = await AsyncStorage.getItem("photo");
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture();
    }, []),
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
      </AvatarContainer>

      <SettingsContainer>
        <List.Section>
          <SettingsItem
            title="Favorites"
            description="View your favorites"
            left={(props) => (
              <List.Icon {...props} color={colors.ui.error} icon="heart" />
            )}
            onPress={() => navigation.navigate("Favorites")}
          />
        </List.Section>
      </SettingsContainer>
    </SafeArea>
  );
};
