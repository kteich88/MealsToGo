import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { ScrollView, TextInput, View } from "react-native";
import { theme } from "theme/theme";
import LottieAnimation from "components/LottieAnimation/LottieAnimation";
import { globalStyles } from "theme/global.styles";
import Button from "components/Button/Button";
import { ButtonText } from "components/Button/constants";
import useIngredients from "hooks/ingredients/useIngredients";
import { styles } from "./styles";
import { IngredientLocation } from "./constants";
import Dropdown from "components/Dropdown/Dropdown";
import {
  DropdownLabel,
  ingredientLocationSelectOptions,
} from "components/Dropdown/constants";
import useDropdown from "hooks/useDropdown";

const AddIngredientScreen = () => {
  const {
    name,
    setName,
    amount,
    setAmount,
    units,
    setUnits,
    addIngredient,
    isLoading,
  } = useIngredients();
  const { selection } = useDropdown();
  const id = uuidv4();
  const location = selection;
  const ingredient = { id, name, amount, units, location };

  return (
    <ScrollView style={styles.modalContainer}>
      {isLoading ? (
        <LottieAnimation
          source={"assets/lottie/loading.json"}
          styles={globalStyles.loading}
        />
      ) : (
        <View style={styles.form}>
          {/* <Dropdown
            data={ingredientLocationSelectOptions}
            label={DropdownLabel.ingredientLocation}
          /> */}
          <TextInput
            style={styles.textInput}
            placeholder="Ingredient Name"
            selectionColor={theme.colors.turquoise}
            value={name}
            autoCapitalize="none"
            onChangeText={(ingredient) => setName(ingredient)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Amount"
            selectionColor={theme.colors.turquoise}
            value={amount}
            autoCapitalize="none"
            onChangeText={(number) => setAmount(number)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Units (oz, lbs, etc)"
            selectionColor={theme.colors.turquoise}
            value={units}
            autoCapitalize="none"
            onChangeText={(unit) => setUnits(unit)}
          />
          <Button
            buttonText={ButtonText.AddIngredient}
            onPress={() => addIngredient(ingredient)}
            disabled={false}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default AddIngredientScreen;
