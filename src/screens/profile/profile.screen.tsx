import PressableList from "components/Lists/PressableList";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PROFILE_LIST } from "./constants";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <PressableList data={PROFILE_LIST} navigation={navigation} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
