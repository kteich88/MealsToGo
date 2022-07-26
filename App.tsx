import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Search from "./src/components/Search/Search";
import Restaurant from "./src/components/Cards/Restaurant/Restaurant";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Search value={""} />
      <Restaurant
        name={"Good Eats"}
        icons={[]}
        photos={[
          "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ]}
        address={""}
        isOpenNow={false}
        rating={0}
        isClosedTemporarily={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
