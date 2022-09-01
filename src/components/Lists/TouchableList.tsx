import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import Icon from "components/Icon/Icon";
import { DataType } from "types/types";
import { styles } from "./index.styles";
import { DocumentData } from "firebase/firestore";

interface TouchableListProps {
  data: DataType[] | DocumentData[];
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const TouchableList: React.FC<TouchableListProps> = ({ data, navigation }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.settings}
          onPress={() => navigation.navigate(`${item.title} Screen`)}
        >
          <Icon
            type={item.icon.type}
            name={item.icon.name}
            color={item.icon.color}
            size={item.icon.size}
          />

          <Text style={styles.text}>{`${item.title}`}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default TouchableList;
