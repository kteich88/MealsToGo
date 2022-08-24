import Icon from "components/Icon/Icon";
import { theme } from "infrastructure/theme";
import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { styles } from "./AvatarImage.styles";

interface AvatarImageProps {
  image: string | undefined;
  navigation: NavigationScreenProp<any>;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ image, navigation }) => {
  console.log(image);

  return (
    <View style={styles.avatarContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        {image ? (
          <Image style={styles.image} source={{ uri: image }} />
        ) : (
          <View style={styles.avatar}>
            <Icon
              type={"FontAwesome"}
              name={"user"}
              color={theme.colors.brand.primary}
              size={theme.spacing.sixtyFour}
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AvatarImage;
