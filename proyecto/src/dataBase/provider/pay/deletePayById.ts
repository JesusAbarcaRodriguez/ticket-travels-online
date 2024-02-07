import { collection, doc, deleteDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export default async function deletePayById(idPayment: string) {
    const dbInstance = collection(db, "payments");
    const q = query(dbInstance, where("idPayment", "==", idPayment));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        return "No payment record exists.";
    }
    const docRef = doc(db, "payments", querySnapshot.docs[0].id);
    await deleteDoc(docRef);
    return "Verified payment";
}
