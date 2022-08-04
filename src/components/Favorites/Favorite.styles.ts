import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { sizes } from "../../infrastructure/theme";

export const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: ${sizes.xl}px;
  right: ${sizes.xl}px;
  z-index: 9;
`;
