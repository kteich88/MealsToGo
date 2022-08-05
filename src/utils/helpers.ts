export const getEnvironmentVariable = (KEY: string): string => {
  if (!KEY) {
    console.error(`Missing ${KEY} from environment.`);
    return "";
  }

  return KEY;
};
