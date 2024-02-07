import type { NextApiRequest, NextApiResponse } from "next";
import { getDeparture } from "@/dataBase";
import { notAllowedResponse } from "@/root/api/responses";
import { Schedule } from "@/root";

const getDepartureApi = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const routeId = String(req.query.routeId);
        const date = String(req.query.date);
        const schedule = JSON.parse(String(req.query.schedule)) as Schedule;
        const response = await getDeparture(routeId, date, schedule);
        if (response) {
            return res.status(200).json(response);
        }
        return res.status(404).json({ message: "No departures found" });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

const handlers = {
    GET: (_req: NextApiRequest, res: NextApiResponse) => getDepartureApi(_req, res),
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers](req, res);
    return handler! || notAllowedResponse(res, method!);
}
