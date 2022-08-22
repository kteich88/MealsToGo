import React, { ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./Button.styles";

interface ButtonProps {
  text: string;
  onPress: () => void;
  isDisabled: boolean;
  children?: ReactNode;
  customStyles?: any;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  isDisabled = false,
  children,
  customStyles,
}) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      // style={[styles.button, { backgroundColor: buttonColor }]}
      style={[styles.button, customStyles]}
      onPress={onPress}
    >
      {children}
      <Text style={[styles.text, customStyles]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
