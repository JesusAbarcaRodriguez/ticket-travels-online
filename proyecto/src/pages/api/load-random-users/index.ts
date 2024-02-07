import { loadUser } from "@/dataBase";
import { notAllowedResponse } from "@/root/api/responses";
import { User } from "@/root/types";
import type { NextApiRequest, NextApiResponse } from "next";

type ErrorResponse = {
    error: string;
};

const loadUsers = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const users = req.body as User[];
        if (!users) {
            throw new Error("Please provide email, username, password, contact, type");
        }
        const response = await loadUser(users);
        return res.status(200).json({ message: response });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

const handlers = {
    POST: (req: NextApiRequest, res: NextApiResponse) => loadUsers(req, res),
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers](req, res);
    return handler! || notAllowedResponse(res, method!);
}
