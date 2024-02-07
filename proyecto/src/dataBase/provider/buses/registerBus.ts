import { db } from "../config/firebase";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { Bus } from "@/root/types";

export default async function busRegister(bus: Bus) {
    const dbInstanceBuses = collection(db, "buses");
    const q = query(dbInstanceBuses, where("busNumber", "==", bus.busNumber), where("plateNumber", "==", bus.plateNumber));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
        return "The bus is already registered";
    } else {
        const dbInstance = collection(db, "buses");
        const newDocRef = doc(dbInstance);
        const saveBus = async () => {
            await setDoc(newDocRef, {
                ...bus,
                id: newDocRef.id,
            });
        };
        await saveBus();
        return "Bus created";
    }
}
