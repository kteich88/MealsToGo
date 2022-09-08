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
import { ScrollView } from "react-native-gesture-handler";

interface IngredientsScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const IngredientsScreen: React.FC<IngredientsScreenProps> = ({
  navigation,
}) => {
  const { isLoading } = useContext(AuthenticationContext);
  const { sortedIngredientsList, loadIngredientsList } =
    useContext(IngredientsContext);

  // useEffect(() => {
  //   loadIngredientsList();
  // });

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <SafeAreaView style={globalStyles.safeArea}>
          <SearchBar
            placeholder="Search Ingredients..."
            navigation={navigation}
          />
          <ScrollView style={styles.container}>
            {sortedIngredientsList.map((list) => {
              return (
                <>
                  <Text style={styles.title}>{"PANTRY"}</Text>
                  <IngredientsList list={list.pantry} navigation={navigation} />
                  <Text style={styles.title}>{"REFRIGERATOR"}</Text>
                  <IngredientsList
                    list={list.refrigerator}
                    navigation={navigation}
                  />
                  <Text style={styles.title}>{"FREEZER"}</Text>
                  <IngredientsList
                    list={list.freezer}
                    navigation={navigation}
                  />
                </>
              );
            })}
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

export default IngredientsScreen;
