import React, { useContext, useEffect, useState } from "react";
import { TextInput, View, Keyboard, Button } from "react-native";
import { styles } from "./SearchBar.styles";
import { theme } from "infrastructure/theme";
import Icon from "components/Icon/Icon";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Icon
          type="Feather"
          name="search"
          size={20}
          color={theme.colors.text.primary}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Icon
            type="Entypo"
            name="cross"
            size={20}
            color="black"
            // onPress={() => {
            //   setSearchPhrase("");
            // }}
          />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          />
        </View>
      )}
    </View>
  );
};
export default SearchBar;
