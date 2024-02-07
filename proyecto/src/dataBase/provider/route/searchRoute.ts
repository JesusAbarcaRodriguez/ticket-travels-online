import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { Route } from "@/root/types";

export default async function searchRoute(place: string) {
    const dbInstance = collection(db, "routes");

    const query1 = query(dbInstance, where("destinationPlace", ">=", place), where("destinationPlace", "<", place + "\uf8ff"));
    const query2 = query(dbInstance, where("startPlace", ">=", place), where("startPlace", "<", place + "\uf8ff"));

    const snapshot1 = await getDocs(query1);
    const snapshot2 = await getDocs(query2);

    const data: Route[] = [];

    snapshot1.forEach((doc) => {
        const route = doc.data() as Route;
        data.push(route);
    });

    snapshot2.forEach((doc) => {
        const route = doc.data() as Route;
        if (!data.some((r) => r.id === route.id)) {
            data.push(route);
        }
    });

    if (data.length > 0) {
        return data;
    }
    return [];
}
