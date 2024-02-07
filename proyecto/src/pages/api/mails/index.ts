import { SendMail } from "@/dataBase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function SendMails(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const email = req.body.email as string;
        const subject = req.body.subject as string;
        const body = req.body.body as string;
        const pdfUrl = req.body.pdfUrl as string;
        try {
            await SendMail(email, subject, body, pdfUrl);
            res.status(200).json({ message: "Correo enviado exitosamente" });
        } catch (error) {
            res.status(500).json({ error: "Error al enviar el correo" });
        }
    } else {
        res.status(405).json({ error: "Método no permitido" });
    }
}
