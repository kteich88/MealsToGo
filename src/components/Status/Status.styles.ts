import styled from "styled-components/native";
import { colors } from "../../infrastructure/theme/colors";
import { spacing } from "../../infrastructure/theme/spacing";

export const StatusContainer = styled.Text`
  margin-bottom: ${spacing.md};
`;

export const Open = styled.Text`
  color: ${colors.ui.success};
`;

export const Closed = styled.Text`
  color: ${colors.ui.error};
`;
export const ClosedTemporarily = styled.Text``;
