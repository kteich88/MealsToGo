import HorizontalRule from "components/HorizontalRule/HorizontalRule";
import { DocumentData } from "firebase/firestore";
import React from "react";
import { Pressable, Text } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { styles } from "./index.styles";
import Counter from "components/Counter/Counter";

interface IngredientsListProps {
  list: DocumentData[];
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const IngredientsList: React.FC<IngredientsListProps> = ({
  list,
  navigation,
}) => {
  return (
    <>
      {list.length > 0 &&
        list.map((item) => {
          return (
            <>
              <HorizontalRule />

              <Pressable
                key={item.id}
                style={styles.item}
                onPress={() =>
                  navigation.navigate("Ingredient Screen", {
                    item,
                  })
                }
              >
                <Text>{item.name}</Text>
                <Counter amount={item.amount} />
              </Pressable>
            </>
          );
        })}
    </>
  );
};

export default IngredientsList;
