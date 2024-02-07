import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { User } from "@/root/types/User.type";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import resetPass from "./reset";

export default async function userRegister(email: string, username: string, password: string, user: User) {
    const dbInstanceUser = collection(db, "users");
    const q = query(dbInstanceUser, where("mail", "==", email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
        return "the user was already registered";
    }
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    if (!newUser || !newUser.user || !newUser.user.uid) {
        throw new Error("Error creating user");
    }
    await updateProfile(newUser.user, { displayName: username });
    const uid = newUser.user.uid;
    const dbInstance = collection(db, "users");
    const saveUser = async () => {
        await addDoc(dbInstance, {
            uid: uid,
            name: user.name,
            type: user.type,
            contact: user.contact,
            mail: user.mail,
        });
    };
    await saveUser();
    resetPass(email);
    return "User created";
}
