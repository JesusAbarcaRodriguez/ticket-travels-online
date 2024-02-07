import { loadBuses } from "@/dataBase";
import { notAllowedResponse } from "@/root/api/responses";
import { Bus } from "@/root/types";
import type { NextApiRequest, NextApiResponse } from "next";

const loadBus = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const buses = req.body as Bus[];
        if (!buses) {
            throw new Error("Please provide email, username, password, contact, type");
        }
        const response = await loadBuses(buses);
        return res.status(200).json({ message: response });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

const handlers = {
    POST: (req: NextApiRequest, res: NextApiResponse) => loadBus(req, res),
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers](req, res);
    return handler! || notAllowedResponse(res, method!);
}
