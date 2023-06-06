import React from "react";
import { Image } from "react-native";
import { globalStyles } from "theme/global.styles";

const GroceriesScreen = () => {
  return (
    <Image
      style={globalStyles.inProgress}
      source={require("assets/images/wok-in-progress.png")}
    />
  );
};

export default GroceriesScreen;
