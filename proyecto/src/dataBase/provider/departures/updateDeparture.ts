import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { Departure } from "@/root/types";

export default async function updateDeparture(departures: Departure) {
    const departureRef = doc(db, "departures", departures.id);
    await updateDoc(departureRef, departures);
    return "updated";
}
