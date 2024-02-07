import { User } from "@/root";
import { db } from "../config/firebase";
import { collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
export default async function editUserFromCollection(user: User) {
    const querySnapshot = await getDocs(query(collection(db, "users"), where("uid", "==", user.uid)));
    const userRef = querySnapshot.docs[0];
    const docRef = doc(collection(db, "users"), userRef.id);
    await updateDoc(docRef, user);
    return "User edited ";
}
