import styled from "styled-components/native";
import { theme } from "infrastructure/theme";

export const StatusContainer = styled.Text`
  margin-bottom: ${theme.spacing.sm};
`;

export const Open = styled.Text`
  color: ${theme.colors.limeGreen};
`;

export const Closed = styled.Text`
  color: ${theme.colors.errorRed};
`;
export const ClosedTemporarily = styled.Text``;
