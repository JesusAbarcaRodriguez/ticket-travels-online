import { Route } from "@/root/types/Route.type";
import { db } from "../config/firebase";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";

export default async function registerRoute(route: Route) {
    if (!route.startPlace || !route.destinationPlace || !route.duration || !route.schedules || !route.price) {
        throw new Error("Please provide all required information");
    }
    const dbInstanceRoute = collection(db, "routes");
    const q = query(dbInstanceRoute, where("startPlace", "==", route.startPlace), where("destinationPlace", "==", route.destinationPlace));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
        return "the route was already registered";
    } else {
        const routesCollection = collection(db, "routes");
        const newDocRef = doc(routesCollection);

        await setDoc(newDocRef, {
            ...route,
            id: newDocRef.id,
        });
        return "Route created";
    }
}
