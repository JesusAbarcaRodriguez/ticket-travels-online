import { NextApiRequest, NextApiResponse } from "next";
import { deleteUserFromCollection } from "@/dataBase";

interface ErrorResponse {
    error: string;
}

export default async function deleteUser(req: NextApiRequest, res: NextApiResponse<string | ErrorResponse | null>) {
    try {
        const uid = String(req.query.uid);
        const data = await deleteUserFromCollection(uid);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
