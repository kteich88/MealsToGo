import React, { useState, createContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { loginRequest } from "../services/authentication/authentication.service";
import { User } from "../services/types/authentication.types";
import { errorHandler } from "../utils/firebase/firebase-error-handler";
interface AuthenticationContext {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: string | null;
  onLogin: (email: string, password: string) => void;
  onRegister: (email: any, password: any, repeatedPassword: any) => void;
  onLogout: () => void;
}

export const AuthenticationContext = createContext<AuthenticationContext>(
  {} as AuthenticationContext,
);

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState<string | null>(null);

  firebase.auth().onAuthStateChanged((authenticatedUser) => {
    if (authenticatedUser) {
      setUser(authenticatedUser);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((loginUser) => {
        setUser(loginUser);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(errorHandler(err.message));
      });
  };

  const onRegister = (
    email: string,
    password: string,
    repeatedPassword: string,
  ) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((createUser) => {
        setUser(createUser);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(errorHandler(err.message));
      });
  };

  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(errorHandler(err.message));
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
