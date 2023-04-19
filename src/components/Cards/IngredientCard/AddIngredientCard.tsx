import { ButtonText } from "components/Button/constants";
import Icon from "components/Icons/Icon";
import React from "react";
import { Text, Pressable } from "react-native";
import { styles } from "./styles";
import { theme } from "theme/theme";
import { RootStackRouteNames } from "navigation/constants";

const AddIngredientCard = ({ ...props }) => {
  const { navigation } = props;
  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate(RootStackRouteNames.AddIngredient)}
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
