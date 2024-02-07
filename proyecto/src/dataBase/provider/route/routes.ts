import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../config/firebase";
import { Route } from "@/root/types";

export default async function getRoutes(): Promise<Route[]> {
    const data: Route[] = [];
    const dbInstance = collection(db, "routes");
    const limitQuery = query(dbInstance);
    const querySnapshot = await getDocs(limitQuery);
    querySnapshot.forEach((doc) => {
        data.push(doc.data() as Route);
    });
    return data;
}
