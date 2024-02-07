import { collection, doc, deleteDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
export default async function deleteUserFromCollection(uid: string) {
    const dbInstance = collection(db, "users");
    const q = query(dbInstance, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
        return null;
    }
    const docRef = doc(db, "users", querySnapshot.docs[0].id);
    await deleteDoc(docRef);
    return "User deleted successfully from collection";
}
