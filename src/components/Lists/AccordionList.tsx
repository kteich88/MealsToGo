import React, { useState } from "react";
import { ScrollView, SectionList, Text, View } from "react-native";

interface AccordionListProps {
  data: any;
}

const AccordionList: React.FC<AccordionListProps> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <ScrollView>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
          renderItem={({ item }) => (
            <View>
              <Text>{item}</Text>
            </View>
          )}
        />
      </ScrollView>
    </>
  );
};

export default AccordionList;
