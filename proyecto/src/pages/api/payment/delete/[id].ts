import { deletePayById } from "@/dataBase";
import { NextApiRequest, NextApiResponse } from "next";

interface ErrorResponse {
    error: string;
}

export default async function deleteRegisterPay(req: NextApiRequest, res: NextApiResponse<string | ErrorResponse | null | boolean>) {
    try {
        const id = String(req.query.id);
        const data = await deletePayById(id);
        if (data === "No payment record exists.") {
            return res.status(201).json(data);
        }
        return res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
