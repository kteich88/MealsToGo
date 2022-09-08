import React, { useContext, useState } from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import LoadingScreen from "screens/loading/loading.screen";
import { globalStyles, theme } from "infrastructure/theme";
import Counter from "components/Counter/Counter";
import { IngredientsContext } from "contexts/ingredients.context";
import { styles } from "./index.styles";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";
import ModalSelector from "react-native-modal-selector";
import { selectorData } from "services/data/selector";
import { Button, TextInput } from "react-native-paper";

interface AddIngredientsScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const AddIngredientScreen: React.FC<AddIngredientsScreenProps> = ({
  navigation,
}) => {
  const [amount, setAmount] = useState<number>(0);
  const [location, setLocation] = useState<string>();
  const [name, setName] = useState<string>("");
  const { addIngredient, isLoading, error } = useContext(IngredientsContext);

  const onButtonPress = () => {
    addIngredient({
      amount,
      location,
      name,
    });
    navigation.navigate("Ingredients Screen");
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      resizeMode="cover"
      source={require("assets/backgrounds/good-eats.jpeg")}
    >
      <View style={styles.overlay} />

      {isLoading ? (
        <LoadingScreen />
      ) : (
        <SafeAreaView style={globalStyles.safeArea}>
          {error && <Text>{error}</Text>}
          <ModalSelector
            style={styles.selector}
            data={selectorData}
            initValue="Select ingredient location..."
            accessible={true}
            scrollViewAccessibilityLabel={"Scrollable options"}
            cancelButtonAccessibilityLabel={"Cancel Button"}
            onChange={(option) => setLocation(option.label)}
          />
          <TextInput
            mode="outlined"
            style={styles.textInput}
            placeholder="Ingredient Name..."
            selectionColor={theme.colors.brand.primary}
            outlineColor={theme.colors.bg.search}
            activeOutlineColor={theme.colors.bg.search}
            value={name}
            autoCapitalize="none"
            onChangeText={(i) => setName(i)}
          />
          <View style={styles.counter}>
            <Counter amount={amount} setAmount={setAmount} />
          </View>
        </SafeAreaView>
      )}
      {name !== "" && (
        <Button
          style={styles.buttonContainer}
          mode="contained"
          icon={"plus"}
          accessibilityLabel="Press Button to Add Ingredient"
          contentStyle={styles.button}
          labelStyle={styles.buttonText}
          onPress={() => {
            onButtonPress();
          }}
        >
          Add Ingredient
        </Button>
      )}
    </ImageBackground>
  );
};

export default AddIngredientScreen;
