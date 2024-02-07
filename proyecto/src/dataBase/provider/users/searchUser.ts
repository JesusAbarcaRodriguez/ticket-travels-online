 import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { User } from "@/root/types";

export default async function searchUser(name: string) {

        const dbInstance = collection(db, "users");
        const search = query(dbInstance, where("name", ">=", name), where("name", "<", name + "\uf8ff"));
        const querySnapshot = await getDocs(search);
        if (querySnapshot.docs.length > 0) {
            const data: User[] = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data() as User);
            });
            return data;
        }
        return [];

}