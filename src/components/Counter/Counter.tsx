import React, { useState } from "react";
import { Pressable, View } from "react-native";
import Icon from "components/Icons/Icon";
import { styles } from "./Counter.styles";
import { theme } from "theme/theme";
import useIngredients from "hooks/ingredients/useIngredients";
import { TextInput } from "react-native-gesture-handler";

const Counter = () => {
  const [amount, setAmount] = useState(0);
  console.log("amount: ", amount);
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
          size={theme.size.md}
        />
      </Pressable>
      <TextInput style={styles.text} selectionColor={theme.colors.turquoise}>
        {amount}
      </TextInput>
      <Pressable onPress={() => setAmount(amount + 1)}>
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
