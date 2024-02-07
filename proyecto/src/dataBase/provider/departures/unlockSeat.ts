import { collection, doc, getDocs, query, runTransaction, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { Departure, Seat } from "@/root/types";

export default async function unlockSeat(departureId: string, seatNumber: number): Promise<boolean> {
    const dbInstance = collection(db, "departures");
    const q = query(dbInstance, where("id", "==", departureId));
    const querySnapshot = await getDocs(q);

    const departure = querySnapshot.docs[0]?.data() as Departure;
    let unlocked: boolean = false;
    let seatsLocked: number[] = [];
    await runTransaction(db, async (transaction) => {
        const departureRef = departure ? doc(dbInstance, departure.id) : null;
        if (departureRef) {
            const departureSnapshot = await transaction.get(departureRef);
            if (departureSnapshot.exists()) {
                const updatedSeats = departureSnapshot.data().seats.map((seat: Seat) => {
                    if (seat.state === "blocked" && seat.number === seatNumber) {
                        seatsLocked.push(seat.number);
                        unlocked = true;
                        return { ...seat, state: "available", timeBlock: 0 };
                    }
                    return seat;
                });
                if (unlocked) {
                    transaction.update(departureRef, { seats: updatedSeats, locked: true });
                }
            }
        }
    });
    return unlocked;
}
