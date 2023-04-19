import { AuthenticationContext } from "contexts/authentication/Authentication.context";
import { HookErrorMessage } from "hooks/constants";
import { useContext } from "react";

const useAuthentication = () => {
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw new Error(HookErrorMessage.auth);
  }

  return context;
};

export default useAuthentication;
