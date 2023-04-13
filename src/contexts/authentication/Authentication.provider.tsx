import React, { useState, useEffect, ReactNode } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { loginRequest } from "services/firebase/authentication.service";
import { AuthenticationContext } from "./Authentication.context";

interface AuthenticationProviderProps {
  children?: ReactNode;
}

const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<firebase.User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authenticatedUser) => {
      if (authenticatedUser) {
        setUser(authenticatedUser);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((loginUser) => {
        setUser(loginUser.user);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
        setTimeout(() => {
          setError(null);
        }, 3000);
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
        setUser(createUser.user);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
        setTimeout(() => {
          setError(null);
        }, 3000);
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
        setError(err.message);
        setTimeout(() => {
          setError(null);
        }, 3000);
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

export default AuthenticationProvider;
