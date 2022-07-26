import React from "react";
import { StyleSheet, View } from "react-native";
import { spacing } from "../../utils/normalize";

interface ListProps {
  // Add props here
}

export const List: React.FC<ListProps> = () => {
  return <View style={styles.list} />;
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: "blue",
  },
});

export default List;
