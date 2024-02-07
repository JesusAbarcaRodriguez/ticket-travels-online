import { collection, doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export default async function deleteRouteFromCollection(id: string) {
    const docRef = doc(collection(db, "routes"), id);
    await deleteDoc(docRef);
    return "Route deleted";
}
