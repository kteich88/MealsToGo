import Icon from "components/Icons/Icon";
import { styles } from "./Dropdown.styles";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import useDropdown from "hooks/useDropdown";
import { DropdownLabel } from "./constants";
import { theme } from "theme/theme";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { IngredientLocation } from "screens/ingredients/constants";

interface DropdownProps {
  label: IngredientLocation;
  data: string[];
}

const Dropdown = ({ label, data }: DropdownProps) => {
  const { selected, setSelected, selection, setSelection } = useDropdown();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => {
          setSelected(!selected);
        }}
      >
        <Text style={styles.dropdownText}>
          {selection == undefined ? label : selection}
        </Text>
        {selected ? (
          <Icon
            type="Octicons"
            name="chevron-up"
            size={theme.size.sm}
            style={styles.icon}
          />
        ) : (
          <Icon
            type="Octicons"
            name="chevron-down"
            size={theme.size.sm}
            style={styles.icon}
          />
        )}
      </TouchableOpacity>
      {selected ? (
        <ScrollView>
          {data.map((item) => {
            return (
              <TouchableOpacity
                key={item}
                style={styles.dropdownList}
                onPress={() => {
                  setSelection(item);
                  setSelected(!selected);
                }}
              >
                <Text style={styles.dropdownText}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      ) : null}
    </View>
  );
};

export default Dropdown;
