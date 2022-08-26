import React, { useContext, useEffect, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import LoadingScreen from "screens/loading/loading.screen";
import { styles } from "./index.styles";
import Button from "components/Button/Button";
import { globalStyles, theme } from "infrastructure/theme";
import SearchBar from "components/Search/SearchBar";
import { AuthenticationContext } from "contexts/authentication.context";
import AccordionList from "components/Lists/AccordionList";
import firebase from "firebase/compat";
import { IngredientsContext } from "contexts/ingredients.context";

const DATA = [
  {
    title: "Freezer",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Pantry",
    data: ["Bread", "Chips", "Chocolate"],
  },
  {
    title: "Refrigerator",
    data: ["Water", "Coke", "Iced Tea"],
  },
];

const IngredientsScreen: React.FC = () => {
  const { isLoading } = useContext(AuthenticationContext);
  const { getIngredients } = useContext(IngredientsContext);
  const ingredients = getIngredients();
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <SafeAreaView style={globalStyles.safeArea}>
          <SearchBar />
          {/* <AccordionList data={DATA} /> */}
        </SafeAreaView>
      )}
    </>
  );
};

export default IngredientsScreen;
