import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

interface AccordionListProps {
  menu: {
    meal: string;
    icon: string;
    items: string[];
  };
}

const AccordionList: React.FC<AccordionListProps> = ({ menu }) => {
  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <ScrollView>
        <List.Accordion
          key={menu.meal}
          title={menu.meal}
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} icon={menu.icon} />}
          expanded={expanded}
          onPress={handlePress}
        >
          {menu.items.map((item) => (
            <List.Item title={item} />
          ))}
        </List.Accordion>
      </ScrollView>
    </>
  );
};

export default AccordionList;
