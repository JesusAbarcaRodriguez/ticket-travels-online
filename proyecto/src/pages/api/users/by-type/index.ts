import { NextApiRequest, NextApiResponse } from "next";
import { notAllowedResponse } from "@/root/api/responses";
import { User } from "@/root/types";
import { getUsersByType } from "@/dataBase";

interface ErrorResponse {
    error: string;
}

export async function searchUserByName(req: NextApiRequest, res: NextApiResponse<User[] | ErrorResponse | string>) {
    try {
        const type = String(req.query.type);
        const response = await getUsersByType(type);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const handlers = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => await searchUserByName(req, res),
};

export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers] || notAllowedResponse;
    return await handler(req, res);
}
