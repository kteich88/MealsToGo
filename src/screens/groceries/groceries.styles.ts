import styled from "styled-components/native";
import { spacing } from "../../infrastructure/theme";
import { ActivityIndicator, List } from "react-native-paper";

export const GroceriesContainer = styled.View`
  padding: ${spacing.md};
`;

export const GroceryItem = styled(List.Item)`
  padding: ${spacing.lg};
`;

export const SearchContainer = styled.View`
  padding: ${spacing.lg};
`;

export const Loading = styled(ActivityIndicator)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
`;
