import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../config/firebase";

const auth = getAuth(app);
export default async function login(email: string, password: string) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (FirebaseError) {
        throw new Error("Usuario o Contraseña incorrecta");
    }
}
