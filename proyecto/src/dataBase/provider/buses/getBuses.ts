import { db } from "../config/firebase";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { Bus } from "@/root/types";

export default async function getBuses() {
    const dbInstance = collection(db, "buses");
    const limitedQuery = query(dbInstance, limit(5));
    const querySnapshot = await getDocs(limitedQuery);
    const buses: Bus[] = querySnapshot.docs.map((doc) => doc.data() as Bus);
    return buses;
}
