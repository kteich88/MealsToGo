import React from "react";
import { Pressable, View } from "react-native";
import Icon from "components/Icons/Icon";
import { styles } from "./Counter.styles";
import { theme } from "theme/theme";
import useIngredients from "hooks/ingredients/useIngredients";
import { TextInput } from "react-native-gesture-handler";

interface CounterProps {
  amount: string;
}

const Counter = ({ ...props }: CounterProps) => {
  const { amount } = props;
  const { setAmount } = useIngredients();
  return (
    <View style={styles.counter}>
      <Pressable
        style={styles.counter}
        onPress={() =>
          amount === "0" ? setAmount("0") : setAmount(`${parseInt(amount) - 1}`)
        }
      >
        <Icon
          style={styles.icon}
          type={"EvilIcons"}
          name={"minus"}
          size={theme.size.md}
        />
      </Pressable>
      <TextInput style={styles.text} selectionColor={theme.colors.turquoise}>
        {amount}
      </TextInput>
      <Pressable onPress={() => setAmount(`${parseInt(amount) + 1}`)}>
        <Icon
          style={styles.icon}
          type={"EvilIcons"}
          name={"plus"}
          size={theme.size.md}
        />
      </Pressable>
    </View>
  );
};

export default Counter;
