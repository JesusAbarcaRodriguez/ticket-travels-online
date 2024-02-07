import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { User } from "@/root/types";

export default async function getUserByUid(uid: string): Promise<User> {
    const dbInstance = collection(db, "users");
    const q = query(dbInstance, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    const user = querySnapshot.docs[0].data() as User;
    return user;
}
