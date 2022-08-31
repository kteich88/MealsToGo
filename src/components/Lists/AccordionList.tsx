import Counter from "components/Counter/Counter";
import React from "react";
import { SectionList, Text, View } from "react-native";
import { styles } from "./index.styles";

interface AccordionListProps {
  data: any;
}

const AccordionList: React.FC<AccordionListProps> = ({ data }) => {
  // const [expanded, setExpanded] = useState(false);
  // const handlePress = () => setExpanded(!expanded);
  const DATA = [
    {
      title: "Freezer",
      data: [
        {
          amount: "1",
          authorID: "me",
          id: "ingredient",
          location: "fridge",
          name: "pizza",
        },
        {
          amount: "2",
          authorID: "me",
          id: "ingredient",
          location: "fridge",
          name: "ice cream",
        },
      ],
    },
    {
      title: "Pantry",
      data: [
        {
          amount: "5",
          authorID: "me",
          id: "ingredient",
          location: "pantry",
          name: "potato",
        },
        {
          amount: "2",
          authorID: "me",
          id: "ingredient",
          location: "pantry",
          name: "pasta",
        },
      ],
    },
    {
      title: "Refrigerator",
      data: [
        {
          amount: "1",
          authorID: "me",
          id: "ingredient",
          location: "fridge",
          name: "meats",
        },
        {
          amount: "13",
          authorID: "me",
          id: "ingredient",
          location: "fridge",
          name: "fruits",
        },
      ],
    },
  ];

  return (
    <SectionList
      // contentContainerStyle={styles.list}
      sections={DATA}
      keyExtractor={(item) => item.id}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.title}>{title}</Text>
      )}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.name}</Text>
          <Counter />
        </View>
      )}
    />
  );
};

export default AccordionList;
