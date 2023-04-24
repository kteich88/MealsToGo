import React from "react";
import { ScrollView, View, Text } from "react-native";
import AddIngredientCard from "components/Cards/IngredientCard/AddIngredientCard";
import IngredientCard from "components/Cards/IngredientCard/IngredientCard";
import { RootStackRouteNames } from "navigation/constants";
import { Ingredient } from "hooks/ingredients/types";
import { styles } from "./IngredientSection.styles";
import { IngredientLocation } from "screens/ingredients/constants";
import { EditIngredientNavigationProps } from "navigation/types";
import { useNavigation } from "@react-navigation/native";

interface IngredientSectionProps {
  ingredientLocation: IngredientLocation;
  ingredients: Ingredient[] | undefined;
}

const IngredientSection = ({
  ingredientLocation,
  ingredients,
}: IngredientSectionProps) => {
  const navigation = useNavigation<EditIngredientNavigationProps>();
  return (
    <View style={styles.section}>
      <Text style={styles.titles}>{ingredientLocation}</Text>
      <ScrollView horizontal={true}>
        <AddIngredientCard ingredientLocation={ingredientLocation} />
        {ingredients?.map((ingredient) => {
          return (
            <IngredientCard
              key={ingredient.id}
              name={ingredient.name}
              amount={ingredient.amount}
              onPress={() =>
                navigation.navigate(RootStackRouteNames.EditIngredient, {
                  id: ingredient.id,
                })
              }
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default IngredientSection;
