import React from "react";
import { View } from "react-native";
import LottieAnimation from "components/LottieAnimation/LottieAnimation";
import { globalStyles } from "theme/global.styles";
import useIngredients from "hooks/ingredients/useIngredients";
import { styles } from "./styles";
import { IngredientLocation } from "./constants";
import { SafeAreaView } from "react-native-safe-area-context";
import IngredientSection from "components/IngredientSection/IngredientSection";

const IngredientsScreen = () => {
  const {
    isLoading,
    refrigeratorIngredients,
    pantryIngredients,
    freezerIngredients,
  } = useIngredients();

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <LottieAnimation
          source={"assets/lottie/loading.json"}
          styles={globalStyles.loading}
        />
      ) : (
        <View style={styles.container}>
          <IngredientSection
            ingredientLocation={IngredientLocation.Refrigerator}
            ingredients={refrigeratorIngredients}
          />
          <IngredientSection
            ingredientLocation={IngredientLocation.Pantry}
            ingredients={pantryIngredients}
          />
          <IngredientSection
            ingredientLocation={IngredientLocation.Freezer}
            ingredients={freezerIngredients}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default IngredientsScreen;
