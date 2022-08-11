import React from "react";
import { List } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Grocery } from "../../utils/types/groceries.types";
import { GroceriesContainer, GroceryItem } from "./groceries.styles";
import ListIcon from "../../components/Lists/ListIcon";
import { SearchContainer } from "../../components/Search/Search.styles";
import Search from "../../components/Search/Search";
import { SafeArea } from "../../components/SafeArea/SafeArea.styles";

interface GroceriesScreenProps {
  groceries: Grocery[];
  navigation: NativeStackNavigationProp<any>;
}

export const GroceriesScreen: React.FC<GroceriesScreenProps> = ({
  groceries,
  navigation,
}) => {
  return (
    <SafeArea>
      {isLoading ? (
        <Loading size="large" color="#03F7EB" />
      ) : (
        <>
          <SearchContainer>
            <Search placeholder={"Search for location..."} />
          </SearchContainer>

          {/* <Favorites favorites={favorites} navigation={navigation} /> */}

          <GroceriesContainer>
            <List.Section>
              {groceries.map((grocery) => {
                const IconComponent = () => {
                  <ListIcon iconProps={grocery.icon} />;
                };
                return (
                  <GroceryItem
                    key={grocery.id.toString()}
                    title={grocery.title}
                    description={grocery.description}
                    left={() => IconComponent}
                    onPress={() => navigation.navigate("Favorites")}
                  />
                );
              })}
            </List.Section>
          </GroceriesContainer>
        </>
      )}
    </SafeArea>
  );
};
