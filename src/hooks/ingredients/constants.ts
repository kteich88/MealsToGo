import { collection } from "firebase/firestore";
import { db } from "services/firebase/firebase.db";

export const refrigeratorCollectionRef = collection(db, "refrigerator");
export const pantryCollectionRef = collection(db, "pantry");
export const freezerCollectionRef = collection(db, "freezer");
