import React from "react";
import { View } from "react-native";
import Button from "./Button";
import { styles } from "./index.styles";
import Icon from "components/Icons/Icon";
import { theme } from "infrastructure/theme";

interface FullWidthButtonProps {
  text: string;
  onPress: () => void;
}

const FullWidthButton: React.FC<FullWidthButtonProps> = ({ text, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        text={text}
        onPress={onPress}
        children={
          <Icon type={"Ionicons"} name={"add"} color={theme.colors.turquoise} />
        }
        customStyles={styles.fullWidthButton}
      />
    </View>
  );
};

export default FullWidthButton;
