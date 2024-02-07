import { db } from "../config/firebase";
import { User } from "@/root/types";
import { addDoc, collection } from "firebase/firestore";

export default async function loadUser(users: User[]) {
    const dbInstance = collection(db, "users");

    const saveUsers = async () => {
        for (const user of users) {
            await addDoc(dbInstance, user);
        }
    };

    await saveUsers();
    return "User created";
}
