import type { NextApiRequest, NextApiResponse } from "next";
import { Bus } from "@/root/types";
import { busRegister, getBuses } from "@/dataBase";
import { notAllowedResponse } from "@/root/api/responses";

const create = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const bus = req.body.bus as Bus;

        if (!bus) {
            throw new Error("Please provide email, username, password, contact, type");
        }
        const response = await busRegister(bus);
        if (response === "Bus created") {
            return res.status(200).json(response);
        }
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};
const getBusesApi = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const response = await getBuses();
        if (response) {
            return res.status(200).json(response);
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

const handlers = {
    POST: (req: NextApiRequest, res: NextApiResponse) => create(req, res),
    GET: (req: NextApiRequest, res: NextApiResponse) => getBusesApi(req, res),
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers](req, res);
    return handler! || notAllowedResponse(res, method!);
}
