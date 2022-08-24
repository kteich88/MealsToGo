import React, { useContext, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import LoadingScreen from "screens/loading/loading.screen";
import { styles } from "./index.styles";
import Button from "components/Button/Button";
import { globalStyles, theme } from "infrastructure/theme";
import SearchBar from "components/SearchBar/SearchBar";
import { AuthenticationContext } from "contexts/authentication.context";

const IngredientsScreen: React.FC = () => {
  const { isLoading } = useContext(AuthenticationContext);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <SafeAreaView style={globalStyles.safeArea}>
          <SearchBar
            clicked={undefined}
            searchPhrase={undefined}
            setSearchPhrase={undefined}
            setClicked={undefined}
          />
        </SafeAreaView>
      )}
    </>
  );
};

export default IngredientsScreen;
