import styled from "styled-components/native";
import { StatusBar, SafeAreaView } from "react-native";
import { spacing } from "../../infrastructure/theme/spacing";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchContainer = styled.View`
  padding: ${spacing.lg};
`;

export const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${spacing.xxs} ${spacing.lg};
  margin-bottom: ${spacing.lg};
`;
