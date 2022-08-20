import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  text: string;
  buttonColor: string;
  textColor: string;
}

const Button: React.FC<ButtonProps> = ({ text, buttonColor, textColor }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]}>
      <View style={styles.buttonContainer}>
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "green",
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  text: {
    fontFamily: "",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    textAlign: "center",
    color: "white",
  },
});
