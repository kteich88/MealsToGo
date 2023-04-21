import Counter from "components/Counter/Counter";
import Icon from "components/Icons/Icon";
import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { theme } from "theme/theme";
import { Ingredient } from "hooks/ingredients/types";

interface IngredientCardProps {
  name: string;
  amount: string;
  onPress: any;
}

const IngredientCard = ({ ...props }: IngredientCardProps) => {
  const { name, amount, onPress } = props;

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{name}</Text>
      <Counter amount={amount} />
      <View style={styles.bottomIcons}>
        <Pressable onPress={() => onPress}>
          <Icon
            type={"Feather"}
            name={"edit"}
            size={theme.size.sm}
            style={styles.editIngredientIcon}
          />
        </Pressable>
        <Pressable onPress={() => onPress}>
          <Icon
            type={"FontAwesome"}
            name={"trash-o"}
            size={theme.size.sm}
            style={styles.removeIngredientIcon}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default IngredientCard;
