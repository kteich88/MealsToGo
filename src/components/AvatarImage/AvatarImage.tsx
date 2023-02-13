import Icon from "components/Icon/Icon";
import { theme } from "infrastructure/theme";
import React from "react";
import { View, Image, Pressable } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { styles } from "./AvatarImage.styles";

interface AvatarImageProps {
  image: string | undefined;
  navigation: NavigationScreenProp<any>;
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
              type={"FontAwesome"}
              name={"user"}
              color={theme.colors.limeGreen}
              size={theme.size.lg}
            />
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default AvatarImage;
