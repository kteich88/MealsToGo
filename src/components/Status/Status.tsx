import React from "react";
import { StatusContainer } from "./Status.styles";
import { renderHoursOfOperation } from "./Status.helpers";

interface StatusProps {
  status: string;
}

const Status: React.FC<StatusProps> = ({ status }) => {
  return <StatusContainer>{renderHoursOfOperation(status)}</StatusContainer>;
};

export default Status;
