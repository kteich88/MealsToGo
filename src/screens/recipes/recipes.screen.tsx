import React from "react";
import { Image } from "react-native";
import { globalStyles } from "theme/global.styles";

const RecipesScreen = () => {
  return (
    <Image
      style={globalStyles.inProgress}
      source={require("assets/images/wok-in-progress.png")}
    />
  );
};

export default RecipesScreen;
