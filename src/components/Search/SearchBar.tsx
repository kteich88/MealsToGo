/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { theme } from "infrastructure/theme/theme";
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
  const { textWhileListening, recordedText, isRecording, onRecordVoice } =
    useVoice();

  console.log("I am listening to this text:", textWhileListening);
  console.log("I am the recorded text:", recordedText);

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
        value={searchTerm ? searchTerm : textWhileListening.join()}
        onChangeText={onChangeSearch}
        style={styles.searchbar}
        selectionColor={theme.colors.turquoise}
        inputStyle={styles.searchbar}
      />
      <SearchResults
        searchTerm={searchTerm ? searchTerm : recordedText}
        navigation={navigation}
      />
    </View>
  );
};

export default SearchBar;
