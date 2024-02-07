import { db } from "../config/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
export default async function payRegister(pay: string) {
    if (!pay) {
        throw new Error("Missing Fields");
    }
    const dbInstance = collection(db, "payments");
    const newDocRef = doc(dbInstance);
    const savePay = async () => {
        await setDoc(newDocRef, {
            id: newDocRef.id,
            idPayment: pay,
        });
    };
    await savePay();
    return "Pay created";
}
