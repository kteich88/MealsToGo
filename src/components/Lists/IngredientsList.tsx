import Counter from "components/Counter/Counter";
import HorizontalRule from "components/HorizontalRule/HorizontalRule";
import { DocumentData } from "firebase/firestore";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./index.styles";

interface IngredientsListProps {
  list: DocumentData[];
}

const IngredientsList: React.FC<IngredientsListProps> = ({ list }) => {
  return (
    <>
      {list.length > 0 &&
        list.map((item) => {
          return (
            <>
              <HorizontalRule />

              <View key={item.name} style={styles.item}>
                <Text>{item.name}</Text>
                <Counter amount={item.amount} />
              </View>
            </>
          );
        })}
    </>
  );
};

export default IngredientsList;
