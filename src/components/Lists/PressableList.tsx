/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { FlatList, Pressable, Text } from "react-native";

import { DocumentData } from "firebase/firestore";
import Icon from "components/Icons/Icon";
import { styles } from "./PressableList.styles";
import { theme } from "theme/theme";
import { ProfileList } from "screens/profile/types";

interface PressableListProps {
  data: ProfileList[] | DocumentData[];
  navigation: any;
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
          onPress={navigation.navigate(item.title)}
        >
          <Text style={styles.text}>{item.title}</Text>
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
