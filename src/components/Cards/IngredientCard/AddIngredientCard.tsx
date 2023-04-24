import { ButtonText } from "components/Button/constants";
import Icon from "components/Icons/Icon";
import React from "react";
import { Text, Pressable } from "react-native";
import { styles } from "./styles";
import { theme } from "theme/theme";
import { RootStackRouteNames } from "navigation/constants";
import { IngredientLocation } from "screens/ingredients/constants";
import { AddIngredientScreenNavigationProps } from "navigation/types";
import { useNavigation } from "@react-navigation/native";

interface AddIngredientCardProps {
  ingredientLocation: IngredientLocation;
}

const AddIngredientCard = ({ ingredientLocation }: AddIngredientCardProps) => {
  const navigation = useNavigation<AddIngredientScreenNavigationProps>();
  return (
    <Pressable
      style={styles.card}
      onPress={() =>
        navigation.navigate(RootStackRouteNames.AddIngredient, {
          location: ingredientLocation,
        })
      }
    >
      <Icon
        type={"FontAwesome5"}
        name={"plus"}
        style={styles.addIngredientIcon}
        size={theme.size.lg}
      />
      <Text style={styles.cardTitle}>{ButtonText.AddIngredient}</Text>
    </Pressable>
  );
};

export default AddIngredientCard;
