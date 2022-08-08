import React from "react";
import { colors } from "../../infrastructure/theme";
import { ClosedTemporarily, Open, Closed } from "./Status.styles";
import { ClosedIcon, ClockIcon } from "../../utils/icons";

export const renderHoursOfOperation = (status: string) => {
  switch (status) {
    case "closedTemporarily":
      return (
        <>
          <ClosedIcon />
          <ClosedTemporarily>{"  Temporarily closed"}</ClosedTemporarily>
        </>
      );
    case "open":
      return (
        <>
          {ClockIcon(colors.ui.success)}
          <Open> {"Open Now"}</Open>
        </>
      );

    case "closed":
      return (
        <>
          {ClockIcon(colors.ui.error)}
          <Closed> {"Closed"}</Closed>
        </>
      );
    default:
      return null;
  }
};
