import React from "react";
import { FlatList, Pressable, Text } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import Icon from "components/Icons/Icon";
import { DocumentData } from "firebase/firestore";
import { theme } from "infrastructure/theme";
import { styles } from "./PressableList.styles";
import { ProfileList } from "screens/profile/types";

interface PressableListProps {
  data: ProfileList[] | DocumentData[];
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const PressableList: React.FC<PressableListProps> = ({ data, navigation }) => {
  return (
    <FlatList
      style={styles.list}
      data={data}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <Pressable
          style={styles.listItem}
          onPress={() => navigation.navigate(`${item.title} Screen`)}
        >
          <Icon
            type={item.icon.type}
            name={item.icon.name}
            color={item.icon.color}
            size={item.icon.size}
          />

          <Text style={styles.text}>{`${item.title}`}</Text>
          <Icon
            style={styles.chevron}
            type={"Entypo"}
            name={"chevron-right"}
            size={theme.size.sm}
          />
        </Pressable>
      )}
    />
  );
};

export default PressableList;
