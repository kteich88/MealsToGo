import MapView from "react-native-maps";
import styled from "styled-components/native";
import { spacing } from "../../infrastructure/theme";

export const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const SearchContainer = styled.View`
  padding: ${spacing.lg};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;
