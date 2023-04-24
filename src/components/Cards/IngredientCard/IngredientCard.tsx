import Counter from "components/Counter/Counter";
import Icon from "components/Icons/Icon";
import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { theme } from "theme/theme";

interface IngredientCardProps {
  name: string;
  amount: string;
  units: string;
  onPress: () => void;
}

const IngredientCard = ({
  name,
  amount,
  units,
  onPress,
}: IngredientCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{amount}</Text>
      <Text style={styles.cardTitle}>{units}</Text>
      <Text style={styles.cardTitle}>{name}</Text>

      <View style={styles.bottomIcons}>
        <Pressable onPress={onPress}>
          <Icon
            type={"Feather"}
            name={"edit"}
            size={theme.size.sm}
            style={styles.editIngredientIcon}
          />
        </Pressable>
        <Pressable onPress={() => {}}>
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
