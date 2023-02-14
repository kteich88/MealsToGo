import { useFocusEffect } from "@react-navigation/native";
import { AuthenticationContext } from "contexts/authentication.context";
import { useCallback, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase/compat/app";

const useProfile = () => {
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

  return {
    photo,
  };
};

export default useProfile;
