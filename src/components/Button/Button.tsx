import React, { ReactNode } from "react";
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import { ButtonText } from "./constants";
import styles from "./Button.styles";

interface ButtonProps {
  buttonText: ButtonText;
  onPress: any;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  buttonText,
  onPress,
  buttonTextStyle,
  buttonStyle,
  disabled = false,
  children,
}) => {
  return (
    <Pressable
      disabled={disabled}
      style={[styles.buttonStyle, buttonStyle]}
      onPress={onPress}
    >
      {children}
      <Text style={[styles.buttonTextStyle, buttonTextStyle]}>
        {buttonText}
      </Text>
    </Pressable>
  );
};

export default Button;
