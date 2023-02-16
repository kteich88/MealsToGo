/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { FlatList } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { DocumentData } from "firebase/firestore";
import { styles } from "./PressableList.styles";
import { ProfileList } from "screens/profile/types";
import PressableListItem from "../PressableListItem/PressableListItem";
import Icon from "components/Icons/Icon";

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
        <PressableListItem
          title={item.title}
          onPress={() => navigation.navigate(item.title)}
        >
          <Icon
            style={styles.icon}
            type={item.icon.type}
            name={item.icon.name}
            color={item.icon.color}
            size={item.icon.size}
          />
        </PressableListItem>
      )}
    />
  );
};

export default PressableList;
