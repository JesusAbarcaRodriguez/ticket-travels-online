import { deleteRouteFromCollection } from "@/dataBase";
import { notAllowedResponse } from "@/root";
import { NextApiRequest, NextApiResponse } from "next";

interface ErrorResponse {
    error: string;
}

export async function deleteRoute(req: NextApiRequest, res: NextApiResponse<string | ErrorResponse | null>) {
    try {
        const id = String(req.query.id);
        const data = await deleteRouteFromCollection(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const handlers = {
    DELETE: (_req: NextApiRequest, res: NextApiResponse) => deleteRoute(_req, res),
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers](req, res);
    return handler! || notAllowedResponse(res, method!);
}
