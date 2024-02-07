import { loadRoute } from "@/dataBase";
import { notAllowedResponse } from "@/root/api/responses";
import { Route } from "@/root/types";
import type { NextApiRequest, NextApiResponse } from "next";

type ErrorResponse = {
    error: string;
};

const loadRoutes = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const routes = req.body as Route[];
        if (!routes) {
            throw new Error("Please provide email, username, password, contact, type");
        }
        const response = await loadRoute(routes);
        return res.status(200).json({ message: response });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

const handlers = {
    POST: (req: NextApiRequest, res: NextApiResponse) => loadRoutes(req, res),
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers](req, res);
    return handler! || notAllowedResponse(res, method!);
}
