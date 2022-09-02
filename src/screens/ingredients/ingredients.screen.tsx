import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import LoadingScreen from "screens/loading/loading.screen";
import { globalStyles } from "infrastructure/theme";
import SearchBar from "components/Search/SearchBar";
import { AuthenticationContext } from "contexts/authentication.context";
import { IngredientsContext } from "contexts/ingredients.context";
import IngredientsList from "components/Lists/IngredientsList";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { styles } from "./index.styles";
import FullWidthButton from "components/Buttons/FullWidthButton";

interface IngredientsScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const IngredientsScreen: React.FC<IngredientsScreenProps> = ({
  navigation,
}) => {
  const { isLoading } = useContext(AuthenticationContext);
  const { ingredientsList, sortedIngredientsList } =
    useContext(IngredientsContext);

  const renderIngredientsList = () => {
    return sortedIngredientsList.map((list) => {
      return (
        <>
          <Text style={styles.title}>{"PANTRY"}</Text>
          <IngredientsList list={list.pantry} />
          <Text style={styles.title}>{"REFRIGERATOR"}</Text>
          <IngredientsList list={list.refrigerator} />
          <Text style={styles.title}>{"FREEZER"}</Text>
          <IngredientsList list={list.freezer} />
        </>
      );
    });
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <SafeAreaView style={globalStyles.safeArea}>
          <SearchBar data={ingredientsList} navigation={navigation} />
          <View style={styles.container}>{renderIngredientsList()}</View>
          <FullWidthButton
            text={"Add Ingredient"}
            onPress={() => navigation.navigate("Add Ingredient Screen")}
          />
        </SafeAreaView>
      )}
    </>
  );
};

export default IngredientsScreen;
