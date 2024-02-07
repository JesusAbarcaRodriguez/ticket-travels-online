import { getByDriver } from "@/dataBase";
import { notAllowedResponse } from "@/root";
import type { NextApiRequest, NextApiResponse } from "next";

const getByDateDriver = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const driver = String(req.query.driver);
        const date = String(req.query.date);
        const data = await getByDriver(driver, date);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const handlers = {
    GET: (_req: NextApiRequest, res: NextApiResponse) => getByDateDriver(_req, res),
};

export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers](req, res);
    return handler! || notAllowedResponse(res, method!);
}
