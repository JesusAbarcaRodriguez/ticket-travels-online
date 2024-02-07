import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { Route } from "@/root/types/Route.type";

export default async function getRoutesById(id: string): Promise<Route> {
    const dbInstance = collection(db, "routes");
    const q = query(dbInstance, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    const data: Route[] = [];
    querySnapshot.docs.forEach((doc) => {
        const route = doc.data() as Route;
        data.push(route);
    });
    return data[0];
}
