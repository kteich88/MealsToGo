import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const loginRequest = (email: string, password: string) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
