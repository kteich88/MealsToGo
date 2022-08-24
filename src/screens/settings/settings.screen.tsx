import React, { useCallback, useContext, useState } from "react";
import { SafeAreaView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { NavigationScreenProp } from "react-navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AvatarImage from "components/AvatarImage/AvatarImage";
import TouchableList from "components/Lists/TouchableList";
import { SETTINGS } from "./helpers";
import { globalStyles } from "infrastructure/theme";
import { AuthenticationContext } from "contexts/authentication.context";
import firebase from "firebase/compat/app";
interface SettingsScreenProps {
  navigation: NavigationScreenProp<any>;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({
  navigation,
}) => {
  const [photo, setPhoto] = useState<string>();
  const { user } = useContext(AuthenticationContext);

  const getProfilePicture = async (currentUser: firebase.User) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    if (typeof photoUri === "string") {
      setPhoto(photoUri);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (user === null) {
        return;
      }
      getProfilePicture(user);
    }, [user]),
  );

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <AvatarImage image={photo} navigation={navigation} />
      <TouchableList data={SETTINGS} navigation={navigation} />
    </SafeAreaView>
  );
};
