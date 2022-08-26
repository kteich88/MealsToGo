import Button from "components/Button/Button";
import Icon from "components/Icon/Icon";
import VoiceIcon from "components/Icon/VoiceIcon";
import firebase from "firebase/compat";
import { theme } from "infrastructure/theme";
import React, { useEffect, useMemo, useState } from "react";
import {
  Animated,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import { styles } from "./SearchBar.styles";

const SearchBar = () => {
  const [search, setSearch] = useState("");

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
        value={search}
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
