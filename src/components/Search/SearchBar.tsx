import Icon from "components/Icon/Icon";
import VoiceIcon from "components/Icon/VoiceIcon";
import { VoiceContext } from "contexts/voice.context";
import { theme } from "infrastructure/theme";
import React, { useContext, useState } from "react";
import { TextInput, View } from "react-native";
import { styles } from "./SearchBar.styles";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { text } = useContext(VoiceContext);

  return (
    <View style={styles.container}>
      <Icon
        style={styles.icon}
        type={"Ionicons"}
        name={"search"}
        color={theme.colors.text.primary}
        size={theme.spacing.twenty}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Search..."
        selectionColor={theme.colors.brand.primary}
        value={search ? search : text.join()}
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(s) => setSearch(s)}
      />
      <VoiceIcon />
    </View>
  );
};

export default SearchBar;
