import { Bus } from "@/root/types";
import { db } from "../config/firebase";
import { setDoc, collection, doc, query, where, getDocs } from "firebase/firestore";

export default async function loadBuses(buses: Bus[]) {
    const dbInstanceRoute = collection(db, "buses");
    const q = query(dbInstanceRoute, where("busNumber", "==", buses[0].busNumber), where("plateNumber", "==", buses[0].plateNumber));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
        return "Error, the data was already loaded";
    }

    const saveRoutes = async () => {
        for (const bus of buses) {
            const dbInstance = collection(db, "buses");
            const newDocRef = doc(dbInstance);
            await setDoc(newDocRef, { ...bus, id: newDocRef.id });
        }
    };

    await saveRoutes();
    return "Buses created";
}
