import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export interface AuthenticationContextType {
  isAuthenticated: boolean;
  user: firebase.User | null;
  isLoading: boolean;
  error: string | null;
  onLogin: (email: string, password: string) => void;
  onRegister: (email: any, password: any, repeatedPassword: any) => void;
  onLogout: () => void;
}
