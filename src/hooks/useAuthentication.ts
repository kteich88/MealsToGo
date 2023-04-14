import { AuthenticationContext } from "contexts/authentication/Authentication.context";
import { useContext } from "react";
import { HookErrorMessage } from "./constants";

const useAuthentication = () => {
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw new Error(HookErrorMessage.auth);
  }

  return context;
};

export default useAuthentication;