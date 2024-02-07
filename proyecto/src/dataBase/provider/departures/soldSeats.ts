import { collection, doc, getDocs, query, runTransaction, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { Departure, Seat } from "@/root/types";

export default async function soldSeats(departureId: string, seats: number[]): Promise<string> {
    const dbInstance = collection(db, "departures");
    const q = query(dbInstance, where("id", "==", departureId));
    const querySnapshot = await getDocs(q);

    const departure = querySnapshot.docs[0]?.data() as Departure;

    await runTransaction(db, async (transaction) => {
        const departureRef = departure ? doc(dbInstance, departure.id) : null;
        if (departureRef) {
            const departureSnapshot = await transaction.get(departureRef);
            if (departureSnapshot.exists()) {
                const updatedSeats = departureSnapshot.data().seats.map((seat: Seat) => {
                    if (seat.state === "blocked" && seats.includes(seat.number)) {
                        return { ...seat, state: "sold" };
                    }
                    return seat;
                });

                transaction.update(departureRef, { seats: updatedSeats, locked: true });
            }
        }
    });

    return "seatsLocked";
}
