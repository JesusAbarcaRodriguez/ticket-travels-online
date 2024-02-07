import { Departure } from "@/root";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config";

export default async function getByDriver(uid: string, date: string): Promise<Departure[]> {
    const dbInstance = collection(db, "departures");
    const q = query(dbInstance, where("schedule.driverId.uid", "==", uid), where("departureDate", "==", date));
    const querySnapshot = await getDocs(q);
    const departures: Departure[] = querySnapshot.docs.map((doc) => doc.data() as Departure);
    return departures;
}
