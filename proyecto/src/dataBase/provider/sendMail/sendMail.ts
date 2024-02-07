import { addDoc, collection } from "firebase/firestore";
import { db } from "../config";

export default async function SendMail(email: string, subject: string, body: string, pdfUrl?: string) {
    const collectionRef = collection(db, "mails");
    let content = "";

    if (pdfUrl) {
        content = `<div><h1></h1><h2>${body}</h2><a href="${pdfUrl}">Download Ticket</a></div>`;
    } else {
        content = `<div><h1></h1><h2>${body}</h2></div>`;
    }
    const correoContent = {
        to: email,
        message: {
            subject,
            text: body,
            html: content,
        },
    };

    return await addDoc(collectionRef, correoContent);
}
