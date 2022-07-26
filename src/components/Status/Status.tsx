import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fonts";
import {
  StatusContainer,
  ClosedTemporarily,
  Open,
  Closed,
} from "./Status.styles";

interface StatusProps {
  status: string;
  closingTime: string;
  openingTime: string;
}

export const Status: React.FC<StatusProps> = ({
  status,
  closingTime,
  openingTime,
}) => {
  return (
    <StatusContainer>
      {status === "closedTemporarily" ? (
        <ClosedTemporarily>{"Temporarily closed"}</ClosedTemporarily>
      ) : null}
      <Icon
        name="clock"
        size={parseInt(fontSizes.body, 10)}
        color={colors.ui.success}
      />
      {status === "open" ? (
        <>
          <Open> {"Open Now"}</Open> •
          <Closed>{` Closes @ ${closingTime}`}</Closed>
        </>
      ) : (
        <>
          <Closed> {"Closed"}</Closed> •<Open>{` Opens @ ${openingTime}`}</Open>
        </>
      )}
    </StatusContainer>
  );
};

export default Status;
