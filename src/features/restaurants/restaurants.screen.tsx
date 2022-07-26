import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Search from "../../components/Search/Search";
import List from "../../components/List/List";

interface RestaurantsScreenProps {
  // Add props here
}

export const RestaurantsScreen: React.FC<RestaurantsScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Search value={""} />
      <List />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
