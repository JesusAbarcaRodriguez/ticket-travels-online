import { resetPass } from "@/dataBase";
import { notAllowedResponse } from "@/root/api/responses";
import type { NextApiRequest, NextApiResponse } from "next";

export async function recoveryPass(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const email = req.body.email as string;
        if (!email) {
            throw new Error("Por favor proporcione email");
        }
        await resetPass(email);
        return res.status(401).json({ message: "Email sent" });
    }
    return res.status(405).json({ message: "Method not allowed" });
}

const handlers = {
    POST: async (req: NextApiRequest, res: NextApiResponse) => await recoveryPass(req, res),
};

export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers] || notAllowedResponse;
    return await handler(req, res);
}
