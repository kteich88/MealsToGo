import HorizontalRule from "components/HorizontalRule/HorizontalRule";
import { DocumentData } from "firebase/firestore";
import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { styles } from "./index.styles";

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

              <TouchableOpacity
                key={item.name}
                style={styles.item}
                onPress={() =>
                  navigation.navigate("Ingredient Screen", {
                    item,
                  })
                }
              >
                <Text>{item.name}</Text>
                {/* <Counter amount={item.amount} /> */}
              </TouchableOpacity>
            </>
          );
        })}
    </>
  );
};

export default IngredientsList;
