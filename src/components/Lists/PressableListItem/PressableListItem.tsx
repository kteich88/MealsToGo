import React, { ReactNode } from "react";
import { Pressable, Text } from "react-native";
import Icon from "components/Icons/Icon";
import { theme } from "infrastructure/theme/theme";
import { styles } from "./PressableListItem.styles";

interface PressableListProps {
  title: string;
  onPress: () => void;
  children?: ReactNode;
}

const PressableListItem: React.FC<PressableListProps> = ({
  onPress,
  title,
  children,
}) => {
  console.log(title);
  return (
    <Pressable style={styles.listItem} onPress={onPress}>
      {children}
      <Text style={styles.text}>{title}</Text>
      <Icon
        style={styles.chevron}
        type={"Entypo"}
        name={"chevron-right"}
        size={theme.size.sm}
      />
    </Pressable>
  );
};

export default PressableListItem;
