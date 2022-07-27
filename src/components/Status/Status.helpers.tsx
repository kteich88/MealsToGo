import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fonts";
import { ClosedTemporarily, Open, Closed } from "./Status.styles";

export const renderHoursOfOperation = (status: string) => {
  switch (status) {
    case "isClosedTemporarily":
      return (
        <>
          <Icon
            name="close-octagon"
            size={parseInt(fontSizes.body, 10)}
            color={colors.ui.error}
          />
          <ClosedTemporarily>{"Temporarily closed"}</ClosedTemporarily>
        </>
      );
    case "closed":
      return (
        <>
          <Icon
            name="clock-outline"
            size={parseInt(fontSizes.body, 10)}
            color={colors.ui.error}
          />
          <Closed> {"Closed"}</Closed>
        </>
      );
    default:
      return (
        <>
          <Icon
            name="clock-outline"
            size={parseInt(fontSizes.body, 10)}
            color={colors.ui.success}
          />
          <Open> {"Open Now"}</Open>
        </>
      );
  }
};
