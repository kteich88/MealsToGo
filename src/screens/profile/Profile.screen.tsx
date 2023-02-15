import React from "react";
import { SafeAreaView } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import AvatarImage from "components/AvatarImage/AvatarImage";
import { globalStyles } from "infrastructure/theme/theme";
import useProfile from "hooks/useProfile";
import PressableList from "components/Lists/PressableList/PressableList";
import { PROFILE_LIST } from "./constants";

interface ProfileScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  const { photo } = useProfile();
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <AvatarImage image={photo} navigation={navigation} />
      <PressableList data={PROFILE_LIST} navigation={navigation} />
    </SafeAreaView>
  );
};
