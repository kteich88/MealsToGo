import styled from "styled-components/native";
import { theme } from "infrastructure/theme";

export const StatusContainer = styled.Text`
  margin-bottom: ${theme.spacing.eight};
`;

export const Open = styled.Text`
  color: ${theme.colors.ui.success};
  font-weight: ${theme.fontWeights.bold};
`;

export const Closed = styled.Text`
  color: ${theme.colors.ui.error};
  font-weight: ${theme.fontWeights.bold};
`;
export const ClosedTemporarily = styled.Text`
  font-weight: ${theme.fontWeights.bold};
`;
