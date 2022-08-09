import React, { useContext } from "react";
import { AuthenticationContext } from "../../contexts/authentication.context";
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../components/SafeArea/SafeArea.styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  AvatarContainer,
  SettingsItem,
  Email,
  SettingsContainer,
} from "./settings.styles";
import { sizes } from "../../infrastructure/theme";

interface SettingsScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({
  navigation,
}) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <AvatarContainer>
        {/* <Avatar.Image size={24} source={require(user.photoURL)} /> */}
        <Avatar.Image
          size={sizes.xxxl}
          source={require("../../../assets/pusheen-rice.gif")}
        />

        <Email>{user.email}</Email>
      </AvatarContainer>

      <SettingsContainer>
        <List.Section>
          <SettingsItem
            title="Favourites"
            description="View your favourites"
            left={(props) => (
              <List.Icon {...props} color="black" icon="heart" />
            )}
            onPress={() => navigation.navigate("Favourites")}
          />
          <SettingsItem
            title="Logout"
            left={(props) => <List.Icon {...props} color="black" icon="door" />}
            onPress={onLogout}
          />
        </List.Section>
      </SettingsContainer>
    </SafeArea>
  );
};
