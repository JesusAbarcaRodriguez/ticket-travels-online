import { editRoute, getRoutes, registerRoute } from "@/dataBase";
import { notAllowedResponse } from "@/root/api/responses";
import { Route } from "@/root/types";
import type { NextApiRequest, NextApiResponse } from "next";

type ErrorResponse = {
    error: string;
};

const create = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const route = req.body.route as Route;
        if (!route) {
            throw new Error("Please provide email, username, password, contact, type");
        }
        const response = await registerRoute(route);
        if (response === "Route created") {
            return res.status(200).json(response);
        }
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

const getAll = async (res: NextApiResponse) => {
    try {
        const data = await getRoutes();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export async function editRoutes(req: NextApiRequest, res: NextApiResponse<String | ErrorResponse | null>) {
    try {
        const route = req.body.route as Route;
        const data = await editRoute(route);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
const handlers = {
    GET: (_req: NextApiRequest, res: NextApiResponse) => getAll(res),
    POST: (req: NextApiRequest, res: NextApiResponse) => create(req, res),
    PUT: (req: NextApiRequest, res: NextApiResponse) => editRoutes(req, res),
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers](req, res);
    return handler! || notAllowedResponse(res, method!);
}
