import React from "react";
import { ScrollView, TextInput, View } from "react-native";
import { theme } from "theme/theme";
import LottieAnimation from "components/LottieAnimation/LottieAnimation";
import { globalStyles } from "theme/global.styles";
import Button from "components/Button/Button";
import { ButtonText } from "components/Button/constants";
import useIngredients from "hooks/ingredients/useIngredients";
import { styles } from "./styles";
import Dropdown from "components/Dropdown/Dropdown";
import { ingredientLocationSelectOptions } from "components/Dropdown/constants";
import { IngredientLocation } from "./constants";
import {
  EditIngredientNavigationProps,
  EditIngredientStack,
} from "navigation/types";
import { RouteProp } from "@react-navigation/native";

const EditIngredientScreen = ({ route }: EditIngredientNavigationProps) => {
  const { isLoading } = useIngredients();
  const id = route.params?.id;
  // find name, amount, units and location of ingredient with id

  return (
    <ScrollView style={styles.modalContainer}>
      {isLoading ? (
        <LottieAnimation
          source={"assets/lottie/loading.json"}
          styles={globalStyles.loading}
        />
      ) : (
        <View style={styles.form}>
          <Dropdown
            data={ingredientLocationSelectOptions}
            label={IngredientLocation.Freezer}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ingredient Name"
            selectionColor={theme.colors.turquoise}
            // value={name}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Amount"
            selectionColor={theme.colors.turquoise}
            // value={amount}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Units (oz, lbs, etc)"
            selectionColor={theme.colors.turquoise}
            // value={units}
            autoCapitalize="none"
          />
          <Button
            buttonText={ButtonText.EditIngredient}
            onPress={() => {}}
            disabled={false}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default EditIngredientScreen;
