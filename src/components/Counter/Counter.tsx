import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "components/Icon/Icon";
import { styles } from "./Counter.styles";
import { theme } from "infrastructure/theme";

interface CounterProps {
  amount: number;
}

const Counter: React.FC<CounterProps> = ({ amount }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount(amount);
  }, [amount]);

  return (
    <View style={styles.counter}>
      <TouchableOpacity
        style={styles.counter}
        onPress={() => (count === 0 ? setCount(0) : setCount(count - 1))}
      >
        <Icon
          style={styles.icon}
          type={"EvilIcons"}
          name={"minus"}
          size={theme.spacing.twenty}
        />
      </TouchableOpacity>

      <Text>{count}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Icon
          style={styles.icon}
          type={"EvilIcons"}
          name={"plus"}
          size={theme.spacing.twenty}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
