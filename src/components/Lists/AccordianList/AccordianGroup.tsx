import React from "react";
import { SectionList } from "react-native";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import PressableListItem from "../PressableListItem/PressableListItem";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { styles } from "./AccordianGroup.styles";
import { IngredientList } from "screens/ingredients/types";

interface AccordianGroupProps {
  data: IngredientList;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const AccordianGroup: React.FC<AccordianGroupProps> = ({
  data,
  navigation,
}) => {
  return (
    <ScrollView>
      <SectionList
        style={styles.list}
        sections={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <List.AccordionGroup>
            <List.Accordion title={item} id={item.index}>
              <PressableListItem
                onPress={() => navigation.navigate(item.item)}
                title={item.item}
              />
              <List.Item title="Item 1" />
            </List.Accordion>
          </List.AccordionGroup>
        )}
      />
    </ScrollView>
  );
};

export default AccordianGroup;
