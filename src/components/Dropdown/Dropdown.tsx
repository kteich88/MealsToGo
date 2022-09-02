import Icon, { IconProps } from "components/Icon/Icon";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Dropdown.styles";

interface DropdownProps {
  label: string;
  setIcon: Dispatch<SetStateAction<IconProps | undefined>>;
  setLocation: Dispatch<SetStateAction<string>>;
}

interface StateProps {
  type: string;
  name: any;
  location: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, setIcon, setLocation }) => {
  const [toggle, setToggle] = useState(false);

  const onPress = ({ type, name, location }: StateProps) => {
    setIcon({ type, name });
    setLocation(location);
    setToggle(!toggle);
  };

  return (
    <TouchableOpacity
      style={styles.dropdown}
      onPress={() => setToggle(!toggle)}
    >
      {toggle && (
        <View style={styles.dropdownSelections}>
          <TouchableOpacity
            style={styles.selection}
            onPress={() =>
              onPress({
                type: "FontAwesome5",
                name: "bread-slice",
                location: "pantry",
              })
            }
          >
            <Icon
              style={styles.icon}
              type={"FontAwesome5"}
              name={"bread-slice"}
            />
            <Text>{"PANTRY"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selection}
            onPress={() =>
              onPress({
                type: "MaterialCommunityIcon",
                name: "fridge",
                location: "refrigerator",
              })
            }
          >
            <Icon
              style={styles.icon}
              type={"MaterialCommunityIcon"}
              name={"fridge"}
            />
            <Text>{"REFRIGERATOR"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.selection}
            onPress={() =>
              onPress({
                type: "FontAwesome",
                name: "snowflake-o",
                location: "freezer",
              })
            }
          >
            <Icon
              style={styles.icon}
              type={"FontAwesome"}
              name={"snowflake-o"}
            />
            <Text>{"FREEZER"}</Text>
          </TouchableOpacity>
        </View>
      )}
      <Text style={styles.text}>{label}</Text>
      <Icon style={styles.chevron} type="Entypo" name="chevron-down" />
    </TouchableOpacity>
  );
};

export default Dropdown;
