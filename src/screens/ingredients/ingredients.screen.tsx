import React, { useContext, useEffect, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import LoadingScreen from "screens/loading/loading.screen";
import { globalStyles, theme } from "infrastructure/theme";
import SearchBar from "components/Search/SearchBar";
import { AuthenticationContext } from "contexts/authentication.context";
import { IngredientsContext } from "contexts/ingredients.context";
import Icon from "components/Icon/Icon";
import IngredientsList from "components/Lists/IngredientsList";
import { VoiceContext } from "contexts/voice.context";
import Search from "components/Search/Search";
import { styles } from "./ingredients.styles";
import { IngredientListData } from "types/types";
import { DocumentData } from "firebase/firestore";

const IngredientsScreen: React.FC = () => {
  const [ingredientListData, setIngredientListData] = useState<DocumentData[]>(
    [],
  );
  const { isLoading } = useContext(AuthenticationContext);
  const { ingredientLists } = useContext(IngredientsContext);

  const DATA = [
    {
      freezer: [
        {
          amount: "1",
          authorID: "me",
          id: "ingredient",
          location: "freezer",
          name: "pizza",
        },
        {
          amount: "2",
          authorID: "me",
          id: "ingredient",
          location: "freezer",
          name: "ice cream",
        },
      ],
      pantry: [
        {
          amount: "5",
          authorID: "me",
          id: "ingredient",
          location: "pantry",
          name: "potato",
        },
        {
          amount: "2",
          authorID: "me",
          id: "ingredient",
          location: "pantry",
          name: "pasta",
        },
      ],

      refrigerator: [
        {
          amount: "1",
          authorID: "me",
          id: "ingredient",
          location: "fridge",
          name: "meats",
        },
        {
          amount: "13",
          authorID: "me",
          id: "ingredient",
          location: "fridge",
          name: "fruits",
        },
      ],
    },
  ];

  useEffect(() => {
    const ingredientList = ingredientLists.map((list) => {
      return [...list.pantry, ...list.refrigerator, ...list.freezer];
    });
    setIngredientListData(ingredientList);
  }, []);

  const renderIngredientsList = () => {
    return ingredientLists.map((list) => {
      return (
        <>
          <Text style={styles.pantry}>{"PANTRY"}</Text>
          <IngredientsList list={list.pantry} />
          <Text style={styles.fridge}>{"REFRIGERATOR"}</Text>
          <IngredientsList list={list.refrigerator} />
          <Text style={styles.freezer}>{"FREEZER"}</Text>
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
          <SearchBar data={ingredientListData} />
          <View style={styles.container}>{renderIngredientsList()}</View>
        </SafeAreaView>
      )}
    </>
  );
};

export default IngredientsScreen;
