import { NextApiRequest, NextApiResponse } from "next";
import { notAllowedResponse } from "@/root/api/responses";
import { Route } from "@/root/types";
import { searchRoute } from "@/dataBase";

interface ErrorResponse {
    error: string;
}

export async function searchRouteByPlace(req: NextApiRequest, res: NextApiResponse<Route[] | ErrorResponse | string>) {
    try {
        const place = String(req.query.place);
        const response = await searchRoute(place);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const handlers = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => await searchRouteByPlace(req, res),
};

export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers] || notAllowedResponse;
    return await handler(req, res);
}
