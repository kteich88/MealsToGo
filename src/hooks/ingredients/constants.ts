import { collection, doc } from "firebase/firestore";
import { db } from "services/firebase/firebase.db";

export const refrigeratorCollectionRef = collection(db, "refrigerator");
export const pantryCollectionRef = collection(db, "pantry");
export const freezerCollectionRef = collection(db, "freezer");

/**
 * Create a Firestore collection reference
 * @param collectionName the collection within Firestore
 * @returns a reference to a Firestore collection
 */
export const collectionRef = (collectionName: string) => {
  return collection(db, collectionName);
};

/**
 * Create a Firestore document reference
 * @param collection the collection a document belongs to
 * @param docId the identifier of the document
 * @returns a reference to a Firestore document in a collection
 */
export const documentRef = (collection: string, docId: string) => {
  return doc(db, collection, docId);
};
