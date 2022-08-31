import Icon from "components/Icon/Icon";
import VoiceIcon from "components/Icon/VoiceIcon";
import { VoiceContext } from "contexts/voice.context";
import { theme } from "infrastructure/theme";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import { IngredientLists } from "types/types";
import { styles } from "./SearchBar.styles";
import HorizontalRule from "components/HorizontalRule/HorizontalRule";
import SearchContainer from "./SearchContainer";

interface SearchBarProps {
  data: IngredientLists[];
}

const SearchBar: React.FC<SearchBarProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<IngredientLists[]>([]);
  const { text } = useContext(VoiceContext);

  const search = () => {
    if (searchTerm) {
      const newData = data.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setSearchResults(newData);
      setSearchTerm(searchTerm);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setSearchResults(masterDataSource);
      setSearchTerm(text);
    }
  };

  useEffect(() => {
    // Clear SearchBar
  });

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
      {/* {data.filter()} */}
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.name}
        // ItemSeparatorComponent={() => {
        //   <HorizontalRule />;
        // }}
        renderItem={({ item }) => {
          <Text style={styles.itemStyle} onPress={() => getItem(item)}>
            {item.id}
            {"."}
            {item.title.toUpperCase()}
          </Text>;
        }}
      />
    </View>
  );
};

export default SearchBar;
