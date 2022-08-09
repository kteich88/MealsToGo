interface UserMetadata {
  creationTime: string;
  lastSignInTime: string;
}

interface UserInfo {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
}
/**
 * Firebase.User Type extends UserInfo
 */
export interface User {
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: UserMetadata;
  providerData: UserInfo[];
  refreshToken: string;
  tenantId: string | null;
}

const OperationType = {
  LINK: "link",
  REAUTHENTICATE: "reauthenticate",
  SIGN_IN: "signIn",
};

export interface UserCredential {
  operationType: typeof OperationType[keyof typeof OperationType];
  providerId: string | null;
  user: User;
}
