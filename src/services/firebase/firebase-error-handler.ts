import { firebaseErrorCodes } from "./firebase-error-codes";

const determineErrorCodeMessage = (error: string, code: string): string => {
  let message: string = "";

  if (error.includes(code)) {
    switch (code) {
      case "auth/claims-too-large":
        message =
          "The claims payload exceeds the maximum allowed size of 1000 bytes.";
        break;
      case "auth/email-already-exists":
        message =
          "The provided email is already in use by an existing user. Each user must have a unique email.";
        break;
      case "auth/id-token-expired":
        message = "The provided Firebase ID token is expired.";
        break;
      case "auth/id-token-revoked":
        message = "The Firebase ID token has been revoked.";
        break;
      case "auth/insufficient-permission":
        message =
          "The credential used to initialize the Admin SDK has insufficient permission to access the requested Authentication resource. Refer to Set up a Firebase project for documentation on how to generate a credential with appropriate permissions and use it to authenticate the Admin SDKs.";
        break;
      case "auth/internal-error":
        message = "Internal server error. Please try again.";
        break;
      case "auth/invalid-argument":
        message =
          "An invalid argument was provided to an Authentication method. The error message should contain additional information.";
        break;
      case "auth/invalid-claims":
        message =
          "The custom claim attributes provided to setCustomUserClaims() are invalid.";
        break;
      case "auth/invalid-continue-uri":
        message = "The continue URL must be a valid URL string.";
        break;
      case "auth/invalid-creation-time":
        message = "The creation time must be a valid UTC date string.";
        break;
      case "auth/invalid-credential":
        message =
          "The credential used to authenticate the Admin SDKs cannot be used to perform the desired action. See Initialize the SDK for documentation on how to authenticate the Admin SDKs with a certificate credential.";
        break;
      case "auth/invalid-disabled-field":
        message =
          "The provided value for the disabled user property is invalid. It must be a boolean.";
        break;
      case "auth/invalid-display-name":
        message =
          "The provided value for the displayName user property is invalid. It must be a non-empty string.";
        break;
      case "auth/invalid-dynamic-link-domain":
        message =
          "The provided dynamic link domain is not configured or authorized for the current project.";
        break;
      case "auth/invalid-email":
        message = "Invalid Email Address";
        break;
      case "auth/invalid-email-verified":
        message =
          "The provided value for the emailVerified user property is invalid. It must be a boolean.";
        break;
      case " auth/invalid-hash-algorithm":
        message =
          "The hash algorithm must match one of the strings in the list of supported algorithms.";
        break;
      case "auth/invalid-hash-block-size":
        message = "The hash block size must be a valid number.";
        break;
      case "auth/invalid-hash-derived-key-length":
        message = "The hash derived key length must be a valid number.";
        break;
      case "auth/invalid-hash-key":
        message = "The hash key must a valid byte buffer.";
        break;
      case "auth/invalid-hash-memory-cost":
        message = "The hash memory cost must be a valid number.";
        break;
      case "auth/invalid-hash-parallelization":
        message = "The hash parallelization must be a valid number.";
        break;
      case "auth/invalid-hash-rounds":
        message = "The hash rounds must be a valid number.";
        break;
      case "auth/invalid-hash-salt-separator":
        message =
          "The hashing algorithm salt separator field must be a valid byte buffer.";
        break;
      case "auth/invalid-id-token":
        message = "The provided ID token is not a valid Firebase ID token.";
        break;
      case "auth/invalid-last-sign-in-time":
        message = "The last sign-in time must be a valid UTC date string.";
        break;
      case "auth/invalid-page-token":
        message =
          "The provided next page token in listUsers() is invalid. It must be a valid non-empty string.";
        break;
      case "auth/invalid-password":
        message =
          "The provided value for the password user property is invalid. It must be a string with at least six characters.";
        break;
      case "auth/invalid-password-hash":
        message = "The password hash must be a valid byte buffer.";
        break;
      case "auth/invalid-password-salt":
        message = "The password salt must be a valid byte buffer.";
        break;
      case "auth/invalid-phone-number":
        message =
          "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.";
        break;
      case "auth/invalid-photo-url":
        message =
          "The provided value for the photoURL user property is invalid. It must be a string URL.";
        break;
      case "auth/invalid-provider-data":
        message = "The providerData must be a valid array of UserInfo objects.";
        break;
      case "auth/invalid-provider-id":
        message =
          "The providerId must be a valid supported provider identifier string.";
        break;
      case "auth/invalid-oauth-responsetype":
        message = "Only exactly one OAuth responseType should be set to true.";
        break;
      case "auth/invalid-session-cookie-duration":
        message =
          "The session cookie duration must be a valid number in milliseconds between 5 minutes and 2 weeks.";
        break;
      case "auth/invalid-uid":
        message =
          "The provided uid must be a non-empty string with at most 128 characters.";
        break;
      case "auth/invalid-user-import":
        message = "The user record to import is invalid.";
        break;
      case "auth/maximum-user-count-exceeded":
        message =
          "The maximum allowed number of users to import has been exceeded.";
        break;
      case "auth/missing-android-pkg-name":
        message =
          "An Android Package Name must be provided if the Android App is required to be installed.";
        break;
      case "auth/missing-continue-uri":
        message = "A valid continue URL must be provided in the request.";
        break;
      case "auth/missing-hash-algorithm":
        message =
          "Importing users with password hashes requires that the hashing algorithm and its parameters be provided.";
        break;
      case "auth/missing-ios-bundle-id":
        message = "The request is missing a Bundle ID.";
        break;
      case "auth/missing-uid":
        message = "A uid identifier is required for the current operation.";
        break;
      case "auth/missing-oauth-client-secret":
        message =
          "The OAuth configuration client secret is required to enable OIDC code flow.";
        break;
      case "auth/operation-not-allowed":
        message =
          "The provided sign-in provider is disabled for your Firebase project. Enable it from the Sign-in Method section of the Firebase console.";
        break;
      case "auth/phone-number-already-exists":
        message =
          "The provided phoneNumber is already in use by an existing user. Each user must have a unique phoneNumber.";
        break;
      case "auth/project-not-found":
        message =
          "No Firebase project was found for the credential used to initialize the Admin SDKs. Refer to Set up a Firebase project for documentation on how to generate a credential for your project and use it to authenticate the Admin SDKs.";
        break;
      case "auth/reserved-claims":
        message =
          "One or more custom user claims provided to setCustomUserClaims() are reserved. For example, OIDC specific claims such as (sub, iat, iss, exp, aud, auth_time, etc) should not be used as keys for custom claims.";
        break;
      case "auth/session-cookie-expired":
        message = "The provided Firebase session cookie is expired.";
        break;
      case "auth/session-cookie-revoked":
        message = "The Firebase session cookie has been revoked.";
        break;
      case "auth/uid-already-exists":
        message =
          "The provided uid is already in use by an existing user. Each user must have a unique uid.";
        break;
      case "auth/unauthorized-continue-uri":
        message =
          "The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase Console.";
        break;
      case "auth/user-not-found":
        message = "User does not exist. Please register user account.";
        break;
      default:
        message = "This is not the error you are looking for.";
        break;
    }
  }
  return message;
};

export const errorHandler = (error: string) => {
  const errorMessage = firebaseErrorCodes.map((code: string) => {
    const message = determineErrorCodeMessage(error, code);
    return message;
  });
  return `Error: ${errorMessage.join("")}`;
};
