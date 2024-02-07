import { NextApiRequest, NextApiResponse } from "next";
import { getUserByUid } from "@/dataBase";
import { UserToken } from "@/root/types/userToken.type";
import { notAllowedResponse } from "@/root/api/responses";
import { signToken } from "@/jwt";
interface ErrorResponse {
    error: string;
}

export async function login(req: NextApiRequest, res: NextApiResponse<UserToken | ErrorResponse | null>) {
    try {
        const uid = String(req.query.uid);
        const data = await getUserByUid(uid);
        const token = signToken(data.type, data.uid);
        const response = { user: data, token };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const handlers = {
    POST: async (req: NextApiRequest, res: NextApiResponse) => await login(req, res),
};

export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers] || notAllowedResponse;
    return await handler(req, res);
}
