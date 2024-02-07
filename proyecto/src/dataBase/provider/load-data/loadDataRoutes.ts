import { Route } from "@/root";
import { db } from "../config/firebase";
import { setDoc, collection, doc, query, where, getDocs } from "firebase/firestore";

export default async function loadRoute(routes: Route[]) {
    const dbInstanceRoute = collection(db, "routes");
    const q = query(dbInstanceRoute, where("startPlace", "==", routes[0].startPlace), where("destinationPlace", "==", routes[0].destinationPlace));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
        return "Error, the data was already loaded";
    }

    const saveRoutes = async () => {
        for (const route of routes) {
            const dbInstance = collection(db, "routes");
            const newDocRef = doc(dbInstance);
            await setDoc(newDocRef, { ...route, id: newDocRef.id });
        }
    };

    await saveRoutes();
    return "Routes created";
}
