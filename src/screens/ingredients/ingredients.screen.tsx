import React, { useContext, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import LoadingScreen from "screens/loading/loading.screen";
import { globalStyles } from "infrastructure/theme/theme";
import SearchBar from "components/Search/SearchBar";
import { IngredientsContext } from "contexts/ingredients.context";
import IngredientsList from "components/Lists/IngredientsList";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { styles } from "./index.styles";
import { ScrollView } from "react-native-gesture-handler";

interface IngredientsScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const IngredientsScreen: React.FC<IngredientsScreenProps> = ({
  navigation,
}) => {
  const { sortedIngredientList, isLoading, loadIngredientsList } =
    useContext(IngredientsContext);

  useEffect(() => {
    loadIngredientsList();
  }, []);

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
            <Text style={styles.title}>{"PANTRY"}</Text>
            <IngredientsList
              list={sortedIngredientList.pantry}
              navigation={navigation}
            />
            <Text style={styles.title}>{"REFRIGERATOR"}</Text>
            <IngredientsList
              list={sortedIngredientList.refrigerator}
              navigation={navigation}
            />
            <Text style={styles.title}>{"FREEZER"}</Text>
            <IngredientsList
              list={sortedIngredientList.freezer}
              navigation={navigation}
            />
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

export default IngredientsScreen;
