import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { Departure, Schedule, generateInitialSeats } from "@/root/types";

export async function getDeparture(routeId: string, date: string, schedule: Schedule): Promise<Departure | null> {
    const dbInstance = collection(db, "departures");
    const q = query(dbInstance, where("routeId", "==", routeId), where("departureDate", "==", date), where("departureTime", "==", schedule.departureTime));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.docs.length > 0) {
        const data: Departure[] = [];
        querySnapshot.docs.forEach((doc) => {
            const departure = doc.data() as Departure;
            data.push(departure);
        });
        return data[0];
    }
    const dbInstanceDepartures = collection(db, "departures");
    const newDocRef = doc(dbInstanceDepartures);
    await setDoc(newDocRef, {
        id: newDocRef.id,
        routeId: routeId,
        departureTime: schedule.departureTime,
        departureDate: date,
        schedule: schedule,
        locked: false,
        seats: generateInitialSeats(),
    });
    const snapshot = await getDoc(newDocRef);
    const newDeparture = snapshot.data() as Departure;
    return newDeparture;
}

export async function getDepartures() {
    const dbInstance = collection(db, "departures");
    const querySnapshot = await getDocs(dbInstance);

    const data: Departure[] = [];
    querySnapshot.forEach((doc) => {
        data.push(doc.data() as Departure);
    });

    return data;
}
