import React from "react";
import { List } from "react-native-paper";
import { Grocery } from "../../utils/types/grocery.types";
import { GroceriesContainer, GroceryItem, Loading } from "./groceries.styles";
import ListIcon from "../../components/Lists/ListItem";
import Search from "../../components/Search/SearchBar";
import { SafeArea } from "components/SafeArea/SafeArea.styles";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";

interface GroceriesScreenProps {
  groceries: Grocery[];
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
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
