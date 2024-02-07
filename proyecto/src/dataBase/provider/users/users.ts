import { DocumentData, collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../config/firebase";

export default async function getUsers() {
    const dbInstance = collection(db, "users");
    const q = query(dbInstance);
    const querySnapshot = await getDocs(q);
    const data: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return data;
}
