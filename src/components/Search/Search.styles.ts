import styled from "styled-components";
import { StatusBar, View } from "react-native";
import { spacing } from "../../infrastructure/theme/spacing";

export const SearchContainer = styled(View)`
  padding: ${spacing.lg};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
