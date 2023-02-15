import React, { ReactNode } from "react";
import { Pressable, Text } from "react-native";

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
    <Pressable disabled={disabled} style={[customStyles]} onPress={onPress}>
      {children}
      <Text style={[customStyles]}>{text}</Text>
    </Pressable>
  );
};

export default Button;
