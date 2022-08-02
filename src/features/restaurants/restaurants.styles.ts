import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import { spacing } from "../../infrastructure/theme/spacing";

export const SearchContainer = styled.View`
  padding: ${spacing.lg};
`;

export const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${spacing.xxs} ${spacing.lg};
  margin-bottom: ${spacing.lg};
`;

export const Loading = styled(ActivityIndicator)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
`;
