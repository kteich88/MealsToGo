import Icon from "components/Icons/Icon";
import { theme } from "infrastructure/theme/theme";
import React from "react";
import { View, Image, Pressable } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { styles } from "./AvatarImage.styles";

interface AvatarImageProps {
  image: string | undefined;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ image, navigation }) => {
  return (
    <View style={styles.avatarContainer}>
      <Pressable onPress={() => navigation.navigate("Camera")}>
        {image ? (
          <Image style={styles.avatar} source={{ uri: image }} />
        ) : (
          <View style={styles.avatar}>
            <Icon
              type={"EvilIcons"}
              name={"user"}
              color={theme.colors.lightGray}
              size={theme.size.lg}
            />
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default AvatarImage;
