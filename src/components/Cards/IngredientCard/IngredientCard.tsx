import Counter from "components/Counter/Counter";
import Icon from "components/Icons/Icon";
import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { theme } from "theme/theme";

interface IngredientCardProps {
  name: string;
}

const IngredientCard = ({ ...props }: IngredientCardProps) => {
  const { name } = props;
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{name}</Text>
      <Counter />
      <View style={styles.bottomIcons}>
        <Pressable>
          <Icon
            type={"Feather"}
            name={"edit"}
            size={theme.size.sm}
            style={styles.editIngredientIcon}
          />
        </Pressable>
        <Pressable>
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
