import Icon from "components/Icon/Icon";
import VoiceIcon from "components/Icon/VoiceIcon";
import { VoiceContext } from "contexts/voice.context";
import { theme } from "infrastructure/theme";
import React, { useContext, useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./SearchBar.styles";
import { DocumentData } from "firebase/firestore";
import { FlatList } from "react-native-gesture-handler";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

interface SearchBarProps {
  data: DocumentData[];
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const SearchBar: React.FC<SearchBarProps> = ({ data, navigation }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<DocumentData[]>([]);
  const { text } = useContext(VoiceContext);

  useEffect(() => {
    setSearchResults(data);
  }, [data]);

  const filteredList = searchResults.filter((item) => {
    return item.name.includes(searchTerm);
  });

  console.log("LIST", filteredList);
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon
          style={styles.icon}
          type={"Ionicons"}
          name={"search"}
          color={theme.colors.text.primary}
          size={theme.spacing.twenty}
        />
        <TextInput
          placeholder="Search..."
          style={styles.textInput}
          selectionColor={theme.colors.brand.primary}
          value={searchTerm ? searchTerm : text.join()}
          autoCapitalize="none"
          onChangeText={(s) => setSearchTerm(s)}
        />
        <VoiceIcon />
      </View>
      {/* {filteredList.length > 0 && <Text>{filteredList[0].name}</Text>} */}
      {/* <IngredientsList list={filteredList} /> */}
      {filteredList.length === 0 && (
        <FlatList
          style={styles.search}
          data={filteredList}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Ingredient Screen")}
              >
                <Text>{item.name} </Text>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

export default SearchBar;
