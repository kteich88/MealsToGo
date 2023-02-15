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

interface SearchBarProps {
  searchTerm: string;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, navigation }) => {
  const [searchResult, setSearchResult] = useState<Ingredient[]>([]);
  const { ingredientList } = useContext(IngredientsContext);

  useEffect(() => {
    const newData = ingredientList.filter((result) =>
      result.name.toUpperCase().includes(searchTerm.toUpperCase()),
    );
    setSearchResult(newData);
  }, [searchTerm]);

  return (
    <View style={styles.resultsContainer}>
      {searchTerm.length > 0 && (
        <FlatList
          style={styles.list}
          data={searchResult}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() => navigation.navigate("Ingredient Screen")}
              >
                <Text style={styles.result}>{item.name.toUpperCase()} </Text>
              </Pressable>
            );
          }}
        />
      )}
    </View>
  );
};

export default SearchBar;
