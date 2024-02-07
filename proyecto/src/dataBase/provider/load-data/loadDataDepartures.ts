import { Departure } from "@/root";
import { db } from "../config/firebase";
import { setDoc, collection, doc, query, where, getDocs, addDoc } from "firebase/firestore";

export default async function loadDepartures(departures: Departure[]) {
    const dbInstanceRoute = collection(db, "departures");
    const q = query(dbInstanceRoute, where("id", "==", "-1"));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
        return "Error, the data was already loaded";
    }

    const dbInstance = collection(db, "departures");
    await addDoc(dbInstance, departures[0]);

    const saveRoutes = async () => {
        for (const route of departures) {
            const dbInstance = collection(db, "departures");
            const newDocRef = doc(dbInstance);
            await setDoc(newDocRef, { ...route, id: newDocRef.id });
        }
    };

    await saveRoutes();
    return "Departures created";
}
