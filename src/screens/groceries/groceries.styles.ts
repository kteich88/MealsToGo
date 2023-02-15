import styled from "styled-components/native";
import { ActivityIndicator, List } from "react-native-paper";
import { theme } from "infrastructure/theme/theme";

export const GroceriesContainer = styled.View`
  padding: ${theme.spacing.sm};
`;

export const GroceryItem = styled(List.Item)`
  padding: ${theme.spacing.md};
`;

export const SearchContainer = styled.View`
  padding: ${theme.spacing.md};
`;

export const Loading = styled(ActivityIndicator)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
`;
