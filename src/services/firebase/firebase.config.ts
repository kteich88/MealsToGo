import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from "@env";
import { getEnvironmentVariable } from "utils/helpers";

export const firebaseConfig = {
  apiKey: getEnvironmentVariable(API_KEY),
  authDomain: getEnvironmentVariable(AUTH_DOMAIN),
  projectId: getEnvironmentVariable(PROJECT_ID),
  storageBucket: getEnvironmentVariable(STORAGE_BUCKET),
  messagingSenderId: getEnvironmentVariable(MESSAGING_SENDER_ID),
  appId: getEnvironmentVariable(APP_ID),
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
