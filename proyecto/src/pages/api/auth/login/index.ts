import { login } from "@/dataBase";
import { notAllowedResponse } from "@/root/api/responses";
import type { NextApiRequest, NextApiResponse } from "next";

export async function loginAuth(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const email = req.body.email as string;
            const password = req.body.password as string;
            if (!password || !email) {
                throw new Error("Por favor proporcione email y password");
            }
            const response = await login(email, password);
            if (response) return res.status(200).json(response);

            return res.status(401).json({ message: "Usuario no encontrado" });
        } catch (error) {
            return res.status(401).json({ message: "Usuario o Contraseña incorrecta" });
        }
    }
    return res.status(405).json({ message: "Method not allowed" });
}

const handlers = {
    POST: async (req: NextApiRequest, res: NextApiResponse) => await loginAuth(req, res),
};

export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers] || notAllowedResponse;
    return await handler(req, res);
}
