import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase";

export default async function resetPass(email: string) {
    await sendPasswordResetEmail(auth, email);
    return true;
}
