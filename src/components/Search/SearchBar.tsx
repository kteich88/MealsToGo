/* eslint-disable react/no-unstable-nested-components */
import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import VoiceIcon from "components/Icons/VoiceIcon";
import { VoiceContext } from "contexts/voice.context";
import { theme } from "infrastructure/theme";
import { styles } from "./index.styles";
import SearchResults from "./SearchResults";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

interface SearchBarProps {
  placeholder: string;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, navigation }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { text } = useContext(VoiceContext);

  const onChangeSearch = (query: string) => setSearchTerm(query);

  return (
    <View style={styles.container}>
      <Searchbar
        icon={() => <VoiceIcon />}
        placeholder={placeholder}
        searchAccessibilityLabel={"Search"}
        value={searchTerm ? searchTerm : text.join()}
        onChangeText={onChangeSearch}
        style={styles.searchbar}
        selectionColor={theme.colors.turquoise}
        inputStyle={styles.searchbar}
      />
      <SearchResults
        searchTerm={searchTerm ? searchTerm : text.join()}
        navigation={navigation}
      />
    </View>
  );
};

export default SearchBar;
