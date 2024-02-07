import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { User } from "@/root/types/User.type";

export default async function getUsersByType(type: string): Promise<User[]> {
    const dbInstance = collection(db, "users");
    const q = query(dbInstance, where("type", "==", type),limit(50));
    const querySnapshot = await getDocs(q);
    const data: User[] = [];
    querySnapshot.docs.forEach((doc) => {
        const user = doc.data() as User;
        data.push(user);
    });
    return data;
}
