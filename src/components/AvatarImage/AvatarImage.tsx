import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { styles } from "./AvatarImage.styles";

interface AvatarImageProps {
  image: string | undefined;
  navigation: NavigationScreenProp<any>;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ image, navigation }) => {
  return (
    <View style={styles.avatarContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        {image ? (
          <Image source={{ uri: image }} />
        ) : (
          <Image source={{ uri: "assets/images/pusheen-rice.gif" }} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AvatarImage;
