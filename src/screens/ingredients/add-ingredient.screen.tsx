import React, { useContext, useState } from "react";
import { ImageBackground, SafeAreaView, TextInput, View } from "react-native";
import LoadingScreen from "screens/loading/loading.screen";
import { globalStyles, theme } from "infrastructure/theme";
import { AuthenticationContext } from "contexts/authentication.context";
import Counter from "components/Counter/Counter";
import { IngredientsContext } from "contexts/ingredients.context";
import { styles } from "./index.styles";
import Icon, { IconProps } from "components/Icon/Icon";
import FullWidthButton from "components/Buttons/FullWidthButton";
import Dropdown from "components/Dropdown/Dropdown";
import { IngredientDocumentDataType } from "types/types";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";

interface AddIngredientsScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const AddIngredientScreen: React.FC<AddIngredientsScreenProps> = ({
  navigation,
}) => {
  const [amount, setAmount] = useState<number>(0);
  const [icon, setIcon] = useState<IconProps>();
  const [location, setLocation] = useState<string>("");
  const [ingredient, setIngredient] = useState<string>("");
  const { isLoading } = useContext(AuthenticationContext);
  const { error, addIngredient } = useContext(IngredientsContext);

  const ingredientData: IngredientDocumentDataType = {
    amount,
    icon,
    location,
    name: ingredient,
  };
  console.log("LOCATION", location);
  console.log("ICON", icon);

  const onButtonPress = () => {
    addIngredient(ingredientData);
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
          {icon ? (
            <View style={styles.icon}>
              <Icon
                type={icon.type}
                name={icon.name}
                color={theme.colors.brand.primary}
                size={theme.spacing.sixtyFour}
              />
            </View>
          ) : (
            <View style={styles.icon}>
              <Icon
                type={"Fontisto"}
                name={"photograph"}
                color={theme.colors.brand.primary}
                size={theme.spacing.sixtyFour}
              />
            </View>
          )}
          <Dropdown
            label={"Select Ingredient Icon..."}
            setIcon={setIcon}
            setLocation={setLocation}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ingredient Name..."
            selectionColor={theme.colors.brand.primary}
            value={ingredient}
            autoCapitalize="none"
            onChangeText={(i) => setIngredient(i)}
          />
          <View>
            <Counter amount={amount} setAmount={setAmount} />
          </View>
        </SafeAreaView>
      )}
      {ingredient !== "" && (
        <FullWidthButton
          text={"Add Ingredient"}
          onPress={() => {
            onButtonPress;
          }}
        />
      )}
    </ImageBackground>
  );
};

export default AddIngredientScreen;
