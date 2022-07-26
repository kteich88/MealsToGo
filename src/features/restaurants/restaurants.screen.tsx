import React from "react";
import styled from "styled-components/native";
import { StatusBar, SafeAreaView } from "react-native";
import { spacing } from "../../infrastructure/theme/spacing";
import Search from "../../components/Search/Search";
import Restaurant from "../../components/Cards/Restaurant/Restaurant";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: ${spacing.lg};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${spacing.lg};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Search value={""} />
    </SearchContainer>
    <RestaurantListContainer>
      <Restaurant
        name={"Good Eats"}
        icons={[]}
        photos={[
          "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ]}
        address={"123 Street Road, City, ST 12345"}
        isOpenNow={true}
        rating={4}
        isClosedTemporarily={false}
      />
    </RestaurantListContainer>
  </SafeArea>
);
