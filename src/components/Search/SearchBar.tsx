import Icon from "components/Icon/Icon";
import VoiceIcon from "components/Icon/VoiceIcon";
import { VoiceContext } from "contexts/voice.context";
import { theme } from "infrastructure/theme";
import React, { useContext, useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./SearchBar.styles";
import { DocumentData } from "firebase/firestore";
import { FlatList } from "react-native-gesture-handler";

interface SearchBarProps {
  data: DocumentData[];
}

const SearchBar: React.FC<SearchBarProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<DocumentData[]>([]);
  const { text } = useContext(VoiceContext);

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
    </View>
  );
};

export default SearchBar;
