import React from "react";
import { ScrollView, View, Text } from "react-native";
import LottieAnimation from "components/LottieAnimation/LottieAnimation";
import { globalStyles } from "theme/global.styles";
import useIngredients from "hooks/ingredients/useIngredients";
import { styles } from "./styles";
import { IngredientLocation } from "./constants";
import { SafeAreaView } from "react-native-safe-area-context";
import AddIngredientCard from "components/Cards/IngredientCard/AddIngredientCard";
import { AddIngredientScreenNavigationProps } from "navigation/types";
import IngredientCard from "components/Cards/IngredientCard/IngredientCard";

const IngredientsScreen = ({
  navigation,
}: AddIngredientScreenNavigationProps) => {
  const { isLoading } = useIngredients();

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <LottieAnimation
          source={"assets/lottie/loading.json"}
          styles={globalStyles.loading}
        />
      ) : (
        <View style={styles.container}>
          <View style={styles.refrigerator}>
            <Text style={styles.titles}>{IngredientLocation.Refrigerator}</Text>
            <ScrollView horizontal={true}>
              <AddIngredientCard navigation={navigation} />
              <IngredientCard name={"Chicken"} />
            </ScrollView>
          </View>
          <View style={styles.pantry}>
            <Text style={styles.titles}>{IngredientLocation.Pantry}</Text>
            <ScrollView horizontal={true}>
              <AddIngredientCard navigation={navigation} />
              <IngredientCard name={"Hot Chocolate"} />
            </ScrollView>
          </View>
          <View style={styles.freezer}>
            <Text style={styles.titles}>{IngredientLocation.Freezer}</Text>
            <ScrollView horizontal={true}>
              <AddIngredientCard navigation={navigation} />
              <IngredientCard name={"Ice Cream"} />
            </ScrollView>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default IngredientsScreen;
