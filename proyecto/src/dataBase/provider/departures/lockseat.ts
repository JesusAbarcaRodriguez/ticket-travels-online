import { collection, doc, getDocs, query, runTransaction, updateDoc, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { Departure, Seat } from "@/root/types";

export default async function lockSeat(departureId: string, seatNumber: number): Promise<boolean> {
    const dbInstance = collection(db, "departures");
    const q = query(dbInstance, where("id", "==", departureId));
    const querySnapshot = await getDocs(q);

    const departure = querySnapshot.docs[0]?.data() as Departure;
    let locked: boolean = false;
    let seatsLocked: number[] = [];
    const currentTime = new Date();
    await runTransaction(db, async (transaction) => {
        const departureRef = departure ? doc(dbInstance, departure.id) : null;
        if (!departureRef) {
            return;
        }
        const departureSnapshot = await transaction.get(departureRef);
        if (!departureSnapshot.exists()) {
            return;
        }
        const updatedSeats = departureSnapshot.data().seats.map((seat: Seat) => {
            if (seat.state === "available" && seat.number === seatNumber) {
                seatsLocked.push(seat.number);
                locked = true;
                return { ...seat, state: "blocked", timeBlock: currentTime.getTime() };
            }
            return seat;
        });
        if (locked) {
            transaction.update(departureRef, { seats: updatedSeats, locked: true });
            return;
        }
    });
    return locked;
}
