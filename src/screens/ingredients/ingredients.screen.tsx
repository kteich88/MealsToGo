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

  const initializeIngredientsList = () => {};

  useEffect(() => {
    initializeIngredientsList();
  }, [ingredientLists]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <SafeAreaView style={globalStyles.safeArea}>
          {/* <SearchBar data={ingredientsData} /> */}
          {/* <Search /> */}
          {ingredientLists.map((list) => {
            console.log("LIST", ingredientListData);
            return (
              <>
                <Text style={styles.title}>{"PANTRY"}</Text>
                <IngredientsList key={"pantry"} list={list.pantry} />
                <Text style={styles.title}>{"REFRIGERATOR"}</Text>
                <IngredientsList
                  key={"refrigerator"}
                  list={list.refrigerator}
                />
                <Text style={styles.title}>{"FREEZER"}</Text>
                <IngredientsList key={"freezer"} list={list.freezer} />
              </>
            );
          })}
        </SafeAreaView>
      )}
    </>
  );
};

export default IngredientsScreen;
