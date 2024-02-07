import { editUserFromCollection, getUsers } from "@/dataBase";
import { NextApiRequest, NextApiResponse } from "next";
import { notAllowedResponse } from "@/root/api/responses";
import { User } from "@/root/types";
type ErrorResponse = {
    error: string;
};
export async function getAll(res: NextApiResponse) {
    try {
        const data = await getUsers();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
export async function editUser(req: NextApiRequest, res: NextApiResponse<String | ErrorResponse | null>) {
    try {
        const user = req.body.user as User;
        const data = await editUserFromCollection(user);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
const handlers = {
    GET: (_req: NextApiRequest, res: NextApiResponse) => getAll(res),
    PUT: (_req: NextApiRequest, res: NextApiResponse) => editUser(_req, res),
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers](req, res);
    return handler! || notAllowedResponse(res, method!);
}
