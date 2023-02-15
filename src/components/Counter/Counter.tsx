import React, { Dispatch, SetStateAction } from "react";
import { Text, Pressable, View } from "react-native";
import Icon from "components/Icons/Icon";
import { styles } from "./Counter.styles";
import { theme } from "infrastructure/theme";

interface CounterProps {
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
}

const Counter: React.FC<CounterProps> = ({ amount, setAmount }) => {
  return (
    <View style={styles.counter}>
      <Pressable
        style={styles.counter}
        onPress={() => (amount === 0 ? setAmount(0) : setAmount(amount - 1))}
      >
        <Icon
          style={styles.icon}
          type={"EvilIcons"}
          name={"minus"}
          size={theme.spacing.sixtyFour}
        />
      </Pressable>

      <Text style={styles.text}>{amount}</Text>
      <Pressable onPress={() => setAmount(amount + 1)}>
        <Icon
          style={styles.icon}
          type={"EvilIcons"}
          name={"plus"}
          size={theme.spacing.sixtyFour}
        />
      </Pressable>
    </View>
  );
};

export default Counter;
