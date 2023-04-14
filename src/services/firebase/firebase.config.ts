import { getEnvironmentVariable } from "../helpers";
import Constants from "expo-constants";

const API_KEY = Constants.expoConfig?.extra?.API_KEY;
const AUTH_DOMAIN = Constants.expoConfig?.extra?.AUTH_DOMAIN;
const PROJECT_ID = Constants.expoConfig?.extra?.PROJECT_ID;
const STORAGE_BUCKET = Constants.expoConfig?.extra?.STORAGE_BUCKET;
const MESSAGING_SENDER_ID = Constants.expoConfig?.extra?.MESSAGING_SENDER_ID;
const APP_ID = Constants.expoConfig?.extra?.APP_ID;

export const firebaseConfig = {
  apiKey: getEnvironmentVariable(API_KEY),
  authDomain: getEnvironmentVariable(AUTH_DOMAIN),
  projectId: getEnvironmentVariable(PROJECT_ID),
  storageBucket: getEnvironmentVariable(STORAGE_BUCKET),
  messagingSenderId: getEnvironmentVariable(MESSAGING_SENDER_ID),
  appId: getEnvironmentVariable(APP_ID),
};
