import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { Route } from "@/root";

export default async function editRoute(route: Route) {
    const docRef = doc(collection(db, "routes"), route.id);
    await updateDoc(docRef, route);
    return "Route edited ";
}
