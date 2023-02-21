import { IngredientsContext } from "contexts/ingredients.context";
import React, { useContext, useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { styles } from "./index.styles";
import { Ingredient } from "types/ingredient.types";
import PressableList from "components/Lists/PressableList/PressableList";

interface SearchBarProps {
  searchTerm: string;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, navigation }) => {
  const [searchResult, setSearchResult] = useState<Ingredient[]>([]);
  const { ingredientList } = useContext(IngredientsContext);

  useEffect(() => {
    const newData = ingredientList.filter((result) =>
      result.item.toUpperCase().includes(searchTerm.toUpperCase()),
    );
    setSearchResult(newData);
  }, [searchTerm]);

  return (
    <View style={styles.resultsContainer}>
      {searchTerm.length > 0 && (
        <PressableList data={[]} navigation={undefined} />
      )}
    </View>
  );
};

export default SearchBar;
