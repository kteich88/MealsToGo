import React, { ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./Button.styles";

interface ButtonProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  children?: ReactNode;
  customStyles?: any;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  disabled = false,
  children,
  customStyles,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, customStyles]}
      onPress={onPress}
    >
      {children}
      <Text style={[styles.text, customStyles]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
