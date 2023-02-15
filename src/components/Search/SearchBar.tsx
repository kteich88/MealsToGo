/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import VoiceIcon from "components/Icons/VoiceIcon";
import { theme } from "infrastructure/theme";
import { styles } from "./index.styles";
import SearchResults from "./SearchResults";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { useVoice } from "hooks/useVoice";
import Icon from "components/Icons/Icon";

interface SearchBarProps {
  placeholder: string;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, navigation }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { text, isRecording, onRecordVoice } = useVoice();
  console.log("I am text:", text);

  const onChangeSearch = (query: string) => setSearchTerm(query);

  return (
    <View style={styles.container}>
      <Searchbar
        icon={() => (
          <Icon
            type={"FontAwesome"}
            name={isRecording ? "microphone-slash" : "microphone"}
            color={theme.colors.midGray}
            size={theme.spacing.lg}
          />
        )}
        onIconPress={onRecordVoice}
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
